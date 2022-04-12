<template>
  <div class="homepage">
    <div class="banner">
      <div class="search-box-label">
        <div class="search-label">Tìm kiếm nhà trọ</div>
        <form action="/bai-dang" method="post">
          <div class="search-elements">
            <div class="search-elements-input" style="padding: 5px 5px 8px 0px">
              <a-input-search
                placeholder="input search text"
                enter-button="Search"
                size="large"
                @search="onSearch"
              />
            </div>
            <div class="search-dropdown" style="margin-left: -8px">
              <div class="search-dropdown-cell">
                <a-dropdown style="width: 200px;">
                  <a-menu slot="overlay" @click="handleMenuClick">
                    <a-menu-item key="1"> 1st menu item </a-menu-item>
                    <a-menu-item key="2"> 2nd menu item </a-menu-item>
                    <a-menu-item key="3"> 3rd item </a-menu-item>
                  </a-menu>
                  <a-button style="margin-left: 8px; text-align: left">
                    Mức giá
                    <a-icon style="text-align: right" type="down" />
                  </a-button>
                </a-dropdown>
              </div>
              <div class="search-dropdown-cell">
                <a-dropdown style="width: 200px;">
                  <a-menu slot="overlay" @click="handleMenuClick">
                    <a-menu-item key="1"> 1st menu item </a-menu-item>
                    <a-menu-item key="2"> 2nd menu item </a-menu-item>
                    <a-menu-item key="3"> 3rd item </a-menu-item>
                  </a-menu>
                  <a-button style="margin-left: 8px; text-align: left">
                      Diện tích
                    <a-icon style="text-align: right" type="down" />
                  </a-button>
                </a-dropdown>
              </div>
              <div class="search-dropdown-cell">
                <a-dropdown style="width: 200px;">
                  <a-menu slot="overlay" @click="handleMenuClick">
                    <a-menu-item key="1"> 1st menu item </a-menu-item>
                    <a-menu-item key="2"> 2nd menu item </a-menu-item>
                    <a-menu-item key="3"> 3rd item </a-menu-item>
                  </a-menu>
                  <a-button style="margin-left: 8px; text-align: left">
                    Dự án
                    <a-icon style="text-align: right" type="down" />
                  </a-button>
                </a-dropdown>
              </div>
              <div class="search-dropdown-cell">
                <a-dropdown style="width: 200px;">
                  <a-menu slot="overlay" @click="handleMenuClick">
                    <a-menu-item key="1"> 1st menu item </a-menu-item>
                    <a-menu-item key="2"> 2nd menu item </a-menu-item>
                    <a-menu-item key="3"> 3rd item </a-menu-item>
                  </a-menu>
                  <a-button style="margin-left: 8px; text-align: left">
                    Phường xã
                    <a-icon style="text-align: right" type="down" />
                  </a-button>
                </a-dropdown>
              </div>
              <div class="search-dropdown-cell">
                <a-dropdown style="width: 200px;">
                  <a-menu slot="overlay" @click="handleMenuClick">
                    <a-menu-item key="1"> 1st menu item </a-menu-item>
                    <a-menu-item key="2"> 2nd menu item </a-menu-item>
                    <a-menu-item key="3"> 3rd item </a-menu-item>
                  </a-menu>
                  <a-button style="margin-left: 8px; text-align: left">
                    Đường/Phố
                    <a-icon style="text-align: right" type="down" />
                  </a-button>
                </a-dropdown>
              </div>
              <div class="search-dropdown-cell">
                <a-dropdown style="width: 200px;">
                  <a-menu slot="overlay" @click="handleMenuClick">
                    <a-menu-item key="1"> 1st menu item </a-menu-item>
                    <a-menu-item key="2"> 2nd menu item </a-menu-item>
                    <a-menu-item key="3"> 3rd item </a-menu-item>
                  </a-menu>
                  <a-button style="margin-left: 8px; text-align: left">
                    Số phòng ngủ
                    <a-icon style="text-align: right" type="down" />
                  </a-button>
                </a-dropdown>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="banner-image">
<!--         <section>
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Yarra_Night_Panorama%2C_Melbourne_-_Feb_2005.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Yarra_Night_Panorama%2C_Melbourne_-_Feb_2005.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleFade"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleFade"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </section> -->
      </div>
    </div>
    <div class="container pt-5">
      <div class="content">
        <div class="motel">
          <h4 class="title-motel">Phòng trọ cho bạn</h4>
          <a-row>
            <a-col :span="span_responsive">
              <MotelCard motelType="Phong tro" />
            </a-col>
            <a-col :span="span_responsive">
              <MotelCard motelType="Chung cu mini" />
            </a-col>
            <a-col :span="span_responsive">
              <MotelCard motelType="Nha nguyen can" />
            </a-col>
            <a-col :span="span_responsive">
              <MotelCard motelType="Chung cu nguyen can" />
            </a-col>
          </a-row>
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
          <div class="see-more">
            <a-button>See more</a-button>
          </div>
        </div>
        <div class="popular-motel">
          <h4 class="title-motel">Phòng trọ được yêu thích</h4>
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
              <img
                src="https://file4.batdongsan.com.vn/images/newhome/cities1/HCM-web-1.jpg"
                alt=""
              />
            </a>
          </div>
          <div class="small-district">
            <div class="small-place">
              <a href="">
                <div class="small-district-name">
                  <h5>Quận Hà Đông</h5>
                </div>
                <img
                  src="https://file4.batdongsan.com.vn/images/newhome/cities1/HCM-web-2.jpg"
                  alt=""
                />
              </a>
            </div>
            <div class="small-place">
              <a href="">
                <div class="small-district-name">
                  <h5>Quận Hà Đông</h5>
                </div>
                <img
                  src="https://file4.batdongsan.com.vn/images/newhome/cities1/HCM-web-2.jpg"
                  alt=""
                />
              </a>
            </div>
            <div class="small-place">
              <a href="">
                <div class="small-district-name">
                  <h5>Quận Hà Đông</h5>
                </div>
                <img
                  src="https://file4.batdongsan.com.vn/images/newhome/cities1/HCM-web-3.jpg"
                  alt=""
                />
              </a>
            </div>
            <div class="small-place">
              <a href="">
                <div class="small-district-name">
                  <h5>Quận Hà Đông</h5>
                </div>
                <img
                  src="https://file4.batdongsan.com.vn/images/newhome/cities1/HCM-web-2.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
        <div class="bottom-carousel">
            <div class="container">
                <div class="bottom-carousel-item">
                    Yên Hòa 1
                </div>
                <div class="bottom-carousel-item">
                    Yên Hòa 2
                </div>
                <div class="bottom-carousel-item">
                    Yên Hòa 3
                </div>
                <div class="bottom-carousel-item">
                    Yên Hòa 4
                </div>
                <div class="bottom-carousel-item">
                    Yên Hòa 5
                </div>
                <div class="bottom-carousel-item">
                    Yên Hòa 5
                </div>
                <div class="bottom-carousel-item">
                    Yên Hòa 5
                </div>
                <div class="bottom-carousel-item">
                    Yên Hòa 5
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
  data () {
    return {
      span_responsive: 6
    }
  },
  mounted() {
    window.addEventListener("resize", this.onResponsive);
  },
  methods: {
    handleMenuClick(e) {
      console.log("click", e);
    },
    onSearch() {
      window.location.href = "/bai-dang";
    },
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
  },
};
</script>
<style scoped>
.banner {
  height: 375px;
  width: 100%;
  background-image: url('https://t3.ftcdn.net/jpg/02/79/38/68/360_F_279386856_2pn8TCBAslZaxE9PEuZQTkYaVHZ6nUWg.jpg');
  background-size: 480px 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-box-label {
  padding-left: 25%;
  padding-right: 25%;
  position: absolute;
  z-index: 2;
}
.search-label {
  background-color: rgb(61, 49, 49);
  border-radius: 1px;
  display: inline-block;
  padding: 5px 15px 5px 15px;
  color: white;
}
.search-elements {
  background-color: bisque;
  padding: 10px;
  border-radius: 4px;
  height: auto;
  display: inline-block;
}
div.slick-track {
  text-align: center;
}
.slick-dots.slick-dots-bottom {
  padding-top: 10px;
}
.search-dropdown i {
  float: right;
  padding-top: 5px;
}
.search-dropdown .search-dropdown-cell {
  padding-bottom: 10px;
  float: left;
}
.banner-image img {
  width: 100%;
  height: 100%;
}
.title-motel {
  font-weight: bold;
}
.motel .title-motel, .popular-motel .title-motel {
  padding-left: 40px;
}
svg {
  position: relative;
  vertical-align: 0%;
}
div.ant-row > * {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
div.content > * {
  padding: 10px 0px 10px 0px;
}
div.see-more {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
div.motel-by-district {
  display: inline-block;
}
div.big-district {
  padding: 10px 5px;
  float: left;
  width: 50%;

}
div.small-place {
  float: right;
  padding: 10px;
  width: 25%;
}
div.small-place div.small-district-name {
  z-index: 2;
  padding: 15px;
  position: absolute;
}
.big-district .district-name {
  z-index: 2;
  position: absolute;
  color: #fff;
  padding: 15px;
}
.small-district-name h5 {
    font-weight: bold !important;
}
.big-district h5 {
    font-weight: bold !important;
}
.small-place img {
    border-radius: 4px;
}
.big-district img {
    border-radius: 4px;
    height: 100%
}
.bottom-carousel .bottom-carousel-item {
    margin: 5px 5px 20px 5px;
    padding: 5px 15px 5px 15px;
    border: 1px none grey;
    display: inline-block;
    background-color: #f2f2f2;
    border-radius: 20px;
}
</style>