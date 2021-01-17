from app import app

from flask import make_response
from flask import jsonify
import requests
import json, csv, uuid, os
from dotenv import load_dotenv
from app import dropbase

load_dotenv()

headers = {"Authorization": "Bearer " + os.getenv("TWITTER_BEARER_TOKEN")}

def getTwitterID(username):
    IdRes = requests.get('https://api.twitter.com/2/users/by/username/'+username,headers = headers).json()
    twitterID = IdRes['data']['id']
    return twitterID

@app.route("/twitterBio/<username>")
def getBio(username):
    BioRes = requests.get('https://api.twitter.com/2/users/by/username/'+username+'?user.fields=description',headers = headers).json()
    bio=BioRes['data']['description']
    return bio

@app.route("/twitterTimeline/<username>")
def getTimeline(username):
    UniqueID = str(uuid.uuid4())

    userid = getTwitterID(username)
    TimelineRes = requests.get('https://api.twitter.com/2/users/'+userid+'/tweets?max_results=100&tweet.fields=created_at', headers = headers).json()
    data = list()
    for i in TimelineRes['data']:
        i['text'] = i['text'].replace(",", " ")
        i['text'] = i['text'].replace("\n", "").replace("\r", "")
        data.append({'text':i['text'], 'created_at':i['created_at']})
    for i in range(31):
        try:
            paginate = TimelineRes["meta"]["next_token"]
        except:
            break
        
        TimelineRes = requests.get('https://api.twitter.com/2/users/' + userid + '/tweets?max_results=100&pagination_token='+paginate+'&tweet.fields=created_at',headers=headers).json()
        for i in TimelineRes['data']:
            i['text'] = i['text'].replace(",", " ")
            i['text'] = i['text'].replace("\n", "")
            data.append({'text':i['text'], 'created_at':i['created_at']})
    csvtext = "text,created_at,uuid\n"
    for i in data:
        csvtext += i['text'] + "," + i['created_at'] + "," + UniqueID + "\n"
    dropbase.uploadFile("twitter", csvtext)
    response = make_response(csvtext)
    response.headers['Content-Disposition'] = 'attachment; filename='+username+'.csv'
    response.mimetype='text/csv'
    return response


