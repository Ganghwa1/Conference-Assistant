<template>
    <div class="show-profile">
        <div class="info-div">
            <img src="../img/profile.png">
            <h2>&nbsp;{{propsname}}</h2>
        </div>
        <div class="profile-info-div">
            <p>&nbsp;&nbsp;전화번호&nbsp;&nbsp;&nbsp; 010-0000-2222</p>
            <p>&nbsp;&nbsp;이메일&nbsp;&nbsp;&nbsp; {{propsname}}@dure.com</p>
        </div>
    </div>
</template>
<script>
export default {
    name : 'ShowProfileForm',
    props: ['propsname'],

}
</script>
<style scoped>
.show-profile{
    margin-top:-20px;
    margin-left:215px;
    border-radius: 0.4rem;
    width:240px;
    height:10%;
    font-size: 14px;
    z-index: 1;
    position: absolute;

}
.info-div{
    padding-top: 4px;
    border-radius: 0.2rem;
    padding-bottom: 1px;
    background-color:#32a852;
    color:white;
    font-weight: 400;
}
.profile-info-div{
    padding-top:14px;
    border-radius: 0.2rem;
    padding-bottom:20px;
    background-color:white;
    color:rgb(32, 32, 32);
}
img{
    margin-bottom:-20px;
    height:60px;
    width:60px;
}
</style>