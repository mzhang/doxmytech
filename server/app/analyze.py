from app import app
from flask import Flask
from flask import make_response,jsonify,send_file,request
import requests, json, random, math

from app import facebook
from app import easyQuery

@app.route("/analyzeLinks/<facebookID>&<facebookAccess>&<reddit>&<twitter>")
def AnalyzeLinks(facebookID, facebookAccess, reddit, twitter): #facebookID = id, facebookAccess = access, reddit = username, twitter = username
    UUID = str(math.floor(random.random() * 10000000000000))

    if facebookID != "none":
        facebookJSON = facebook.facebookData(facebookID, facebookAccess)

        fullName = facebookJSON["name"]
        email = facebookJSON["email"] 
    
    
    if twitter != "none":
        #Twitter function call
        ""
    

    if reddit != "none":
        #Reddit function call
        ""


    contentJSON = easyQuery.getQuery("?select=content")
    #contentJSON = easyQuery.getQuery("?select=content&uuid=eq." + UUID)
    contentList = []
    for content in contentJSON:
        contentList.append(content["content"])
    
    print(contentList)

    return jsonify(contentJSON)