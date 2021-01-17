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

def find_entities(client,text):

    try:
        result = client.recognize_entities(documents = text)[0]
        entities = []
        for entity in result.entities:
            if (entity.category == 'Location' and entity.subcategory == 'GPE') or (entity.category == 'Address') or (entity.category == 'Phone Number') or (entity.category == 'Email'):
                entities.append(entity)
        return entities
    except Exception as err:
        return


def entity_recognition(text):
    client = authenticate_client()
    entities = {"Address":[], "Location":[], "Phone Number":[]}
    for i in text:
        find = find_entities(client,[i])
        for entity in find:
            if entity.category == "Address":
                entities["Address"].append(entity.text)
            elif entity.category == "Location":
                entities["Location"].append(entity.text)
            else:
                entities["Phone Number"].append(entity.text)
    return entities
