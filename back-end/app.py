from flask import Flask, request, jsonify
from main import main_function

app = Flask(__name__)

@app.route('/')
def home():
    return "welcome to the home path"

@app.route('/api/url', methods=['GET'])
def get_url():

    my_header_value = request.headers.get('header_url_key')
    unqiue_items = main_function(my_header_value)
    return unqiue_items

    

if __name__ == '__main__':
    app.run(debug=True)
