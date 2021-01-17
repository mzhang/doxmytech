import requests
import os
from dotenv import load_dotenv

load_dotenv()

def getUploadURL(token):
    response = requests.post(
        'https://api2.dropbase.io/v1/pipeline/generate_presigned_url',
        {
            "token": token
        })

    if response.status_code == 200:
        return response.json()
    else:
        print("Error getting upload URL")

def uploadFile(media, csvFilePath):
    token = os.getenv('DROPBASE_' + media.upper() + '_TOKEN')
    uploadInfo = getUploadURL(token)

    url = uploadInfo["upload_url"]
    jobId = uploadInfo["job_id"]

    uploadRes = requests.put(url, data=open(csvFilePath, 'rb'))
    if (uploadRes.status_code == 200):
        return jobId

def GetTableData(token, table):
    r = requests.get(os.getenv("DROPBASE_REST_API") + "/" + table, headers={"Authorization": "Bearer " + os.getenv("DROPBASE_REST_SECRET")})
    return json.loads(r.text)

# uploadFile('twitter', './csvData/tweets.csv')
