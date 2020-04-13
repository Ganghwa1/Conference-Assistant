<template>
    <div class="aikeyword-list-form">
        <h4>AI가 찾은 키워드</h4>
        <p>아직 발견된 키워드가 없습니다.</p>
    </div>
</template>
<script>
export default {
    name: 'AIKeywordListForm'
}
</script>
<style scoped>
.aikeyword-list-form{
   position: fixed;
   left: 97%;
   top: 68%;
   width: 250px;
   height: 380px;
   margin: -165px 0 0 -228px;
   padding: 45px 60px 60px;
   background-color: #fff;
   border: 1px solid  #eeeeee;
   box-shadow: 4px 4px 2px rgb(233, 233, 233);
   border-radius: 1.2rem;
}
h4{
    margin-top:-20%;
    margin-left: -30%;
    font-size: 20px;
    font-weight: 700;
}
p{
    padding-top: 70%;
    margin-left: -20%;
    color:gray;
    width:300px;
}
</style>