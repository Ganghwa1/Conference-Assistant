<template>
    <div class="file-storage-page">
        <FileStorageForm></FileStorageForm>
        <SidebarMenu></SidebarMenu>
    </div>
</template>
<script>
import FileStorageForm from '../components/FileStorageForm'
import SidebarMenu from '../components/SidebarMenu'
export default {
    name : 'FileStoragePage',
    components:{
        FileStorageForm,
        SidebarMenu
    }
}
</script>
<style scoped>

</style>