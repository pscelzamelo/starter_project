from flask import Flask, request, jsonify
from flask_cors import CORS
import json

with open('transactions.json') as json_file:
    data = json.load(json_file)

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def hello():
    name = request.args.get('name', 'World')
    return "Hello {}!".format(name)

@app.route('/transactions', methods=['GET'])
def get_transactions():
    return jsonify(data), 200

if __name__ == '__main__':
    app.run()
