var mongoose = require('mongoose');

var database={};
require('./chat_schema');

// 데이터베이스 초기화
database.init = function(app,config){
    console.log('database init');

    connect(app,config);
}

// 데이터베이스 연결, 응답 객체 속성으로 db 객체 추가
function connect(app,config){

    mongoose.Promise = global.Promise;
    mongoose.connect(config.db_url);
    database.db = mongoose.connection;

    database.db.on('error', console.error.bind(console,'mongoose connection error!'));
    database.db.on('open',function(){
        console.log('database is connected: ' + config.db_url);

        // config에 등록된 스키마, 모델 객체 생성
        createSchema(app,config);

    });
    database.db.on('disconnected',connect);
}

// 데이터베이스 스키마 및 모델 객체 생성
function createSchema(app,config){
    console.log('config에 정의된 스키마 수:%d',config.db_schemas.length );

    for(var i=0; i<config.db_schemas.length; i++){
        var curItem = config.db_schemas[i];

        // 모듈 파일에서 모듈 불러오기
        var curSchema = require(curItem.file).createSchema(mongoose);
        console.log('%s 모듈 불러온 후 스키마 정의 완료', curItem.file);

        // 모델 정의
        var curModel = mongoose.model(curItem.collection, curSchema);

        // database 객체에 속성으로 추가
        database[curItem.schemaName] = curSchema;
        database[curItem.modelName] = curModel;
        console.log('schema: %s, model: %s이 database 객체 속성으로 추가됨',curItem.schemaName, curItem.modelName);
    }

    app.set('database',database);
}

module.exports=database;