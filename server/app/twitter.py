from app import app

from flask import make_response
from flask import jsonify
import requests
import json, csv

headers = {"Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAOFOLwEAAAAAVRkvjw52a5E9k3O1tnbxwRxvuyQ%3DbI8F9XiX7uILHh3iYx6mA5h6lAPkGmuoetPahhPjzEmpjMVMNY "}

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
    userid = getTwitterID(username)
    TimelineRes = requests.get('https://api.twitter.com/2/users/'+userid+'/tweets?max_results=100&tweet.fields=created_at', headers = headers).json()
    data = list()
    for i in TimelineRes['data']:
        i['text'] = i['text'].replace(",", " ")
        i['text'] = i['text'].replace("\n", "")
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
    csvtext = "text,created_at \n"
    for i in data:
        csvtext += i['text'] + ", " + i['created_at'] + "\n"
    response = make_response(csvtext)
    response.headers['Content-Disposition'] = 'attachment; filename='+username+'.csv'
    response.mimetype='text/csv'
    return response


