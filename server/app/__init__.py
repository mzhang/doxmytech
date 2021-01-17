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
from app import analyze
from app import image

@app.route("/")
def hello():
    return "<h1 style='color:blue'>Hello There!</h1>"