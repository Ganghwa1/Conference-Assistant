<template>
    <div class="create-minutes-page">
        <CreateMinutesForm></CreateMinutesForm>
        <SidebarMenu></SidebarMenu>
    </div>
</template>
<script>
import CreateMinutesForm from '../components/CreateMinutesForm'
import SidebarMenu from '../components/SidebarMenu'
export default {
    name: 'CreateMinutesPage',
    components:{
        CreateMinutesForm,
        SidebarMenu
    }
}
</script>
<style scoped>

</style>