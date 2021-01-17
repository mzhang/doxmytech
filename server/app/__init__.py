from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True

from app import views 
from app import facebook 
from app import reddit 
from app import twitter 
from app import stringToWordCloud
from app import twitter


