from app import app

from flask import Flask
from flask import make_response,jsonify,send_file,request
import requests, json, csv, io, uuid

def getRedditJSON(username):
    redditRes = requests.get('https://api.pushshift.io/reddit/search/comment/?author='+username+'&size=100')
    out = {}
    for post in redditRes.json()["data"]:
        out[post["permalink"]]=post["body"]
    return jsonify(out)
    
def getRedditCSV(username):
    UniqueID = str(uuid.uuid4())
    redditRes = requests.get('https://api.pushshift.io/reddit/search/comment/?author='+username+'&size=100')
    out = "subreddit,timestamp,content,uuid\n"
    for post in redditRes.json()["data"]:
        out += post["subreddit"] + ","
        out += str(post["created_utc"]) + ","
        out += post["body"].replace(",", " ").replace("\n", " ") + ","
        out +=  UniqueID + "\n"
        
    return out

def getRedditText(username):
    redditRes = requests.get('https://api.pushshift.io/reddit/search/comment/?author='+username+'&size=100')
    out = ""
    for post in redditRes.json()["data"]:
        out += post["body"] + " "
    return out

@app.route('/reddit/<username>')
def reddit(username):
    return getRedditJSON(username)

@app.route('/redditCSV/<username>')
def redditCSV(username):
    response = make_response(getRedditCSV(username))
    response.headers['Content-Disposition'] = 'attachment; filename='+username+'.csv' 
    response.mimetype='text/csv'
    return response
