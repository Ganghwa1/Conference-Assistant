<template>
    <div class="main-page">
        <SidebarMenu/>
        <ChatroomForm/>
        <SelectedChatForm/>
        <AIMediationForm/>
        <AIKeywordListForm/>
    </div>
</template>
<script>
import SidebarMenu from '../components/SidebarMenu'
import ChatroomForm from '../components/ChatroomForm'
import SelectedChatForm from '../components/SelectedChatForm'
import AIKeywordListForm from '../components/AIKeywordListForm'
import AIMediationForm from '../components/AIMediationForm'

export default {
    name:'MainPage',
    components:{
        SidebarMenu,
        ChatroomForm,
        SelectedChatForm,
        AIKeywordListForm,
        AIMediationForm,
    }
}
</script>
<style scoped>

</style>