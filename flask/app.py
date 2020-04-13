from flask import Flask
import sys
sys.path.append("../database/")
from database import database

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'


if __name__ == '__main__':
    app.run()
