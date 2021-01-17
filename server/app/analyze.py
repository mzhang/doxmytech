from app import app
from flask import Flask
from flask import make_response,jsonify,send_file,request
import requests, json, random, math, time

from app import facebook
from app import easyQuery
from app import stringToWordCloud
from app import twitter
from app import reddit
from app import textAnalysis
from app import hibp
from app import sentiment_analysis
from app import entity_recognition

@app.route("/analyzeLinks/<facebookID>&<facebookAccess>&<redditID>&<twitterID>")
def AnalyzeLinks(facebookID, facebookAccess, redditID, twitterID): #facebookID = id, facebookAccess = access, reddit = username, twitter = username
    UUID = str(math.floor(random.random() * 10000000000000))
    print(f"UUID: {UUID}")

    email = None
    fullName = None
    breaches = []

    if facebookID != "none":
        facebookJSON = facebook.facebookData(facebookID, facebookAccess)

        fullName = facebookJSON["name"]
        email = facebookJSON["email"] 
        breaches = hibp.getBreachInfo(email)
    
    
    if twitter != "none":
        twitterJob = twitter.getTimeline(twitterID, UUID)
    

    if reddit != "none":
        redditJob = reddit.getRedditCSV(redditID, UUID)
    
    finished = False

    #Wait until database is done updating
    while not finished:
        twitterR = requests.get("https://api2.dropbase.io/v1/pipeline/run_pipeline", data={"job_id": twitterJob})
        redditR = requests.get("https://api2.dropbase.io/v1/pipeline/run_pipeline", data={"job_id": redditJob})

        twitterStatus = twitterR.text.replace("\"", "").replace("\n", "")
        redditStatus = twitterR.text.replace("\"", "").replace("\n", "")
        if twitterStatus == "Finished" and redditStatus == "Finished":
            finished = True
        else:
            time.sleep(0.5)

    #Get list of strings
    contentJSON = easyQuery.getQuery("?select=content&uuid=eq." + UUID)
    contentList = []
    for content in contentJSON:
        contentList.append(content["content"])

    readingLevel = None
    stringLength = None
    wordCloudLink = None
    sentiment = []
    entities = []

    if contentList:
        #Text Stuff
        readingLevel = textAnalysis.averageReadingLevel(contentList)
        stringLength = textAnalysis.averageStringLength(contentList)

        #Word Cloud Img Saved Locally
        stringToWordCloud.textListToWordCloud(contentList, UUID) #UUID = fileName
        wordCloudLink = "/" + UUID + ".jpg"

        sentiment = sentiment_analysis.sentiment_analysis(contentList)
        entities = entity_recognition.entity_recognition(contentList)


    returnData = {
        "UUID": UUID,
        "email": email,
        "fullName": fullName,
        "breaches": breaches,
        "readingLevel": readingLevel,
        "stringLength": stringLength,
        "wordCloudLink": wordCloudLink,
        "sentiment": sentiment,
        "entities": entities
    }

    return jsonify(returnData)