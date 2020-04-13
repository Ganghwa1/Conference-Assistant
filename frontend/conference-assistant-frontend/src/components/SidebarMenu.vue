<template>
    <div class="sidebar-menu">
        <img src="../img/dure_default.png"><router-link :to="{name:'MainPage'}" style="position:absolute;font-size:23px;font-weight:900">&nbsp;&nbsp;Team1</router-link>
        <span><img class="drop-menu-icon" src="../img/drop_menu.png" v-on:click="showDropMenu">
        <div v-if="isStatusOn" class="drop-menu">
            Team2<hr>
            Team3<hr>
        </div></span>
        <p>http://Team1.dure.com</p>
        <div class="route-menu">
            <router-link :to="{name:'FileStoragePage'}">업무자료</router-link><p></p>
            <p><router-link :to="{name:'TimelinePage'}">타임라인</router-link></p>
            <p><router-link :to="{name:'MinutesListPage'}">회의록</router-link></p>
            <p><router-link :to="{name:'Signin'}">&nbsp;&nbsp;&nbsp;&nbsp;- 회의록 목록</router-link></p>
            <!-- <p><router-link :to="{name:'Signin'}">&nbsp;&nbsp;&nbsp;&nbsp;- 승인 대기중</router-link></p>
            <p><router-link :to="{name:'Signin'}">&nbsp;&nbsp;&nbsp;&nbsp;- 승인 완료</router-link></p> -->
        </div>
        <hr>
        <div class="online-userlist">
            <h5>이 팀에 소속된 팀원</h5>
            <img src="../img/offline.png"><button type="button" class="btn"  @mouseover="isActive= true" @mouseleave="isActive= false">{{name}}</button><br>
                <ShowProfileForm v-bind:propsname="name" v-show="isActive"></ShowProfileForm>
            <img src="../img/offline.png"><button type="button" class="btn">user2</button>
        </div>
        <div class="chat-list">
            <h5>채팅방 목록<span><button type="button" class="img-button"><img src="../img/chat_add.png" @click="showCreateChatroomForm" ></button></span></h5>
            <CreateChatroomForm v-if="isClicked" @close="closeCreateChatroomForm"></CreateChatroomForm>
        </div>

</div>
</template>
<script>
import ShowProfileForm from './ShowProfileForm'
import CreateChatroomForm from './CreateChatroomForm'

export default {
    name: 'SidebarMenu',
    components:{
      ShowProfileForm,
      CreateChatroomForm
    },
    data(){
        return {
            isStatusOn : false,
            isActive : false,
            name : 'user1',    // sample user,
            isClicked : false,
            isClosedOn : false
        };
    },
    methods:{
        showDropMenu(){
            this.isStatusOn = !this.isStatusOn;
        },
        showCreateChatroomForm(){
            // 채팅방 생성하기
            this.isClicked = !this.isClicked;
        },
        closeCreateChatroomForm(){
            this.isClosedOn = !this.isClosedOn;
            this.isClicked = !this.isClicked;
        }
    }
}
</script>
<style scoped>
.sidebar-menu{
    position:fixed;
    z-index: 1;
    top:0;
    left:0;
    height: 100%;
    width:15%;
    background-color: #32a852
}
img{
    margin-top: 8%;
    margin-left: 3%;
    width:30%;
    height:9%;
}
a{
    margin-top: 10%;
    color:white;
    text-decoration: none;
    font-weight: bold;
}
.drop-menu{
    margin-top:15px;
    width:140px;
    border-radius: 0.3rem;
    height:150px;
    font-size: 17px;
    padding-top: 5px;
    color:rgb(66, 66, 66);
    font-weight: 500;
    text-align:center;
    background-color: rgba(240, 240, 240, 0.952);
}
.sidebar-menu span{
    position: fixed;
    margin-top: 1.5%;
    color:white;
    font-weight:900;
    font-size: 23px;
}
.sidebar-menu p:nth-of-type(1){
    position: fixed;
    margin-top: -2%;
    margin-left: 77px;
    font-size: 12.5px;
    font-weight:600;
    color: white;
}
.route-menu{
    margin-top: 12%;
    margin-left: 10%;
    font-size: 28px;
    color:white;
}
hr{
    margin-top: 8%;
    border:1px solid rgb(131, 131, 131);
    width: 93%;
    opacity: 0.3;
}
.online-userlist h5{
    margin-top: 5%;
    margin-left: 9%;
    margin-bottom: 0;
    font-size: 15px;
    color:white;
}
.online-userlist p{
    color:white;
}
.online-userlist img{
    margin-left: 12%;
    height:8px;
    width:8px;
}
.online-userlist button{
    margin-left: 4%;
    margin-bottom: 0;
    color:white;
    background:#32a852;
    cursor: pointer;
}
.chat-list h5{
    margin-top: 45%;
    margin-left: 9%;
    font-size: 15px;
    color:white;
}
.chat-list h5 button.img-button{
    margin-top: -50px;
    margin-left: 160%;
    border:none;
    height:50px;
    width: 50px;
    background:transparent;
}
button.img-button img{
    height:23px;
    width:23px;
}

.drop-menu-icon{
    margin-left:120px;
    width: 15px;
    height: 10px;
}

</style>

