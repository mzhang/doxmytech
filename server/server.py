from flask import Flask,make_response,jsonify
import requests 
import json, csv, io
app = Flask(__name__)
app.config["DEBUG"] = True

@app.route('/hello', methods=['GET'])
def hello_world():
    return 'Hello World!'

def getReddit(username):
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

# def getRedditCSVList(username):
#     redditRes = requests.get('https://api.pushshift.io/reddit/search/comment/?author='+username+'&size=100')

#     dest = io.StringIO()
#     writer = csv.writer(dest)

#     writer.writerow(["subreddit", "created_time", "content"])
#     for post in redditRes.json()["data"]:
#         writer.writerow([post["subreddit"],str(post["created_utc"]),post["body"]])
        
#     return dest

@app.route('/reddit/<username>')
def profile(username):
    return getReddit(username)

@app.route('/redditCSV/<username>')
def getReddit(username):
    response = make_response(getRedditCSV(username))
    response.headers['Content-Disposition'] = 'attachment; filename='+username+'.csv' 
    response.mimetype='text/csv'
    return response

app.run()
