from pymongo import MongoClient
import re
import json
import pandas as pd
import datetime

client = MongoClient()
# 클래스 객체 할당

client = MongoClient('mongodb://localhost:27017/local')

# DB_HOST = 'XXX.XX.XX.XXX:27017'
# DB_ID = 'root'
# DB_PW = 'PW'
# client = MongoClient('mongodb://%s:%s@%s' % (DB_ID, DB_PW, DB_HOST))

db = client["local"]
# db 객체 할당받기

chats = db["chats"]
# db에서 collection 이름으로 객체를 생성

# post={
#     "id" : "mike",
#     "age" : 20,
#     "text" : "테스트 도큐먼트입니다1."
# }

coll = db.chats
# users 변수에 해당하는 collection 이름으로 할당된다.

# coll.insert(post)

coll_list = db.list_collection_names()
# collection 목록 보기

for chats in coll.find():
    rtn_chats =chats.get('contents')
    text = re.sub('[-=+,#/\?:^$.@*\"※~&%ㆍ!』\\‘|\(\)\[\]\<\>`\'…》]', '', rtn_chats)
    re
    print(text)

# users에 저장된 도큐먼트 모두 불러오기

# res = json.dumps(chats, default=str)
# json 직렬화 (serialize)

# chats collection에서 불러온 json타입 데이터에서 contents 문자열 가져오기


# def cleanText(rtn_chats):
#     for msg in (str)(rtn_chats.values()):
#         text = re.sub('[-=+,#/\?:^$.@*\"※~&%ㆍ!』\\‘|\(\)\[\]\<\>`\'…》]', '',msg)
#         print(text)
#         return text

# cleanText(chats)

