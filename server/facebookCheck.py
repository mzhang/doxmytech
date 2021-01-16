import requests
from flask import Flask, render_template, redirect, url_for,request
from flask import make_response

from server import app

@app.route('/facebookCheck', methods=['POST'])
def facebookCheck():
   message = None
   if request.method == 'POST':
        profileLink = request.form['profileLink']
        accessCode = request.form['accessCode']

        profileHTTP = requests.get(profileLink)
        rawData = profileHTTP.text
        index = rawData.find("fb://profile/")
        index += len("fb://profile/")
        counter = 0
        while rawData[index+counter].isdigit():
            counter+=1

        profileID = rawData[index:index+counter]

        r = requests.get("https://graph.facebook.com/" + profileID + "?field=name, id&access_token=" + accessCode)

        if r.status_code != 200:
            result = "false"
        else:
            result = "true"

        response = make_response(result)
        response.headers['Content-Type'] = "application/json"
        return response

if __name__ == "__main__":
    app.run(debug = True)