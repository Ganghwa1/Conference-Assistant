<template>
<transition name="form-fade">
    <div class="create-chatroom-form">
            <h3>채팅방 생성</h3>
            <img class="close-img" src="../img/close.png" @click="close">
            <br>
            <p>채팅방 이름&nbsp;&nbsp;&nbsp;&nbsp;</p><input class="chatname-input" type="text"/>
            <br><br><hr>
            <p>회의 안건</p>
            <img class="add-topic" src="../img/add_topic.png">
            <input class="topic-input" type="text" placeholder="        추가할 회의 안건을 입력해주세요.">
            <hr class="boundary-line-hr">
            <!-- test data -->
            <div class="added-topic-div">
                <p>&nbsp;&nbsp;&nbsp;최종 보고서 작성하기</p>
                <hr style="border : 1px solid #eeeeee; margin-top:15px;">
            </div>
            <!-- ------- -->
            <button class="ok-btn" type="button" @click="close">OK</button>
    </div>
</transition>
</template>
<script>
export default {
    name : 'CreateChatroomForm',
    methods:{
        close(){
            this.$emit('close');
        }
    }
}
</script>
<style scoped>
.form-fade-enter,
.form-fade-leave-active{
    opacity:0;
}
.form-fade-enter-active,
.form-fade-leave-active{
    transition: opacity .3s ease
}
.create-chatroom-form{
   position: fixed;
   left: 75%;
   top: 35%;
   width: 570px;
   height: 615px;
   margin: -165px 0 0 -228px;
   padding: 45px 60px 60px;
   background-color: #fff;
   border: 1px solid  #eeeeee;
   box-shadow: 4px 4px 2px rgb(233, 233, 233);
   border-radius: 1.2rem;
}
h3{
    top:10px;
    font-size: 20px;
    text-align:center;
}
.close-img{
    position:absolute;
    top:25px;
    margin-left: 82%;
    width:20px;
    height:20px;
}
p:nth-child(4){
    padding-top: 50px;
    display: inline;
    font-weight: 500;
}
p:nth-child(9){
    padding-top: 10px;
    text-align: center;
    font-weight: 500;
}
hr{
    border :2px solid rgb(219, 219, 219);
}
.chatname-input{
    padding: 15px 25px 10px 10px;
    border: 1px solid #dfdfdf;
    border-radius: 0.5rem;
    width: 345px;
}
.add-topic{
    padding-top: 7px;
    margin-left: 5%;
    width:26px;
    height:26px;
}
.topic-input{
    margin-left: 20px;
    padding: 15px 25px 10px 10px;
    width: 355px;
    /* font-size:00px; */
}
::placeholder{
    font-size:15px;
    font-weight: 500;
}
.boundary-line-hr{
    border :16px solid #f7f7f7;
    margin-left: -60px;
    width:538px;
}
.added-topic-div{
    padding-top: 10px;
    margin-bottom: 5px;
    font-size:14px;
}
.ok-btn{
    height: 45px;
    width: 130px;
    margin-left: 35%;
    margin-top:35%;
    border-radius: 0.3rem;
    background-color: #32a852;
    font-weight: 600;
    color:white;
}
</style>