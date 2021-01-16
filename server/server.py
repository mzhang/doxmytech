from flask import Flask
from flask import jsonify
import requests 
import json
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

@app.route('/reddit/<username>')
def profile(username):
    return getReddit(username)

app.run()
