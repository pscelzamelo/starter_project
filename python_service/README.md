## Setup

To get up and running, let's use venv. Follow these instructions to get it setup:

On Mac:

```
python3 -m venv venv
. venv/bin/activate
pip install -r requirements.txt
```

On Windows:

```
py -3 -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

If you are having any trouble with running the setup, please refer to this page: https://flask.palletsprojects.com/en/1.0.x/installation/#create-an-environment, or reach out to us. We know that setting up environments can be difficult, so we tried to make it as easy as possible so that you don't waste your time on that.

## Running the backend

Once it's setup, running `python app.py` should have you up and running! You should be able to hit http://localhost:5000/ to see `Hello World!`, http://localhost:5000?name=Jackson to see `Hello Jackson!`, and http://localhost:5000/transactions to get a json list of credit card transactions.

Note: any time you make a change to the backend, you will need to restart it to see those changes reflected through the api/browser.
