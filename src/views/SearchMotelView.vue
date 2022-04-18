<template>
    <div class="search-result">
        <SearchBar />
        <div class="container">
            <div class="main-content">
                <div class="bread-crumb">
                    <a-breadcrumb>
                        <a-breadcrumb-item>Cho thuê</a-breadcrumb-item>
                        <a-breadcrumb-item><a href="">Nhà trọ</a></a-breadcrumb-item>
                        <a-breadcrumb-item><a href="">Quận Cầu Giấy</a></a-breadcrumb-item>
                        <a-breadcrumb-item>Chi tiết</a-breadcrumb-item>
                    </a-breadcrumb>
                </div>
                <br/>
                <h3 class="result-label">
                    Nhà cho thuê quận Nam Từ Liêm
                </h3>
                <span class="total-count">
                    Hien co <span>123</span> nha cho thue
                </span>
                <br/>
                <div class="motel-result">
                    <div class="motel-card-detail">
                        <a class="motel-link" href="/phong-tro/123" title="Cập nhật số nhà số lô">
                            <div class="motel-card-image">
                                <img src="https://file4.batdongsan.com.vn/crop/350x232/2021/12/11/20211211223023-45cd_wm.jpg" alt="">
                                <div class="card-image-feature">
                                    <a-icon type="play-circle" />
                                    <a-icon type="file-image" />
                                    <span>10</span>
                                </div>
                            </div>
                            <div class="motel-card-info">
                                <div class="motel-card-info-content">
                                    <h4 class="card-title">
                                        <span>
                                            <a-icon type="star" theme="filled" />
                                            QUỸ ĐỘC QUYỀN PAVILION TỪ 1PN - 2PN - 3PN GIÁ TỐT NHẤT, MIỄN LÃI ĐẾN 2.2025
                                        </span>
                                    </h4>
                                    <div class="card-config">
                                        <span class="card-config-price">29 ty</span>
                                        <span class="card-config-dot">·</span>
                                        <span class="card-config-area">93 m²</span>
                                        <span class="card-config-dot">·</span>
                                        <span class="ard-config-bedroom">
                                            <span>3</span>
                                            <font-awesome-icon icon="fa-solid fa-bed" />
                                        </span>
                                        <span class="card-config-dot">·</span>
                                        <span class="ard-config-toilet">
                                            <span>3</span>
                                            <font-awesome-icon icon="fa-solid fa-bath" />
                                        </span>
                                        <span class="card-config-dot">·</span>
                                    </div>
                                    <div class="card-location">Me Tri, Nam Tu Liem</div>
                                    <div class="card-description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a convallis justo. Nulla blandit mauris eget lectus congue aliquet. Etiam tristique sollicitudin dapibus. Nunc condimentum nunc at massa rhoncus, in consequat purus suscipit. Donec ullamcorper felis sit amet odio tincidunt ornareghmgtjfjfvhwebjhfv hevj,,vf,jhev fjhev,jsvfhjrevhjgevfhjrvhvfhwbevt,jhverhj,tgvrj,g
                                    </div>
                                    <div style="clear: left"></div>
                                    <div class="card-contact-area">
                                        <div class="card-publish">
                                            <span class="card-published-info-contact-name">
                                                <span>Đăng bởi </span>
                                                <span>Nguyễn Thuỳ Linh</span>
                                            </span>
                                            <span class="card-published-info-published-at">
                                                Hom nay
                                            </span>
                                        </div>
                                        <div class="card-contact">
                                            <span class="phone-number-contact">
                                                <font-awesome-icon icon="fa-solid fa-phone" />
                                                <span>&nbsp;&nbsp;</span>
                                                <span>0989 837 018 · Sao chép</span>
                                            </span>
                                            <span class="add-to-favorite">
                                                <font-awesome-icon icon="fa-regular fa-heart" />
                                                <font-awesome-icon style="display: none" icon="fa-solid fa-heart" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="main-sidebar">
                <div class="sidebar-title">Nha tro theo quan</div>
                <div class="sidebar-item"><a href="">Quan Cau Giay</a></div>
                <div class="sidebar-item"><a href="">Quan Hoan Kiem</a></div>
                <div class="sidebar-item"><a href="">Quan Tay Ho</a></div>
                <div class="sidebar-item"><a href="">Quan Ba Dinh</a></div>
                <div class="sidebar-item"><a href="">Quan Bac Tu liem</a></div>
                <div class="sidebar-item"><a href="">Quan Ha Dong</a></div>
            </div>
        </div>
    </div>
</template>
<script>
import SearchBar from '../components/search/SearchBar.vue'
export default {
    name: 'SearchMotelView',
    components: {
        SearchBar
    }
}
</script>
<style scoped>
.motel-card-detail {
    padding: 0px;
    font-size: 14px;
    line-height: 20px;
    box-sizing: border-box;
    display: block;
    margin: 0px 0px 16px 0px;
    width: 100%;
    height: auto;
    border-radius: 4px;
    border: 1px solid #f2f2f2;
    box-sizing: border-box;
    box-shadow: 0px 4px 6px 0px rgb(44 44 44 / 4%);
}
.main-content {
    width: 1000px;
    margin-right: 30px;
    display: inline-block; 
    padding-bottom: 50px;
}
.total-count {
    display: block;
    margin-bottom: 16px;
    margin-top: 8px;
    font-size: 14px;
    line-height: 20px;
    text-decoration: none solid rgb(44, 44, 44) auto;
}
.motel-result {
    margin-bottom: 50px;
}
.motel-card-image {
    border: 1px none black;
    position: relative;
    width: 240px;
    height: inherit;
    float: left;
    border-image-width: 1;
}
.card-image-feature {
    color: #f2f2f2;
    position: absolute;
    bottom: 6px;
    right: 16px;
    display: block;
    height: 24px;
    z-index: 2;
    font-size: 18px;
    line-height: 20px;
}
.card-image-feature * {
    float : left;
    margin-left: 5px;
}
.motel-card-info {
    font-size: 14px;
    height:  200px;
    width: calc(100% - 240px);
    padding: 14px 16px 16px 24px;
    box-sizing: border-box;
    position: relative;
    float: left;
    display: block;
}
.card-title {
    padding: 3px;
    overflow: hidden;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 20px;
    text-decoration-style: initial;
    display: -webkit-box;
    color: rgb(150, 27, 18);
}
.card-title i {
    display: inline-block;
    vertical-align: middle;
    text-decoration: none inherit solid auto;
}
.card-config {
    margin-top: 8px;
    color: black;
    display: inline-block;
    text-decoration: none initial solid auto;
    font-weight: 700;
    vertical-align: baseline;
    float: none;
}
.card-config span {
    font-size: 14px;
}
.card-config-dot {
    margin: 0px 8px;
}
.card-config svg {
    margin: 2px 0px 2px 4px;
    font-size: 16px;
}
.motel-card-info-content {
    height: 100%;
    display: block;
    position: relative;
}
.card-location {
    color: black;
    display: inline-block;
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    float: none;
    margin-top: 8px;
    font-size: 14px;
}
.card-description {
    clear: left;
    -webkit-line-clamp: 2;
    margin-top: 8px;
    color: black;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    width: 100%;
    height: 40px;
    overflow: hidden;
}
.card-contact-area {
    color: black;
    display: block;
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 100%;
}
.card-published-info-contact-name {
    display: block;
    float: left;
    height: 16px;
    width: 100%;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: rgb(44, 44, 44);
    text-decoration: none rgb(44, 44, 44) solid auto;
}
.card-published-info-published-at {
    display: block;
    float: left;
    position: relative;
    height: 16px;
    font-size: 12px;
    text-decoration: none rgb(153, 153, 153);
    color: rgb(153, 153, 153);
}
.phone-number-contact {
    height: unset;
    background-color: rgb(61, 194, 194);
    padding: 5px 11px 5px 11px;
    display: inline-block;
    border-radius: 4px;
    color: white;
}
.add-to-favorite {
    display: block;
    float: right;
    margin-left: 8px;
    padding: 5px 11px 5px 11px;
    text-decoration: none solid rgb(44, 44, 44) auto;
    font-size: 14px;
    line-height: 1px;
    color: rgb(44, 44, 44);
    background-color: white;
    border: 1px solid rgb(204, 204, 204);
    background-attachment: scroll;
    border-radius: 4px;
}
.add-to-favorite svg {
    font-size: 18px;
}
.card-publish {
    display: block;
    float: left;
    width: calc(100% - 256px);
    height: 32px;
    font-size: 14px;
    line-height: 20px;
    color: black;
}
.card-contact {
    font-size: 14px;
    line-height: 20px;
    float: right;
    display: block;
    height: 32px;
    width: auto;
    text-decoration: none rgb(0, 0, 0) solid auto;
}
.motel-card-image img {
    vertical-align: middle;
    width: 240px;
    height: 200px;
}
.main-sidebar {
    padding: 10px;
    display: block;
    float: right;
    width: 210px;
    height: auto;
    display: block;
    border: 1px solid #cbcaca;
    border-radius: 5px;
    background-color: rgb(224, 223, 223);
}
.sidebar-title {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
}
.sidebar-item {
    line-height: 30px;
}
.sidebar-item a {
    padding-bottom: 10px;
    text-decoration: none;
    font-size: 14px;
    font-weight: normal !important;
    color: black;
}
@media screen and (max-width: 1400px) {
    .main-sidebar {
        display: none;
    }
}
</style>
