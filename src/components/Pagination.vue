<template>
    <div v-if="totalPages() > 0" class="pagination-wrapper">
        <div>
            <span v-if="showPreviousLink()" v-on:click="updatePage(pageNumber - 1)" class="pagination-btn">Vorige</span>
            {{ pageNumber + 1 }} of {{totalPages()}}
            <span v-if="showNextLink()" v-on:click="updatePage(pageNumber + 1)" class="pagination-btn">Volgende</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'pagination',
    props: ['filteredProducts', 'pageNumber', 'pageSize'],
    methods: {
        updatePage(pageNumber) {
            this.$emit('page:update', pageNumber)
        },
        totalPages() {
            return Math.ceil(this.filteredProducts.length / this.pageSize)
        },
        showPreviousLink() {
            return this.pageNumber == 0 ? false : true
        },
        showNextLink() {
            return this.pageNumber == (this.totalPages() - 1) ? false : true
        }
    }
}
</script>

<style scoped>
.pagination-wrapper{
    color: #F8A88F;
    display: grid;
    grid-auto-flow: column;
    justify-items: center;
    padding: 2rem 0;
}
 .pagination-btn{
    cursor: pointer;
    
 }
</style>
