<template>
    <div class="admin-wrapper">
        <div>
            <Sidebar/>
            <div class="admin-controls">
                <router-view class="admin-controls__content"/>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/admin/Sidebar'
export default {
name: 'backoffice',
components: {
    Sidebar
}
}
</script>

<style scoped>
 .admin-wrapper{
    background-color: #F8E3DD;
 }
 .admin-wrapper > div{
    padding: 10rem 0 0 5rem;
    display: grid;
    grid-template-columns: 1.5fr 4fr 0.5fr;
    grid-gap: 2rem;
 }
</style>
