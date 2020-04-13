module.exports={
    server_port:8080,
    db_url:'mongodb://localhost:27017/local',
    db_schemas:[
        {file:'./chat_schema', collection:'chats', schemaName:'ChatSchema', modelName:'ChatModel'}
    ],
    route_info:[
        // {file:'./chat', path:'/process/addchat', method:'addChat', type:'post'}
    ]
}