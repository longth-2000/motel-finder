<template>
  <div class="homepage">
    <div class="banner">
      <div class="search-box-label">
        <div class="search-label">Tìm kiếm nhà trọ</div>
        <form action="/bai-dang" method="post">
          <div class="search-elements">
            <div
              class="search-input"
              style="
                height: 60px;
                width: 98%;
                border-radius: 5px;
                display: flex;
                background: white;
              "
            >
              <div style="flex: 7">
                <a-input placeholder="Tìm địa điểm, khu vực...." />
              </div>
              <div style="flex: 1; padding: 10px 15px">
                <a-button type="danger" style="height: 40px; padding-left: 0px">
                  <div style="display: flex">
                    <div style="margin: 2px 10px">
                      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                    </div>
                    <div>Tìm kiếm</div>
                  </div>
                </a-button>
              </div>
            </div>
            <div class="search-dropdown container-fluid">
              <div class="row">
                <div class="result-image col-3 col-sm-6 col-md-4">
                  <a-select
                    ref="select"
                    style="width: 93%"
                    placeholder="Địa chỉ"
                  >
                    <a-select-option value="jack">Jack</a-select-option>
                    <a-select-option value="lucy">Lucy</a-select-option>
                    <a-select-option value="disabled" disabled
                      >Disabled</a-select-option
                    >
                    <a-select-option value="Yiminghe">yiminghe</a-select-option>
                  </a-select>
                </div>
                <div class="result-image col-3 col-sm-6 col-md-4">
                  <a-select
                    ref="select"
                    style="width: 93%"
                    placeholder="Địa chỉ"
                  >
                    <a-select-option value="jack">Jack</a-select-option>
                    <a-select-option value="lucy">Lucy</a-select-option>
                    <a-select-option value="disabled" disabled
                      >Disabled</a-select-option
                    >
                    <a-select-option value="Yiminghe">yiminghe</a-select-option>
                  </a-select>
                </div>
                <div class="result-image col-3 col-sm-6 col-md-4">
                  <a-select
                    ref="select"
                    style="width: 93%"
                    placeholder="Địa chỉ"
                  >
                    <a-select-option value="jack">Jack</a-select-option>
                    <a-select-option value="lucy">Lucy</a-select-option>
                    <a-select-option value="disabled" disabled
                      >Disabled</a-select-option
                    >
                    <a-select-option value="Yiminghe">yiminghe</a-select-option>
                  </a-select>
                </div>
                <div class="result-image col-3 col-sm-6 col-md-4">
                  <a-select
                    ref="select"
                    style="width: 93%"
                    placeholder="Địa chỉ"
                  >
                    <a-select-option value="jack">Jack</a-select-option>
                    <a-select-option value="lucy">Lucy</a-select-option>
                    <a-select-option value="disabled" disabled
                      >Disabled</a-select-option
                    >
                    <a-select-option value="Yiminghe">yiminghe</a-select-option>
                  </a-select>
                </div>
                <div class="result-image col-3 col-sm-6 col-md-4">
                  <a-select
                    ref="select"
                    style="width: 93%"
                    placeholder="Địa chỉ"
                  >
                    <a-select-option value="jack">Jack</a-select-option>
                    <a-select-option value="lucy">Lucy</a-select-option>
                    <a-select-option value="disabled" disabled
                      >Disabled</a-select-option
                    >
                    <a-select-option value="Yiminghe">yiminghe</a-select-option>
                  </a-select>
                </div>
                <div class="result-image col-3 col-sm-6 col-md-4">
                  <a-select
                    ref="select"
                    style="width: 93%"
                    placeholder="Địa chỉ"
                  >
                    <a-select-option value="jack">Jack</a-select-option>
                    <a-select-option value="lucy">Lucy</a-select-option>
                    <a-select-option value="disabled" disabled
                      >Disabled</a-select-option
                    >
                    <a-select-option value="Yiminghe">yiminghe</a-select-option>
                  </a-select>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="banner-image"></div>
    </div>
    <div class="container pt-5">
      <div class="content">
        <div class="motel">
          <h4 class="title-motel">Phòng trọ cho bạn</h4>
          <a-row>
            <a-col :span="6">
              <MotelCard motelType="Phong tro" />
            </a-col>
            <a-col :span="6">
              <MotelCard motelType="Chung cu mini" />
            </a-col>
            <a-col :span="6">
              <MotelCard motelType="Nha nguyen can" />
            </a-col>
            <a-col :span="6">
              <MotelCard motelType="Chung cu nguyen can" />
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="6">
              <MotelCard />
            </a-col>
            <a-col :span="6">
              <MotelCard />
            </a-col>
            <a-col :span="6">
              <MotelCard />
            </a-col>
            <a-col :span="6">
              <MotelCard />
            </a-col>
          </a-row>
          <div class="see-more">
            <a-button>See more</a-button>
          </div>
        </div>
        <div class="popular-motel">
          <h4 class="title-motel">Phòng trọ được yêu thích</h4>
          <a-row>
            <a-col :span="6">
              <MotelCard />
            </a-col>
            <a-col :span="6">
              <MotelCard />
            </a-col>
            <a-col :span="6">
              <MotelCard />
            </a-col>
            <a-col :span="6">
              <MotelCard />
            </a-col>
          </a-row>
          <div class="see-more">
            <a-button>See more</a-button>
          </div>
        </div>
        <div class="motel-by-district">
          <h4 class="title-motel">Phòng trọ theo quận</h4>
          <div class="big-district">
            <a href="">
              <div class="district-name">
                <h5>Quận Cầu Giấy</h5>
              </div>
              <div>
                <img
                  src="https://file4.batdongsan.com.vn/images/newhome/cities1/HCM-web-1.jpg"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div class="small-district">
            <div class="small-place">
              <a href="">
                <div class="small-district-name">
                  <h5>Quận Hà Đông</h5>
                </div>
                <div>
                  <img
                    src="https://file4.batdongsan.com.vn/images/newhome/cities1/HCM-web-1.jpg"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div class="small-place">
              <a href="">
                <div class="small-district-name">
                  <h5>Quận Hà Đông</h5>
                </div>
                <div>
                  <img
                    src="https://file4.batdongsan.com.vn/images/newhome/cities1/HCM-web-1.jpg"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div class="small-place">
              <a href="">
                <div class="small-district-name">
                  <h5>Quận Hà Đông</h5>
                </div>
                <div>
                  <img
                    src="https://file4.batdongsan.com.vn/images/newhome/cities1/HCM-web-1.jpg"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div class="small-place">
              <a href="">
                <div class="small-district-name">
                  <h5>Quận Hà Đông</h5>
                </div>
                <div>
                  <img
                    src="https://file4.batdongsan.com.vn/images/newhome/cities1/HCM-web-1.jpg"
                    alt=""
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-carousel">
        <div class="row-display">
          <div
            v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
            :key="index"
            class="bottom-carousel-item"
          >
            Hà Đông
          </div>
        </div>
        <div class="see-more" id="see-more" v-if="seeMore == false">
          <a-button @click="seeMore = true">See more</a-button>
        </div>
        <div class="row-hidden" v-if="seeMore == true">
          <div
            v-for="(item, index) in [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20,
            ]"
            :key="index"
            class="bottom-carousel-item"
          >
            Hà Đông
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MotelCard from "../components/home/MotelCard.vue";

export default {
  name: "HomeView",
  components: {
    MotelCard,
  },
  data() {
    return {
      seeMore: false,
    };
  },
  methods: {
    handleMenuClick(e) {
      console.log("click", e);
    },
    onSearch() {
      window.location.href = "/bai-dang";
    },
  },
};
</script>
<style>
.homepage .banner {
  height: 375px;
  width: 100%;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/8/8d/Yarra_Night_Panorama%2C_Melbourne_-_Feb_2005.jpg");
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.homepage .search-box-label {
  position: absolute;
  z-index: 2;
  width: 60%;
}
.homepage .search-label {
  background-color: rgb(61, 49, 49);
  border-radius: 1px;
  display: inline-block;
  padding: 5px 15px 5px 15px;
  color: white;
}
.homepage .search-elements {
  background-color: bisque;
  padding: 20px;
  border-radius: 4px;
}
.homepage div.slick-track {
  text-align: center;
}
.slick-dots.slick-dots-bottom {
  padding-top: 10px;
}
.homepage .search-dropdown i {
  float: right;
  padding-top: 5px;
}
.homepage .banner-image img {
  width: 100%;
  height: 100%;
}
/*search box css start here*/
.homepage .search-sec {
  padding: 2rem;
}
.homepage .search-slt {
  display: block;
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #55595c;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  height: calc(3rem + 2px) !important;
  border-radius: 0;
}
.homepage .wrn-btn {
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
  height: calc(3rem + 2px) !important;
  border-radius: 0;
}
.homepage .carousel-inner {
  padding-bottom: 5px;
}
.homepage .carousel-inner img {
  height: 375px;
}

.homepage .title-motel {
  font-weight: bold;
}
.homepage div.big-district {
  padding: 10px;
  padding-left: 0;
  float: left;
  width: 50%;
}
.result-image {
  padding: 0;
  margin: 10px 0;
}
.homepage .ant-row {
  margin-left: -10px;
}
.homepage .ant-input {
  height: 100%;
  border: none;
}
.homepage .ant-select-selection--single {
  border: none;
}

@media only screen and (max-width: 992px) {
  .homepage div.big-district {
    width: 100%;
  }
  .homepage div.small-place div.small-district-name h5 {
    font-size: 14px;
  }
  .homepage .search-box-label {
    width: 80%;
  }
}
@media only screen and (max-width: 768px) {
  .homepage div.big-district {
    width: 100%;
  }
  .homepage div.small-place {
    width: 100% !important;
    padding-left: 0 !important;
  }
  .homepage .search-box-label {
    width: 90%;
  }
}
.homepage svg {
  position: relative;
  vertical-align: 0%;
}
.homepage div.ant-row > * {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.homepage div.content > * {
  padding: 10px 0px 10px 0px;
}
.homepage div.see-more {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.homepage #see-more {
   margin: -10px 0 20px 0;
}
.homepage div.motel-by-district {
  display: inline-block;
}

.homepage div.small-place {
  float: right;
  padding: 10px;
  width: 25%;
}
.homepage div.small-place div.small-district-name {
  z-index: 2;
  padding: 15px;
  position: absolute;
}
.homepage .big-district .district-name {
  z-index: 2;
  position: absolute;
  color: white;
  padding: 15px;
}
.homepage .small-district-name h5 {
  font-weight: bold !important;
  color: white;
}
.homepage .big-district h5 {
  font-weight: bold !important;
  color: white;
}
.homepage .small-place img {
  border-radius: 4px;
}
.homepage .big-district img {
  border-radius: 4px;
}

.homepage .bottom-carousel .bottom-carousel-item {
  margin: 5px 5px 20px 5px;
  padding: 10px 25px;
  border: 1px none grey;
  display: inline-block;
  background-color: #f2f2f2;
  border-radius: 20px;
}
</style>
