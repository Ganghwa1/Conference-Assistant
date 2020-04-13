var database= require('../database/database');
var ChatSchema;
var ChatModel;

// 데이터베이스 객체, 스키마 객체, 모델 객체 전달됨
// var init = function(db, schema, model){
//     console.log("database instance init");

//     database = db;
//     ChatSchema = schema;
//     ChatModel = model;
// }


// var addChat = function(req,res,rtnMessage){
//     var contents = rtnMessage;

//     // 데이터베이스 객체 참조
// 	var database = req.app.get('database');

//     if(database.db){
//         addChat(database,'test sender',contents, function(err,addedchat){
//             if(err){
//                 return;
//             }
//             if(addedchat){
//                 console.dir(addedchat);
//             }
//         });
//     }
// }

// 메세지 추가 함수
var addChat = function(database, sender, contents, callback){
    console.log('addchat 호출됨: ' + contents);

    // 인스턴스 생성
    var chat = new database.ChatModel({"sender":sender, "contents":contents});

    // save()호출 - 성공시 메세지 담긴 addedchat 객체 담겨져서 반환
    chat.save(function(err){
        if(err){
            callback(err, null);
            return;
        }
        console.log("chat data is added");
        callback(null, chat);
    });
}

// module.exports.init = init;
module.exports.addChat = addChat;
