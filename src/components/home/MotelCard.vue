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
            <a-card-meta title="Cho thuê 25tr/th chung cư 2PN, 101m2 full nội thất vào ở luôn tại D3 tòa 901B Starlake" >
            </a-card-meta>
            <div style="display:flex; justify-content; margin: 20px 0">
                <div class="price extra-infor">
                    <font-awesome-icon class="icon" icon="fa-solid fa-money-bill" />
                    <div>6000</div>
                </div>
                <div class="area extra-infor">
                     <font-awesome-icon class="icon" icon="fa-solid fa-layer-group" />
                    <div>1200 m2</div>
                </div>
            </div>
            <div>Phường Yết Kiêu, Hà Đông</div>
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
<style scoped>
::v-deep .ant-card-meta-title {
  font-weight: bold;
  color: #004e7f;
}
.extra-infor {
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-right: 20px;
}
.icon {
    display: block;
    margin-right: 10px;
    font-size: 18px;
}
</style>