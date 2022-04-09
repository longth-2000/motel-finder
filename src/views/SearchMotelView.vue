<template>
    <div class="search-result">
        <div class="search-bar">
            <form action="">
                <div class="search-box">
                    <a-input-search v-model="search_input" placeholder="Tìm nhà trọ phù hợp" style="width: 25%; padding-bottom: 5px" enter-button @search="onSearch" />
                </div>
            </form>
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'SearchMotelView',
    data(){
        return {
            search_input : ''
        }
    }
}
</script>
<style lang="css">
div.search-bar {
    border-top: 1px solid rgb(232, 230, 230);
    padding: 15px;
}
</style>
