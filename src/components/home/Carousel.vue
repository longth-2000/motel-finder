<template>
    <div class="carousel-items">
        <a-carousel :autoplay="true" :dots="true" dotPosition="bottom" arrows>
            <div>
              <img src="https://file4.batdongsan.com.vn/resize/745x510/2021/12/11/20211211222915-fb15_wm.jpg" alt="">
            </div>
            <div>
              <img src="https://file4.batdongsan.com.vn/resize/745x510/2021/12/11/20211211222955-516b_wm.jpg" alt="">
            </div>
            <div>
              <img src="https://file4.batdongsan.com.vn/resize/745x510/2021/12/11/20211211222955-644c_wm.jpg" alt="">
            </div>
            <div>
              <img src="https://file4.batdongsan.com.vn/resize/745x510/2021/12/11/20211211222955-ff23_wm.jpg" alt="">
            </div>
        </a-carousel>
    </div>
</template>
<script>
export default {
    name: 'Carousel'
}
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
.carousel-items img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  z-index: -1;
}
</style>
