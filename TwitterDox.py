from flask import Flask
from flask import jsonify
import requests
import json, csv
app = Flask(__name__)
app.config["DEBUG"] = True
headers = {"Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAOFOLwEAAAAAVRkvjw52a5E9k3O1tnbxwRxvuyQ%3DbI8F9XiX7uILHh3iYx6mA5h6lAPkGmuoetPahhPjzEmpjMVMNY "}

username = "aurik___"
TwitterReq = requests.get('https://api.twitter.com/2/users/by/username/' + username, headers=headers).json()
print(TwitterReq)

@app.route("/", methods=['GET'])
def hello_world():
    return "Hello World"
def getTwitterID(username):
    username = "aurik___"
    TwitterReq = requests.get('https://api.twitter.com/2/users/by/username/'+username,headers = headers).json()
    return TwitterReq
app.run()