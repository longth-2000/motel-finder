<template lang="">
    <div>
        <a-dropdown style="width: 200px">
            <a-menu slot="overlay" @click="handleMenuClick">
                <a-menu-item key="1"> 1st menu item </a-menu-item>
                <a-menu-item key="2"> 2nd menu item </a-menu-item>
                <a-menu-item key="3"> 3rd item </a-menu-item>
            </a-menu>
            <a-button style="margin-left: 8px; text-align:left;"> {{ label }} <a-icon style="text-align: right;" type="down" /></a-button>
        </a-dropdown>
    </div>
</template>
<script>
export default {
    name: 'DropDownSearch',
    props: {
        label :{
            type: String
        }
    }
    
}
</script>
<style lang="">
    
</style>
