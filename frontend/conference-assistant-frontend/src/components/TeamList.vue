<template>
    <div class="team-list">
        <router-link class="router-profile" :to="{name: 'Signup'}">프로필 변경</router-link>
        <router-link clsss="router-main" :to="{name: 'MainPage'}"><div class="team-item">
        <img class="close" src="../img/close.png">
        <img src="../img/dure_team_profile.png">
        <p class="team-name">Team1</p><br>
        <p style="margin-left:100px; font-size:14px;">http://Team1.dure.com</p>
        </div>
        </router-link>
        <button type="button" @click="showModal">팀 추가하기</button>
        <AddTeamModal v-show="isModalVisible" @close="closeModal" @create="showSecondModal"/>
        <CreateTeamModal v-if="isStatusOn"  @close="closeSecondModal"/>
    </div>
</template>
<script>
import AddTeamModal from '../components/AddTeamModal'
import CreateTeamModal from '../components/CreateTeamModal'

export default {
    name : 'TeamList',
    components:{
        AddTeamModal,
        CreateTeamModal
    },
    data(){
        return{
            isStatusOn : false, // 두번째 모달 v-show
            isModalVisible: false,
            isSecondModalVisible : false
        };
    },
    methods:{
        showModal(){
            this.isModalVisible = true;
        },
        closeModal(){
            this.isModalVisible = false;
        },
        showSecondModal(){
            this.isModalVisible = false; // 첫번째 모달 false
            this.isStatusOn = true;
            this.isModalVisible = true;
        },
        closeSecondModal(){
            this.isStatusOn= false;
            this.isModalVisible = false;
            this.isSecondModalVisible = false;
        }
    }
}
</script>
<style scoped>
.team-list .router-profile{
  float:left;
  height: 10%;
   width: 12%;
   margin-top: -5%;
   margin-left: 80%;
   margin-bottom: 25%;
   padding: 1rem;
   font-size: 19px;
   font-weight: bold;
   text-align: center;
   color: #fff;
   border-radius: 2rem;
   background-color: #32a852;
   text-decoration: none;
   transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
a{
    text-decoration:none;
    color:rgb(68, 68, 68);
}
.team-list button[type="button"]{
    margin-left: 6%;
    margin-top: -20%;
    height: 10%;
    width: 85%;
    padding: 2rem;
    font-size: 19px;
    font-weight: 700;
    text-align: center;
    color: #ffff;
    border-radius: 1rem;
    background-color: #cacaca;

}

.team-list button[type="button"]:hover{
    background-color:rgb(141, 141, 141);
    color:#fff;
}
.team-item{
    margin-left: 90px;
    margin-top: 7px;
    width: 85%;
    border : 1.5px solid rgb(223, 223, 223);
    background: #ffffff;
    border-radius: 0.4rem;
    height: 90px;
}
.team-item .close{
    margin-bottom: -37px;
    margin-left: 97%;
    height: 20px;
    width: 20px;
}

.team-item img{
    position: relative;
    margin-right:200px;
    top: -365px;
    height:83px;
    width: 93px;
}
.team-item p{
    position:relative;
    left : 10px;
    top : -410px;
    display: inline;
}
.team-item .team-name{
    left : -128px;
    font-size : 23px;
    font-weight: 700;
}
.team-item :nth-child(4){
    font-size: 15px;
    color:rgb(104, 104, 104);
}

</style>