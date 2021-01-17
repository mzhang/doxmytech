from app import app
from flask import Flask
from flask import make_response,jsonify,send_file,request
import requests, json

from facebook import facebookData

@app.route("/analyzeLinks/<facebook>&<reddit>&<twitter>")
def AnalyzeLinks(facebookID, facebookAccess, reddit, twitter): #facebookID = id, facebookAccess = access, reddit = username, twitter = username
    facebookJSON = facebookData(facebookID, facebookAccess)

    fullName = facebookJSON.