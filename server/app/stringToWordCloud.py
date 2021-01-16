from app import app
from flask import Flask
from flask import make_response,jsonify,send_file,request
import requests, json 

from wordcloud import WordCloud

def plot_cloud(wordcloud):
    import matplotlib as plt
    # Set figure size
    plt.figure(figsize=(40, 30))
    # Display image
    plt.imshow(wordcloud) 
    # No axis details
    plt.axis("off");

@app.route('/toWordCloud/',methods=['POST'])
def toWordCloud():

    wc = WordCloud(width = 800, height = 800, 
                background_color ='white', 
                min_font_size = 10)

    content = request.json["data"]
    cloud = wc.generate(content)

    cloud.to_file("./app/cloud.jpg")
    return send_file("cloud.jpg", as_attachment=True, attachment_filename='cloud.jpg')


