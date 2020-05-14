// express 기본 모듈
var express = require('express')
    ,http  = require('http')
    ,path = require('path');

// express 미들웨어
var bodyParser = require('body-parser')
   ,cookieParser = require('cookie-parser')
   ,static = require('serve-static')
   ,errorHandler = require('errorhandler');

var server = require('http').createServer(app);
var io = require('socket.io')(server);
var cors = require('cors');

// 에러 핸들러 모듈
var expressErrorHandler = require('express-error-handler');

// Session 미들웨어
var expressSession = require('express-session');

// passport 모듈
var passport = require('passport');
var flash = require('connect-flash');

// config 설정 파일 불러오기
var config = require('./config');

// 데이터베이스 파일 불러오기
var database = require('./database/database');

// 데이터베이스 연결 정보
var config = require('./config');

var chat = require('./routes/chat');

var ChatSchema = require('./database/database');
var ChatModel = require('./database/chat_schema');

var app = express();

// 서버 변수 설정 및 public 폴더 설정
app.set('port', process.env.PORT || 8080);

// body-parser로 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({extended:false}))

// body-parser로 application/json 파싱
app.use(bodyParser.json())

// public을 static으로 오픈
app.use('/public', static(path.join(__dirname,'public')))

// cookie-parser 설정
app.use(cookieParser());

// 세션 설정
app.use(expressSession({
    secret:'my key',
    resave:true,
    saveUninitialized:true
}));

// cors를 미들웨어로 사용하도록 등록
app.use(cors());


// 404 에러페이지 처리
var errorHandler = expressErrorHandler({
    static:{
        '404':'./public/404.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

// ==== Passport Strategy 설정 ====

// var LocalStrategy = require('passport-local').Strategy;

// passport.use('local-login', new LocalStrategy({
//     // 요청 파라미터
//     usernameField : 'id',
//     passwordField : 'password',
//     passReqToCallback : true
// }), function(req, id, password, done){
//     console.log('passport local-login : ' + id +', ' + password);

//     var database = app.get('database');
//     database.UserModel.findOne({'id' : id}, function (err, user){
//         // 오류 발생
//         if(err){
//             return done(err);
//         }
//         // id, password가 일치하지 않음
//         if(!user){
//             return done(null, false, req.flash('loginMessage', '등록된 계정이 없습니다.'));
//         }
//         // 정상 처리
//         return done(null,user);
//     });
// });

// passport.use('local-signup', new LocalStrategy({
//     usernameField : 'id',
//     passwordField : 'password',
//     passReqToCallback : true
// }, function(req, id, password, done){
//     // 요청 파라미터 유효성 확인
//     var paramName = req.body.name || req.query.name;
//     var paramTel = req.body.tel || req.query.tel;
//     var paramEmail = req.body.email || req.query.email;

//     process.nextTick(function(){
//         var database = app.get('database');
//         database.UserModel.findOne({'id' : id}, function(err, user){
//             // 오류 발생
//             if(err){
//                 return done(err);
//             }
//             // 이미 가입된 사용자 정보가 있는 경우
//             if(user){
//                 return done(null, false, req.flash('signupMessage', '이미 가입된 계정입니다.'));
//             }else {
//                 var user = new database.UserModel({'id' : id, 'password' : password, 'name' : paramName, 'tel' : paramTel, 'email' : paramEmail});
//                 user.save(function(err){
//                     if(err){
//                         throw err;
//                     }
//                     console.log('user 데이터 추가됨');
//                     return done(null, user);
//                 });
//             }
//         });
//     });
// }));

// // done(null,user) 콜백에서 넘겨주는 user 객체 정보를 이용해 세션 생성
// passport.serializeUser(function(user, done){
//     console.dir(user);
//     done(null,user);
// });

// passport.deserializeUser(function(user, done){
//     console.dir(user);
//     done(null, user); // user : serializeUser에서 만들어진 세션 정보
// });


// ==== server on ====

// passport 사용
var passport= require('passport');
var flash = require('connect-flash');

app.use(passport.initialize()); // passport 초기화
app.use(passport.session());  // 세션 유지
app.use(flash());

//setting cors
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next(); });

app.get('/', function(req, res) {
    res.sendFile('Server on');
});

//connection event handler
io.on('connection' , function(socket) {
        console.log('Connect from Client: '+socket)

        socket.on('SEND_MESSAGE', function(data){
        console.log('message from Client: '+data.message)

        var rtnMessage = { message: data.message };

        // 데이터베이스 저장 메세지
        var msg = data.message;

        // send message to client
        console.log("type:" + typeof(data));

        io.emit('MESSAGE', data);
            if(database && msg != ''){
                chat.addChat(database,'test sender', msg, function(err,result){
                    if(err){
                        throw err;
                    }
                    // 결과 객체 확인
                    if(result && result.insertedCount >0){
                        console.dir(result);
                    }
                });
            }else{
                // 데이터베이스 객체가 초기화되지 않은 경우
                console.log("database is not initialized");
            }
        });
    })

    process.on('SIGTERM', function(){
        app.close();
    });

    app.on('close', function(){
        if(database.db){
            database.db.close();
        }
    });

    server.listen(8080,function() {

    // 데이터베이스 connect() 호출
    database.init(app, config);
    console.log('socket io server listening on port 8080')

});