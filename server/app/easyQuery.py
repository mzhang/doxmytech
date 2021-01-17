import requests, json 

def getQuery(query):
    tableToQuery = 'posts'
    key = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhYmFzZUlkIjoibnBpb3Bna01DYVNQYU1qRndvOFluNSIsImFjY2Vzc1Blcm0iOiJmdWxsIiwidG9rZW5JZCI6ImJLS2NScUVOd0NsRmFpNHFyaEt3RUVvQ0duQTFMclJ2ODhBY3lBODJpSFExZHdDZ0J5MW93bjF4ZW1Lbm0zVnciLCJpYXQiOjE2MTA4NDQxMzMsImV4cCI6MTYxMTAxNjkzMywiaXNzIjoiZHJvcGJhc2UuaW8iLCJzdWIiOiJSZTVmOHhqekdrMlFrZUY2VnBKYThRIn0.NcbCcUk3VxgGfxgtktrHY2Ti5mdiS5Nolryu_Bs9RpQ'
    r = requests.get('https://query.dropbase.io/npiopgkMCaSPaMjFwo8Yn5' + '/' + tableToQuery + query, headers = {"Authorization": key})

    return json.loads(r.text)
