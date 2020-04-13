<template>
    <div class="chatroom-form">
        <h4 class="chat-title"><span>채팅방 제목</span></h4>
        <button class="goto-minutes-btn" type="button"><router-link :to="{name:'CreateMinutesPage'}">회의록 생성</router-link></button>
        <!-- <button type="button"><img src="../img/menu.png"></button> -->
         <div class="page-container">
          <div class="textarea">
              <div class="messages" v-for="(msg, index) in messages" :key="index">
                  <div class="profile-div"><img class="profile-img" src="../img/profile.png">
                  <p class="user-name-p">user1</p></div>
                  <p><span class="font-weight-bold"></span>&nbsp;&nbsp;{{ msg.message }} </p>
                  <p class="date">{{moment(date).format('MM-DD mm:ss')}}</p>
          </div>
          </div>
        <div class="input_div">
          <div class="file_input_div">
             <img src="../img/fileupload.png" class="file_input_img_btn" alt="open" />
             <input type="file" name="file_1" class="file_input_hidden" onchange="javascript: document.getElementById('fileName').value = this.value"/>
          </div>
           <div class="chat_input_div">
             <input type="text" v-model="message" @keyup.enter="sendMessage()" placeholder="채팅을 입력하세요."/>
             <button @click="sendMessage()">전송</button>
           </div>
        </div>
      </div>
    </div>
</template>
<script>
import moment from 'moment';

export default {
    name: 'ChatroomForm',

    data(){
        return{
            message : '',
            messages : []
        }
    },
    methods: {
        sendMessage(){
            this.$socket.emit('SEND_MESSAGE',{
                message: this.message
            });
            this.message = ''
        }
    },
    mounted(){
        this.$socket.on('MESSAGE', (data)=>{
            if(data.message.length !=0){
                this.messages = [...this.messages,data];
            }
       });
    }
}
</script>
<style scoped>

.chatroom-form{
   z-index:0;
   position: fixed;
   margin-top:1.8%;
   width: 580px;
   height: 610px;
   margin-left: 17%;
   box-shadow: 4px 4px 2px rgb(233, 233, 233);
   background-color: #fff;
   border: 1px solid #eeeeee;
   border-radius: 1.2rem;
}
.chat-title{
    display: inline;
    margin-left: 20px;
    font-size: 18px;
    display:inline-block;
}
button img{
    margin-left: 999%;
    margin-top:20px;
    padding-left: 10%;
    height:30px;
    width:37px;
}
.textarea{
  height:420px;
  margin-left: 10%;
  margin-bottom: -130px;
  width:163%;
  overflow-y:scroll;
}
.page-container{
  height: 700px;
  width: 300px;
  border: 1px solid rgba(#000, .12);
}
.chatroom-input-form{
   position:fixed;
   left:40%;
   top:105%;
   width: 600px;
   height:10%;
   margin: -165px 0 0 -205px;
   padding: 45px 60px 60px;
   background-color: rgb(223, 223, 223);
   border: 1px solid #ededed;
   border-radius: 0.8rem;
   text-align:left;
}
input[type="text"]{
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 15px;
    margin-left:3%;
    padding-right: 54.5%;

}
.chat_input_div{
    margin-left: 48px;
    width:165%;
    height:56px;
    border : 1px solid rgba(184, 184, 184, 0.932);
    border-radius: 1rem;
}
.chat_input_div button{
    /* margin-left: 50%; */
    height: 100%;
    width: 58px;
    margin-left: 0.5px;
    border-radius: 0.4rem;
    background-color: #32a852;
    font-weight: 600;
    color:white;
}
.input_div{
    padding-top: 54%;
    font-size: 14px;
}
.file_input_div {
    position:fixed;
    margin-top: -5.7%;
}
.file_input_img_btn {
    overflow: hidden;
    width:22px;
    height:25px;
    margin-left: 30%;
    margin-top: 353%;
    padding:0 0 0 5px;
}
.file_input_hidden {
    position: absolute;
    margin-left: 50%;
    margin-top:-10px;
    right:-15px;
    top:110px;
    width:50px;
    opacity:0;
    filter: alpha(opacity=0);
    -ms-filter: alpha(opacity=0);
    cursor:pointer;
}
.messages{
    width:50%;
    height:65px;
    padding-top:22px;
    margin-left:40px;
    font-size:14px;
    color:rgb(39, 39, 39);
    font-weight: 500;
    background-color:rgb(212, 234, 245);
    margin-top:10px;
    overflow:inherit;
    border-radius : 0.5rem;
}
.date{
    font-size:12px;
    color:gray;
    margin-left: 68%;
}

.profile-img{
    position:absolute;
    z-index: 2;
    margin-left: -60px;
    margin-top:-23px;
    width:50px;
    height:50px;
    overflow :inherit;
}
.user-name-p{
    position: absolute;
    z-index: 2;
    margin-top:28px;
    margin-left: -52px;
    overflow: inherit;
}
.goto-minutes-btn{
    padding-top:10px;
    padding-bottom:10px;
    margin-left: 5px;
    border-radius: 0.3rem;
    background-color:rgb(192, 192, 192);
    color:white;
    font-weight: 700;
    width:15%;
}
.goto-minutes-btn:hover{
    padding-top:10px;
    padding-bottom:10px;
    margin-left: 5px;
    border-radius: 0.3rem;
    background-color:rgb(241, 241, 241);
    color:#32a852;
    font-weight: 700;
    width:15%;
}
a{
     text-decoration:none;
     color:white;
     font-size:14px;
}
a:hover{
    color:#32a852;
    font-size:14px;
}
.profile-div{
    overflow-y:scroll;
}
</style>