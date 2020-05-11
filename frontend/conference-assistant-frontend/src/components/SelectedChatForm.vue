<template>
    <div class="selected-chat-form">
        <div v-if="clicked == false">
            <p class="p-checkinfo">키워드를 선택하면 회의 내용이 보여집니다.</p>
        </div>
        <div>
            <p class="p-selectedKeyword">{{selected_keyword}}</p><p class="p-msg">{{msg}}</p>
        </div>
    </div>
</template>
<script>
import {EventBus} from '../EventBus'

export default {
    name: 'SelectedChatForm',
    data(){
        return{
            selected_keyword:' ',
            key_index : '',
            msg : '',
            clicked : false
        }
    },
    mounted(){
        EventBus.$on('keyword', keyword=>{
           this.selected_keyword = '\'' + keyword + '\''
           this.msg = '에 대한 회의 내용입니다.'

           if(this.clicked == false){
               this.clicked = !this.clicked
           }
           $("p:contains(keyword)").css({color:"red"});
        });
    }
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
.p-checkinfo{
    text-align:center;
    margin-top:10%;
    font-size: 16px;
    color:rgb(168, 168, 168);
}
.p-selectedKeyword{
    margin-top:-10px;
    display: inline-block;
    color: #69a77a;
    font-weight: 750;
    font-size: 19px;
}
.p-msg{
    display: inline-block;
    font-weight: 750;
    font-size: 19px;
}
</style>