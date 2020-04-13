<template>
    <div class="sign-in-form">
       <form @submit.prevent="submit">
           <fieldset>
               <input type="text" v-model="id" placeholder="아이디를 입력하세요."/>
               <input type="password" v-model="password" placeholder="비밀번호를 입력하세요."/>
               <div></div>
               <p><input type="checkbox"/><span> 로그인 상태 유지</span></p>
               <div></div>
               <button type="submit">Login</button>

               <button type="button" class="btn" @click="showModal">비밀번호가 생각나지 않으세요?</button>
               <FindpasswordModal v-show="isModalVisible" @close="closeModal"/>

               <router-link :to="{name:'Signup'}" class="join-btn">Join</router-link>
           </fieldset>
       </form>
    </div>
</template>
<script>
import FindpasswordModal from '../components/FindpasswordModal'

export default {
name: 'SigninForm',
    components:{
        FindpasswordModal
    },
    data(){
        return{
            id:'',
            password:'',
            isModalVisible: false
        };
    },
    methods:{
        submit(){
            const {id,password} = this;
            this.$emit('submit',{id,password})
        },
        showModal(){
            this.isModalVisible = true;
        },
        closeModal(){
            this.isModalVisible = false;
        }
    }
}
</script>
<style scoped>
.join-btn{
    width:210px;
    height:22px;
    font-weight: 700;
    font-size: 20px;
}

</style>