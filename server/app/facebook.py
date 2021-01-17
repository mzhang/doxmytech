from app import app
from flask import Flask
from flask import make_response,jsonify,send_file,request
import requests, json 

def getFacebookFeed(posts):
    out = "created_time, message\n"
    for post in posts:
        out += post["created_time"] + ","
        out += post["message"].replace(",", " ").replace("\n", " ") + "\n"
    
    return out

@app.route('/facebookCheck',methods=['POST'])
def facebookCheck():
    content = request.json
    profileLink = content['profileLink']
    accessCode = content['accessCode']
    profileID = content['profileID']

    r = requests.get("https://graph.facebook.com/" + profileID + "?field=name, id, last_name&access_token=" + accessCode)

    if r.status_code != 200:
        result = "false"
    else:
        result = "true"

    response = {"success": result, "profileID": profileID}

    return jsonify(response)

def facebookData(profileID, accessCode):
    r = requests.get("https://graph.facebook.com/" + profileID + "?fields=name,email&access_token=" + accessCode)

    print(r.text)

    jsonData = r.json()
    return jsonData

@app.route('/facebookFeed/<profileID>&<accessCode>')
def facebookFeed(profileID, accessCode):
    r = requests.get("https://graph.facebook.com/" + profileID + "/feed?access_token=" + accessCode)

    print(r.text)
    jsonData = r.json()
    posts = jsonData["data"]

    response = make_response(getFacebookFeed(posts))
    response.headers['Content-Disposition'] = 'attachment; filename='+profileID+'.csv' 
    response.mimetype='text/csv'
    return response



