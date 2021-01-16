from flask import Flask
from flask import jsonify
import requests
import json, csv
headers = {"Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAOFOLwEAAAAAVRkvjw52a5E9k3O1tnbxwRxvuyQ%3DbI8F9XiX7uILHh3iYx6mA5h6lAPkGmuoetPahhPjzEmpjMVMNY "}

def getTimeline(userid):
    TimelineRes = requests.get('https://api.twitter.com/2/users/'+userid+'/tweets?max_results=100&tweet.fields=created_at', headers = headers).json()
    data = list()
    for i in TimelineRes['data']:
        i['text'] = i['text'].replace(",", " ")
        i['text'] = i['text'].replace("\n", "")
        data.append({'text':i['text'], 'created_at':i['created_at']})
    for i in range(31):
        try:
            paginate = TimelineRes["meta"]["next_token"]
        except:
            break
        TimelineRes = requests.get('https://api.twitter.com/2/users/' + userid + '/tweets?max_results=100&pagination_token='+paginate+'&tweet.fields=created_at',headers=headers).json()
        for i in TimelineRes['data']:
            i['text'] = i['text'].replace(",", " ")
            i['text'] = i['text'].replace("\n", "")
            data.append({'text':i['text'], 'created_at':i['created_at']})
    with open('tweets.csv','w',encoding='utf8', newline='') as output_file:
        fc=csv.DictWriter(output_file,fieldnames=data[0].keys(),)
        fc.writeheader()
        fc.writerows(data)


def getLocation(username):
    BioRes = requests.get('https://api.twitter.com/2/users/by/username/'+username+'?user.fields=location',headers = headers).json()
    bio=BioRes['data']['location']
    return bio


print(getLocation("POTUS"))