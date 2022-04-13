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
                margin-bottom: 10px;
              "
            >
              <div style="flex: 7">
                <a-input
                  placeholder="Tìm kiếm theo địa điểm công cộng gần đó...."
                />
              </div>
              <div style="flex: 1; padding: 10px 15px">
                <a-button
                  type="danger"
                  style="height: 40px; padding-left: 0px"
                  @click="searchMotel()"
                >
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
                    placeholder="Loại phòng"
                    style="width: 93%"
                    v-model="search.type"
                  >
                    <a-select-option
                      v-for="(type, index) in types"
                      :key="index"
                      :value="type.id"
                    >
                      {{ type.name }}
                    </a-select-option>
                  </a-select>
                </div>
                <div class="result-image col-3 col-sm-6 col-md-4">
                  <a-select
                    style="width: 93%"
                    placeholder="Quận"
                    v-model="search.district"
                  >
                    <a-select-option
                      v-for="(district, index) in districts"
                      :key="index"
                    >
                      {{ district.name }}
                    </a-select-option>
                  </a-select>
                </div>

                <div class="result-image col-3 col-sm-6 col-md-4">
                  <a-select
                    ref="select"
                    style="width: 93%"
                    placeholder="Diện tích (m2)"
                    v-model="search.Area"
                  >
                    <a-select-option value="0-100">Dưới 100</a-select-option>
                    <a-select-option value="100-200"
                      >100 đến 200</a-select-option
                    >
                    <a-select-option value="200-300"
                      >200 đến 300</a-select-option
                    >
                    <a-select-option value="300-0">Trên 300</a-select-option>
                  </a-select>
                </div>
                <div class="result-image col-3 col-sm-6 col-md-4">
                  <a-select
                    ref="select"
                    style="width: 93%"
                    placeholder="Số phòng ngủ"
                    v-model="search.bedRoom"
                  >
                    <a-select-option value="1">1</a-select-option>
                    <a-select-option value="2">2</a-select-option>
                    <a-select-option value="3">3</a-select-option>
                    <a-select-option value="4">4</a-select-option>
                    <a-select-option value="5">4+</a-select-option>
                  </a-select>
                </div>
                <div class="result-image col-3 col-sm-6 col-md-4">
                  <a-select
                    ref="select"
                    style="width: 93%"
                    placeholder="Giá tiền (VND)"
                    v-model="search.Price"
                  >
                    <a-select-option value="0-100"
                      >Dưới 1000000</a-select-option
                    >
                    <a-select-option value="100-200"
                      >1000000 đến 2000000</a-select-option
                    >
                    <a-select-option value="200-300"
                      >2000000 đến 3000000</a-select-option
                    >
                    <a-select-option value="300-0"
                      >Trên 3000000</a-select-option
                    >
                  </a-select>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="banner-image">
        <a-carousel :autoplay="true" :dots="true" dotPosition="bottom">
          <div>
            <img
              src="https://teraland.vn/wp-content/uploads/2019/07/can-ho-Samsora-Riverside-Tan-Van-Binh-Duong.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://vinhomesland.vn/wp-content/uploads/2019/05/vinhomes-star-city-background.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://file4.batdongsan.com.vn/2022/04/08/nqzkGVRy/20220408165644-bfd6.jpg"
              alt=""
            />
          </div>
        </a-carousel>
      </div>
    </div>
    <div class="container pt-5">
      <div class="content">
        <div class="motel">
          <h4 class="title-motel">Phòng trọ mới nhất</h4>
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
            <a-button>Xem thêm</a-button>
          </div>
        </div>
        <!-- <div class="motel" v-else>
          <h4 class="title-motel">Phòng trọ dành cho bạn</h4>
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
            <a-button>Xem thêm</a-button>
          </div>
        </div> -->

        <div class="popular-motel">
          <h4 class="title-motel">Phòng trọ được yêu thích</h4>
          <a-row>
            <a-col
              :span="6"
              v-for="(card, index) in favoriteArticle"
              :key="index"
            >
              <MotelCard :card="card" :isLogged="user === null" :user="user" />
            </a-col>
          </a-row>
          <div class="see-more">
            <a-button>Xem thêm</a-button>
          </div>
        </div>
        <div class="motel-by-district">
          <h4 class="title-motel">Phòng trọ theo quận</h4>
          <div class="big-district">
            <a href="">
              <div class="district-name">
                <h5>{{ districts[0].name }}</h5>
              </div>
              <div>
                <img
                  src="https://badinh.hanoi.gov.vn/documents/1062718/0/Ho_chi_minh_mausoleum_2+%281%29.jpg/6c67b823-59c7-aec2-afcc-613556f34877?t=1622196201650"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div class="small-district">
            <div class="small-place">
              <a href="">
                <div class="small-district-name">
                  <h5>{{ districts[1].name }}</h5>
                </div>
                <div>
                  <img
                    src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/07/ho-hoan-kiem-1.png"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div class="small-place">
              <a href="">
                <div class="small-district-name">
                  <h5>{{ districts[4].name }}</h5>
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
                  <h5>{{ districts[3].name }}</h5>
                </div>
                <div>
                  <img
                    src="https://giabaogroup.vn/wp-content/uploads/2020/08/kham-pha-cau-long-bien-chung-nhan-lich-su-hon-100-nam-1.jpg"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div class="small-place">
              <a href="">
                <div class="small-district-name">
                  <h5>{{ districts[2].name }}</h5>
                </div>
                <div>
                  <img
                    src="https://www.tourtrungquoc.net.vn/images/diadiem/du%20lich%20hang%20chau-tay%20ho%205.jpg"
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
            v-for="(item, index) in districts.slice(5, 12)"
            :key="index"
            class="bottom-carousel-item"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="see-more" id="see-more" v-if="seeMore == false">
          <a-button @click="seeMore = true">Xem thêm</a-button>
        </div>
        <div class="row-hidden" v-if="seeMore == true">
          <div
            v-for="(item, index) in districts.slice(12, districts.length)"
            :key="index"
            class="bottom-carousel-item"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MotelCard from "../components/home/MotelCard.vue";
import axios from "axios";
export default {
  name: "HomeView",
  components: {
    MotelCard,
  },
  data() {
    return {
      seeMore: false,
      districts: [],
      favoriteArticle: [],
      search: {},
      types: [
        { name: "Phòng trọ", id: 1 },
        { name: "Nhà nguyên căn", id: 2 },
        { name: "Chung cư nguyên căn", id: 3 },
        { name: "Chung cư mini", id: 4 },
      ],
      user: localStorage.getItem("user"),
    };
  },
  created() {
    this.getData();
  },
  methods: {
    handleMenuClick(e) {
      console.log("click", e);
    },
    onSearch() {
      window.location.href = "/bai-dang";
    },
    getData() {
      let addressAPI = "https://provinces.open-api.vn/api/p/1?depth=2";
      let favouriteAPI =
        "https://backend-api-production.up.railway.app/accomodations/renter/list?sortByLike=true&limit=20";
      const requestAddress = axios.get(addressAPI);
      const requestFavorite = axios.get(favouriteAPI);
      axios
        .all([requestAddress, requestFavorite])
        .then(
          axios.spread((...responses) => {
            const responseAddress = responses[0];
            const responseFavorite = responses[1];
            this.districts = responseAddress.data.districts;
            this.favoriteArticle = responseFavorite.data.data;
          })
        )
        .catch((errors) => {
          console.log(errors);
        });
    },
    searchMotel() {
      let searchArr = ["type", "district", "bedRoom", "Price", "Area"];
      let endpoint = "/tim-kiem?handle=search";
      console.log9;
      searchArr.forEach((element) => {
        if (this.search[element] !== undefined) {
          if (element === "Area" || element === "Price") {
            let value = this.search[element].split("-");
            let minValue = value[0];
            let maxValue = value[1] === "0" ? "" : value[1];
            endpoint +=
              "&" +
              "min" +
              element +
              "=" +
              minValue +
              "&" +
              "max" +
              element +
              "=" +
              maxValue;
          } else endpoint += "&" + element + "=" + this.search[element];
        }
      });
      window.location.href = endpoint;
    },
  },
};
</script>
<style>
.homepage .banner {
  height: 500px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.homepage .search-box-label {
  position: absolute;
  width: 60%;
  z-index: 2;
}
.homepage .search-label {
  background-color: rgb(61, 49, 49);
  border-radius: 1px;
  display: inline-block;
  padding: 5px 15px 5px 15px;
  color: white;
}
.homepage .search-elements {
  background-color: rgba(0, 0, 0, 0.6);
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
.homepage .banner-image {
  width: 100%;
  height: 100%;
  background: green;
}
.homepage .banner-image img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  z-index: -1;
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
  height: 40px;
}
.ant-select-selection__placeholder {
  margin-top: -4px !important;
}
.ant-select-arrow {
  display: block;
  margin-top: -12px !important;
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
  padding: 15px;
  position: absolute;
}
.homepage .big-district .district-name {
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
  cursor: pointer;
}
.homepage .bottom-carousel .bottom-carousel-item:hover {
  background: #bfbfbf;
}
</style>
