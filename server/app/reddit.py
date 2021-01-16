from app import app
from wordcloud import WordCloud

from flask import Flask
from flask import make_response,jsonify,send_file,request
import requests, json, csv, io

def getRedditJSON(username):
    redditRes = requests.get('https://api.pushshift.io/reddit/search/comment/?author='+username+'&size=100')
    out = {}
    for post in redditRes.json()["data"]:
        out[post["permalink"]]=post["body"]
    return jsonify(out)
    
def getRedditCSV(username):
    redditRes = requests.get('https://api.pushshift.io/reddit/search/comment/?author='+username+'&size=100')
    out = "subreddit, created_time, content\n"
    for post in redditRes.json()["data"]:
        out += post["subreddit"] + ","
        out += str(post["created_utc"]) + ","
        out += post["body"].replace(",", " ").replace("\n", " ") + "\n"
        
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

@app.route('/redditCloud/<username>')
def redditCloud(username):
    cloud = WordCloud().generate(getRedditText(username)).to_file(username+".jpg")
    return send_file(username+".jpg", attachment_filename=username+".jpg")

