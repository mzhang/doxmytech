import requests
import os, random, math
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

def uploadFile(media, csvData):
    filepath = "./app/csvData/" + str(math.floor(random.random() * 100000000)) + ".csv"
    f = open(filepath, "w", encoding='utf-8')
    f.write(csvData)
    f.close()
    
    
    token = os.getenv('DROPBASE_' + media.upper() + '_TOKEN')
    uploadInfo = getUploadURL(token)

    url = uploadInfo["upload_url"]
    jobId = uploadInfo["job_id"]

    uploadRes = requests.put(url, data=open(filepath, 'rb'))
    if (uploadRes.status_code == 200):
        print(f"jobId: {jobId}")
        return jobId
    