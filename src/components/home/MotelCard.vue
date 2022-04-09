<template lang="">
    <div class="motel-card">
        <a-card hoverable style="width: 300px">
            <img
            slot="cover"
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
            <template slot="actions" class="ant-card-actions">
                <a-icon type="heart" />
            </template>
            <a-card-meta title="Card title" :description="motelType"></a-card-meta>
        </a-card>
    </div>
</template>
<script>
export default {
    name: 'MotelCard',
    props: {
        motelType : {
            type: String
        }
    }
}
</script>
<style lang="">

</style>