import app
from pymongo import MongoClient
import sys
client = MongoClient()

client = MongoClient('mongodb://localhost:27017/local')
db = client["local"]

def selected_chat(req_keyword):

    rtn_messages= []
    for rtn_chats in db.chats.find({'contents':{'$regex': req_keyword}}):
        msg = rtn_chats.get('contents')
        rtn_messages.append(msg)

    print("valid data :", rtn_messages)
    return rtn_messages

