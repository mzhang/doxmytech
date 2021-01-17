from app import app
from pathlib import Path
from flask import Flask
from flask import make_response, jsonify, send_from_directory, request
import os

@app.route('/image/<fileName>', methods=['GET'])
def getImage(fileName):
    if (os.path.exists("./app/wordClouds/" + fileName)):
        filePath = Path(__file__).resolve().parent / "wordClouds"
        return send_from_directory(filePath, fileName)
    else:
        filePath = Path(__file__).resolve().parent / "assets"
        return send_from_directory(filePath, "404.png")
        return 
