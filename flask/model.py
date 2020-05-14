import os
import re
import sys
import threading
import csv
import textrank
import app

from flask_socketio import SocketIO

from numpy import matrix
from pymongo import MongoClient

from soynlp.tokenizer import RegexTokenizer
from collections import Counter
from konlpy.tag import Okt

client = MongoClient()
# 클래스 객체 할당

matrix = []

client = MongoClient('mongodb://localhost:27017/local')

count =0
tmp_data = ''
text=''
cnt =0
rtn_keyword = ''
noun_list=''

# 쓰레드로 가져온 최근 값

# DB_HOST = 'XXX.XX.XX.XXX:27017'
# DB_ID = 'root'
# DB_PW = 'PW'
# client = MongoClient('mongodb://%s:%s@%s' % (DB_ID, DB_PW, DB_HOST))

class AsyncTask:

    def __init__(self):
        pass

    def TaskA(self):

        global count
        global tmp_data
        global text
        global cnt
        global rtn_keyword
        # 전역변수 사용

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

        # for chats in coll.find():
        #     rtn_chats =chats.get('contents')
        #
        #
        #     print(text)

        cursor = db.chats.find().sort([('created_at', -1)]).limit(1)
        docs = list(cursor)

        for doc in docs:
            if doc !=" " and count==0:
                rtn_msg = doc["contents"]

                tmp_data = rtn_msg
                count += 1

            elif doc !=" " and tmp_data != doc["contents"] :
                rtn_msg = doc["contents"]
                tmp_data = rtn_msg

                # print(tmp_data)
                text = re.sub('[-=+,#/\?:^$.@*\"※~&%ㆍ!』\\‘|\(\)\[\]\<\>`\'…》]', '', tmp_data)

                tokenizer = RegexTokenizer()

                # 명사 빈도 추출

                textrank.init(text)
                tr = textrank.TextRank()
                tr.build()
                tr.extract()

                rtn_keyword = textrank.kw
                print("rtn_keyword:", rtn_keyword)

            count += 1

        threading.Timer(3,self.TaskA).start()

def main():
    at = AsyncTask()
    at.TaskA()
    count=0

if __name__ =='__main_':
    main()
# res = json.dumps(chats, default=str)
# json 직렬화 (serialize)

# chats collection에서 불러온 json타입 데이터에서 contents 문자열 가져오기

# def cleanText(rtn_chats):a
#     for msg in (str)(rtn_chats.values()):
#         text = re.sub('[-=+,#/\?:^$.@*\"※~&%ㆍ!』\\‘|\(\)\[\]\<\>`\'…》]', '',msg)
#         print(text)
#         return text

# cleanText(chats)

