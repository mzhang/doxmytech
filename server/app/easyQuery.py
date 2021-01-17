import requests, json, os
from dotenv import load_dotenv

load_dotenv()


def getQuery(query):
    tableToQuery = 'data'
    r = requests.get('https://query.dropbase.io/npiopgkMCaSPaMjFwo8Yn5' + '/' + tableToQuery + query, headers = {"Authorization": "Bearer " + os.getenv("DROPBASE_REST_SECRET")})

    return json.loads(r.text)
