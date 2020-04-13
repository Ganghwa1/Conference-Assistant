var Schema = {};

Schema.createSchema = function(mongoose){

    var ChatSchema = mongoose.Schema({
        // chat_idx : {type : mongoose.Schema.ObjectId, index: {unique: true}, required:true},
        sender : {type: String, index : {unique :false}, required: true, 'default': 'test sender'},
        contents :{type : String, trim : true, 'default': ' '},
        created_at : {type: Date, index : {unique : false}, 'default' : Date.now},
    });

    mongoose.model('chats',ChatSchema);

    // 모델 객체에서 사용하는 메소드 정의
    // ChatSchema.static('findById', function(id, callback){
    //     return this.find({id : id}, callback);
    // });

    ChatSchema.static('findAll', function(callback){
        return this.find({ }, callback);
    })
}

module.exports = Schema;
