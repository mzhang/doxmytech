from app import app
from flask import Flask
from flask import make_response,jsonify,send_file,request
import requests, json 

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