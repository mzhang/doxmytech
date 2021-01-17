from azure.ai.textanalytics import TextAnalyticsClient
from azure.core.credentials import AzureKeyCredential
from dotenv import load_dotenv
import os
load_dotenv()


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
    entities = []
    for i in text:
        entities.append(find_entities(client,[i]))
    return entities

key = os.getenv('AZURE_KEY')
endpoint = os.getenv('AZURE_ENDPOINT')

text = ["788 Stargazer Drive", "Mississauga is where i live", "my phone number us 647-939-2690 hmu"]
print(entity_recognition(text))

