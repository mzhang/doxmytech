from flask import Flask

app = Flask(__name__)
app.config["DEBUG"] = True

@app.route('/hello', methods=['GET'])
def hello_world():
    return 'Hello World!'

app.run()
