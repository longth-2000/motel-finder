<template lang="">
    <div class="motel-detail">
        <SearchBar />
        <div class="container">
            <div class="main-content">
                <div class="picture-carousel">
                    <Carousel/>
                </div>
                <div class="bread-crumb">
                    <a-breadcrumb>
                        <a-breadcrumb-item>Cho thuê</a-breadcrumb-item>
                        <a-breadcrumb-item><a href="">Nhà trọ</a></a-breadcrumb-item>
                        <a-breadcrumb-item><a href="">Quận Cầu Giấy</a></a-breadcrumb-item>
                        <a-breadcrumb-item>Chi tiết</a-breadcrumb-item>
                    </a-breadcrumb>
                </div>
                <div class="product-detail">
                    <h2 class="product-title">CẬP NHẬT BÁN CÁC LÔ LIỀN KỀ, BIỆT THỰ, SHOPHOUSE VINHOMES GARDENIA MỸ ĐÌNH NGÀY 10/04/2022.</h2>
                    <span class="product-brief">Dự án Vinhomes Gardenia, Đường Hàm Nghi, Thị trấn Cầu Diễn, Nam Từ Liêm, Hà Nội</span>
                    <div class="product-short-info">
                        <div class="short-info-item">
                            <span class="title">Mức giá</span>
                            <span class="value">29 tỷ</span>
                            <span class="ext">~311.8 triệu/m²</span>
                        </div>
                        <div class="short-info-item">
                            <span class="title">Diện tích</span>
                            <span class="value">93 m²</span>
                            <span class="ext">Mặt tiền 6 m</span>
                        </div>
                        <div class="short-info-item">
                            <span class="title">Phòng ngủ</span>
                            <span class="value">5 PN</span>
                            <span class="ext"> </span>
                        </div>
                        <div class="short-info-save">
                            <a-icon type="heart" style="font-size: 25px"/>
                        </div>
                        <div class="short-info-share">
                            <a-icon type="share-alt" style="font-size: 25px"/>
                        </div>
                    </div>
                    <div class="product-full-description">
                        <span class="full-desc-title">Thông tin mô tả</span>
                        Cập nhật các lô liền kề, biệt thự, shophouse Vinhomes Gardenia Mỹ Đình chính chủ bán lại mới nhất, giá tốt nhất.
                        <br>
                        I. Shophouse cập nhật mới nhất:
                        <br>
                        Shophouse B4 - 0X. MT 6m. DT 93m2. Hướng Đông Bắc. Gần mặt đường K2. Mặt vườn hoa. Đã hoàn thiện đang cho thuê. Giá 29 tỷ bao sổ đỏ.
                    </div>
                    <div class="product-comment-box">
                        <form action="" method="">
                            <span class="comment-box-title">Bình luận</span>
                            <div class="comment-box">
                                <a-textarea placeholder="Viết bình luận" :rows="4" allowClear />
                            </div>
                            <div class="submit-button">
                                <a-button type="primary" htmlType="submit">
                                    Comment
                                </a-button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-suggest">
                        <h4>Nhà trọ đề xuất</h4>
                        <a-row>
                            <a-col :span="span_responsive">
                                <MotelCard />
                            </a-col>
                            <a-col :span="span_responsive">
                                <MotelCard />
                            </a-col>
                            <a-col :span="span_responsive">
                                <MotelCard />
                            </a-col>
                            <a-col :span="span_responsive">
                                <MotelCard />
                            </a-col>
                        </a-row>
                    </div>
                    <div class="product-watch-history">
                        <h4>Nhà trọ đã xem</h4>
                        <a-row>
                            <a-col :span="span_responsive">
                                <MotelCard />
                            </a-col>
                            <a-col :span="span_responsive">
                                <MotelCard />
                            </a-col>
                            <a-col :span="span_responsive">
                                <MotelCard />
                            </a-col>
                            <a-col :span="span_responsive">
                                <MotelCard />
                            </a-col>
                        </a-row>
                    </div>
                </div>
            </div>
            <div class="main-sidebar">
                <div class="sidebar-avatar">
                    <a-avatar :size="40" icon="user" />
                </div>
                <span class="prefix-contact-name">Được đăng bởi</span>
                <div class="contact-name" title="Nguyễn Như Duy">
                    <h5>Nguyễn Như Duy</h5>
                </div>
                <div class="phone-contact">
                    <a-button type="primary" block>
                        Gọi cho tôi
                    </a-button>
                </div>
                <div class="send-email">
                    <a-button type="primary" block style="background-color:green">
                        Email cho tôi
                    </a-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MotelCard from '../components/home/MotelCard.vue'
import SearchBar from '../components/search/SearchBar.vue'
import Carousel from '../components/home/Carousel.vue'
export default {
    name: 'MotelDetailView',
    components: {
        SearchBar,
        Carousel,
        MotelCard
    },
    data() {
        return {
            span_responsive : 6
        }
    },
    mounted() {
        window.addEventListener("resize", this.onResponsive);
    },
    methods: {
        onResponsive() {
            if(window.innerWidth < 500) {
                this.span_responsive = 24
            }  
            else if(window.innerWidth < 1000) {
                this.span_responsive = 12
            } else if(window.innerWidth < 1180) {
                this.span_responsive = 8
            } else this.span_responsive = 6
        }
    }
}
</script>
<style scoped>
.picture-carousel {
    width: 100%;  
}
.bread-crumb {
    margin : 24px 0px 8px 0px
}
.main-content {
    width: 1000px;
    margin-right: 30px;
    display: inline-block;  
}
.product-title {
    display: block;
    font-size: 24px;
}
.product-brief {
    display: block;
    margin-top: 8px;
}
.product-short-info {
    width: 100%;
    margin : 24px 0px;
    padding : 15px 0px;
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
    box-sizing: border-box;
    float: left;
}
.short-info-item {
    padding-left : 64px;
    display: inline-block;
    vertical-align: baseline;
}
.short-info-item:first-child {
    padding: 0px;
}
.short-info-item span{
    display: block;
}
.short-info-item span:nth-child(1){
    font-size: 14px;
    line-height: 20px;
    font-weight: normal !important;
    color: #999;
    display: block;
}
.short-info-item span:nth-child(2){
    font-family: "Roboto Medium" !important;
    font-size: 18px;
    line-height: 28px;
    font-weight: normal !important;
    color: #2c2c2c;
    margin-top: 4px;
    display: block;
}
.short-info-item span:nth-child(3){
    font-family: "Roboto Regular" !important;
    font-size: 12px;
    line-height: 16px;
    font-weight: normal !important;
    color: #505050;
    display: block;
}
.short-info-save {
    align-content: center;
    display: flex;
    float: right;
    margin-left: 8px;
    margin-top: 2px;
    font-style: normal;
    outline: none;
    text-align: center;
    cursor: pointer;
    box-shadow: none !important;
    padding-top: 25px;
}
.short-info-share {
    align-content: center;
    display: flex;
    float: right;
    margin-left: 8px;
    margin-top: 2px;
    font-style: normal;
    outline: none;
    text-align: center;
    cursor: pointer;
    box-shadow: none !important;
    padding-top: 25px;
    padding-right: 25px;
}
span.full-desc-title {
    margin-bottom: 24px;
    font-size: 20px;
    line-height: 28px;
    font-weight: bold;
    color: #2c2c2c;
    display: block;
}
.product-comment-box {
    font-weight: bold;
    font-size: 20px;
    margin-top : 30px;
    margin-bottom : 50px
}
.product-suggest {
    width: inherit;
    height: auto;
    display: block;
}
.product-watch-history {
    margin-top : 40px;
    width: inherit;
    height: auto;
    display: block;
}
.motel-card {
    width : 100px
}
.main-sidebar {
    padding: 10px;
    display: block;
    float: right;
    width: 210px;
    height: auto;
    display: block;
    border: 1px solid #f2f2f2;
    background-color: azure;
}
.sidebar-avatar {
    display: flex;
    justify-content: center;
}
.prefix-contact-name {
    font-size: 12px;
}
.prefix-contact-name, .contact-name {
    margin-top: 5px;
    display: block;
    text-align: center;
}
.phone-contact, .send-email {
    display: block;
    border-radius: 4px;
    border: 1px solid rgb(151, 150, 150);
    margin-top: 30px;
    margin-bottom: 10px;
    height: 30px
}
@media screen and (max-width: 1400px) {
    .main-sidebar {
        display: none;
    }
}
</style>
