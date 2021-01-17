import requests, os
from dotenv import load_dotenv

load_dotenv()

def getBreachInfo(email):
    hibpToken = os.getenv('HIBP_KEY')
    breachRes = requests.get(
        "https://haveibeenpwned.com/api/v3/breachedaccount/" + email, headers={"hibp-api-key": hibpToken, "user-agent": "HackathonProject"})
    if (breachRes.status_code == 200):
        breaches = []
        for leak in breachRes.json():
            leakInfo = requests.get(
                "https://haveibeenpwned.com/api/v3/breach/" + leak["Name"])
            breaches.append(leakInfo.json())
            return breaches
    else:
        print("No data")
        return []