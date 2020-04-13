<template>
    <div class="minutes-list-page">
        <MinutesListForm></MinutesListForm>
        <SidebarMenu></SidebarMenu>
    </div>
</template>
<script>
import MinutesListForm from '../components/MinutesListForm'
import SidebarMenu from '../components/SidebarMenu'

export default {
    name : 'MinutesListPage',
    components:{
        MinutesListForm,
        SidebarMenu
    }
}
</script>
<style scoped>

</style>