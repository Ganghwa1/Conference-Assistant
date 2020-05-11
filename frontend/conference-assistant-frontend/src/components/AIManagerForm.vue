<template>
    <div class="aimediation-form">
        <img src="../img/ai.png">
        <h4>회의 중재&nbsp;&nbsp;&nbsp;<toggle-button @change="onChangeEventHandler" :value="true" :labels="{checked: 'ON', unchecked:'OFF'}"></toggle-button></h4>
        <textarea class="textarea" disabled v-auto-scroll-bottom></textarea>
        <div v-if="onChanged" class="welcome-div">
                <p> 안녕하세요!<br>저는 user1님의 실시간 감정 중재를
                    <br>도와드리는 로봇이에요.
                </p>
            </div>
    </div>
</template>
<script>
export default {
    name : 'AIMediationForm',
    data(){
        return{
            onChanged : true
        }
    },
    methods : {
        onChangeEventHandler(){
            this.onChanged = !this.onChanged;
        }
    }
}
</script>
<style scoped>
.aimediation-form{
   position: fixed;
   left: 75%;
   top: 68%;
   width: 300px;
   height: 380px;
   margin: -165px 0 0 -228px;
   padding: 45px 60px 60px;
   background-color: #fff;
   border: 1px solid  #eeeeee;
   box-shadow: 4px 4px 2px rgb(233, 233, 233);
   border-radius: 1.2rem;
}
textarea{
   position: fixed;
   left: 75%;
   top: 68%;
   width: 300px;
   height: 380px;
   margin: -165px 0 0 -228px;
   padding: 45px 60px 60px;
   opacity:0;
   filter: alpha(opacity=0);
   -ms-filter: alpha(opacity=0);
   border: 1px solid  #eeeeee;
   box-shadow: 4px 4px 2px rgb(233, 233, 233);
   border-radius: 1.2rem;
}
.aimediation-form h4{
    margin-top:-24%;
    margin-left: 5%;
    font-size: 20px;
    font-weight: 700;
}
img{
    margin-top:-18%;
    margin-left:-25%;
    width:47px;
    height: 45px;
}
.aimediation-form .welcome-div{
    margin-top:10px;
    padding: 8px 3px 3px 10px;
    font-size: 14px;
    font-weight: 500;
    background: rgb(253, 239, 199);
    color:rgb(51, 51, 51);
    margin-left: -52px;
    width:155%;
    height: 25%;
    border-radius: 0.2rem;
    box-shadow: 4px 4px 2px rgb(204, 204, 204);
}
.toggle-btn{
   width:50px;
}
</style>