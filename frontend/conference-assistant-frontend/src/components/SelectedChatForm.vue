<template>
    <div class="selected-chat-form">
        <p>키워드를 선택하면 회의 내용이 보여집니다.</p>
    </div>
</template>
<script>
export default {
    name: 'SelectedChatForm'
}
</script>
<style scoped>
.selected-chat-form{
   position: fixed;
   left: 75%;
   top: 35%;
   width: 570px;
   height: 220px;
   margin: -165px 0 0 -228px;
   padding: 45px 60px 60px;
   background-color: #fff;
   border: 1px solid  #eeeeee;
   box-shadow: 4px 4px 2px rgb(233, 233, 233);
   border-radius: 1.2rem;
}
</style>