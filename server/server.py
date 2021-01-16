from flask import Flask,make_response,jsonify,send_file
import requests 
import json, csv, io
app = Flask(__name__)
app.config["DEBUG"] = True

import os
from dotenv import load_dotenv

load_dotenv()
twitter_key = os.getenv('TWITTER_KEY')

@app.route('/hello', methods=['GET'])
def hello_world():
    return 'Hello World!'

def getRedditJSON(username):
    redditRes = requests.get('https://api.pushshift.io/reddit/search/comment/?author='+username+'&size=100')
    out = {}
    for post in redditRes.json()["data"]:
        out[post["permalink"]]=post["body"]
    return jsonify(out)
    
def getRedditCSV(username):
    redditRes = requests.get('https://api.pushshift.io/reddit/search/comment/?author='+username+'&size=100')
    out = "subreddit, created_time, content"
    for post in redditRes.json()["data"]:
        out += post["subreddit"] + ","
        out += str(post["created_utc"]) + ","
        out += post["body"] + "\n"
        
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

from wordcloud import WordCloud

@app.route('/redditCloud/<username>')
def redditCloud(username):
    cloud = WordCloud().generate(getRedditText(username)).to_file("/clouds/"+username+".jpg")
    return send_file("/clouds/"+username+".jpg", attachment_filename=username+".jpg")

app.run()
