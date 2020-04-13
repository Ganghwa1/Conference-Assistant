<template>
    <div class="timeline-form">
        <img class="default-line-img" src="../img/line.png">
        <img src="../img/check.png">
        <div class="timeline-message-div">
            <span><p>&nbsp;&nbsp;&nbsp;&nbsp;user1님이 팀을 생성했습니다.</p></span>
        </div>
        <br>
        <img src="../img/check.png">
        <div class="timeline-message-div">
            <span><p>&nbsp;&nbsp;&nbsp;&nbsp;user1님이 전공종합설계(1) 채팅 방을 생성했습니다.</p></span>
        </div>
    </div>
</template>
<script>
export default {
    name : 'timelineform',
    data:{
        visible : true
    }
}
</script>
<style scoped>
.timeline-form{
   z-index:0;
   position: fixed;
   margin-top:1.8%;
   width: 1100px;
   height: 610px;
   margin-left: 19%;
   box-shadow: 4px 4px 2px rgb(233, 233, 233);
   background-color: #fff;
   border: 1px solid #eeeeee;
   border-radius: 1.2rem;
    }
.timeline-message-div{
    border-radius: 0.3rem;
    margin-left: 15px;
    border : 1px solid rgb(241, 241, 241);
    width: 700px;
    height: 80px;
    background: rgb(241, 241, 241);
    display: inline-block;
    box-shadow: 5px 7px 5px rgb(189, 189, 189);
}
.default-line-img{
    position:absolute;
    margin-left: 50px;
    height:520px;
    width:2px;
    z-index: 1;
}
img{
    margin-left: 35px;
    margin-top:50px;
    width:30px;
    height:30px;
    z-index: 100;
}

p{
     margin-top:30px;
}

</style>