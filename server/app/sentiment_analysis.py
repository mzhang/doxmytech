from azure.ai.textanalytics import TextAnalyticsClient
from azure.core.credentials import AzureKeyCredential
from dotenv import load_dotenv
import os
load_dotenv()

key = os.getenv('AZURE_KEY')
endpoint = os.getenv('AZURE_ENDPOINT')

def authenticate_client():
    ta_credential = AzureKeyCredential(key)
    text_analytics_client = TextAnalyticsClient(
            endpoint=endpoint,
            credential=ta_credential)
    return text_analytics_client

def find_sentiment(client, text):
    response = client.analyze_sentiment(documents=text)[0]
    #print("Document Sentiment: {}".format(response.sentiment))
    sent = [response.confidence_scores.positive, response.confidence_scores.neutral, response.confidence_scores.negative]
    return sent


def sentiment_analysis(text):
    client = authenticate_client()
    sentiment = []
    for i in text:
        sentiment.append(find_sentiment(client,[i]))
    return sentiment