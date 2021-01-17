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
    twitterJob = None
    redditJob = None
    breaches = []

    if facebookID != "null" and facebookID != "undefined":
        facebookJSON = facebook.facebookData(facebookID, facebookAccess)

        fullName = facebookJSON["name"]
        email = facebookJSON["email"] 
        breaches = hibp.getBreachInfo(email)
    
    if twitterID != "null":
        twitterJob = twitter.getTimeline(twitterID, UUID)
    

    if redditID != "null":
        redditJob = reddit.getRedditCSV(redditID, UUID)
    
    finished = False
    twitterStatus = "Finished"
    redditStatus = "Finished"

    #Wait until database is done updating
    while not finished:
        if twitterJob:
            twitterStatus = ""
            twitterR = requests.get("https://api2.dropbase.io/v1/pipeline/run_pipeline", data={"job_id": twitterJob})
            twitterStatus = twitterR.json()["message"]
        if redditJob:
            redditStatus = ""
            redditR = requests.get("https://api2.dropbase.io/v1/pipeline/run_pipeline", data={"job_id": redditJob})
            redditStatus = redditR.json()["message"]


        if twitterStatus == "Finished" and redditStatus == "Finished":
            finished = True
        else:
            time.sleep(0.5)
            print("sleeping")

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

    print(contentList)

    if contentList:
        #Text Stuff
        readingLevel = textAnalysis.averageReadingLevel(contentList)
        stringLength = textAnalysis.averageStringLength(contentList)

        #Word Cloud Img Saved Locally
        stringToWordCloud.textListToWordCloud(contentList, UUID) #UUID = fileName
        wordCloudLink = "/" + UUID + ".jpg"

        print("finished wordcloud")

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

    print("completed data analysis")

    return jsonify(returnData)