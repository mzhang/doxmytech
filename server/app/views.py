from app import app

@app.route('/hello', methods=['GET'])
def hello_world():
    return 'Hello World!'