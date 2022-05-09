<template>
  <div class="search-result">
    <div class="container" style="display:flex">
      <div class="main-content">
        <div class="bread-crumb">
          <a-breadcrumb>
            <a-breadcrumb-item>Cho thuê</a-breadcrumb-item>
            <a-breadcrumb-item></a-breadcrumb-item>
            <a-breadcrumb-item>Tìm kiếm</a-breadcrumb-item>
            <a-breadcrumb-item>Chi tiết</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <br />
        <h4 class="result-label">{{ resultSearch }}</h4>
        <span class="total-count">
          Hiện có
          <span style="font-weight: bold; color: red">{{ posts.total }}</span>
          nhà trọ phù hợp với kết quả tìm kiếm
        </span>

        <br />
        <div class="motel-result">
          <div class="motel-card-none" v-if="posts.total === 0 && !$route.query.status">
            <div class="notify">
              <span
                >Nếu bạn muốn lưu kết quả tìm kiếm này, hệ thống sẽ thông báo
                đến bạn khi có nhà trọ phù hợp</span
              >
            </div>
            <div class="choice" style="margin: 40px auto; width: 30%">
              <a-button @click="createPersonalFilter()" type="primary"
                >Lưu lại</a-button
              >
            </div>
          </div>
          <div class="motel-card-detail" v-else>
            <a
              :href="'/bat-dong-san/' + post._id"
              class="motel-link router-link"
              v-for="(post, index) in posts.data"
              :key="index"
            >
              <div class="motel-content">
                <div class="card-title motel-content-responsive">
                  {{ post.detailedPost.title }}
                </div>
                <div style="display: flex">
                  <div class="motel-card-image">
                    <img :src="post.images[0].url" />
                  </div>
                  <div class="motel-card-info">
                    <div class="motel-card-info-content">
                      <h4 class="card-title">
                        <span>
                          <a-icon type="star" theme="filled" />
                          {{ post.detailedPost.title }}
                        </span>
                      </h4>
                      <div class="card-config" style="display: flex">
                        <div class="card-config-area">{{ post.area }} m²</div>
                        <div
                          class="ard-config-bedroom"
                          style="display: flex; margin-left: 25px"
                        >
                          <div>
                            <span> {{ post.bedRoom }} </span>
                          </div>
                          <div>
                            <font-awesome-icon icon="fa-solid fa-bed" />
                          </div>
                        </div>
                        <div
                          class="ard-config-toilet"
                          style="display: flex; margin-left: 35px"
                        >
                          <div><span> 3 </span></div>
                          <div>
                            <font-awesome-icon icon="fa-solid fa-bath" />
                          </div>
                        </div>
                      </div>
                      <div class="card-description">
                        {{ post.detailedPost.content }}
                      </div>
                      <div style="clear: left"></div>
                      <div class="card-contact-area">
                        <div class="card-publish">
                          <span class="card-published-info-contact-name">
                            <span
                              class="created-by"
                              style="width: 150px; display: block"
                              >Đăng bởi
                            </span>
                            <span class="created-by">{{
                              post.ownerId.name
                            }}</span>
                          </span>
                          <span class="card-published-info-published-at">
                            {{ post.createdAt.match(/(\w+\-?)+(?=T)/)[0] }}
                          </span>
                        </div>
                        <div class="card-contact" style="float: none">
                          <span
                            class="phone-number-contact"
                            style="position: relative"
                          >
                            <font-awesome-icon icon="fa-solid fa-phone" />
                            <span>&nbsp;&nbsp;</span>
                            <input
                              type="text"
                              :value="post.ownerId.phoneNumber"
                              id="copy-phone"
                              style="
                                position: absolute;
                                top: 1px;
                                left: 3px;
                                z-index: -1;
                                width: 20%;
                              "
                            />
                            <span @click="copyInfor('phone')"
                              >{{ post.ownerId.phoneNumber }} · Sao chép</span
                            >
                          </span>
                          <span class="add-to-favorite" style="margin-left: 0">
                            <font-awesome-icon
                              icon="fa-solid fa-heart"
                              color="#bfbfbf"
                              :class="{
                                colorHeart: isStorage.includes(post._id),
                              }"
                              @click.prevent="storageFavorite(post._id)"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="motel-pagination" v-if="posts.total !== 0">
          <a-pagination
            v-model="current"
            :total="50"
            style="margin: 20px 0; text-align: center"
            @change="searchArticle"
          />
        </div>
      </div>
      <div class="main-sidebar">
        <div class="sidebar-title">Nhà trọ theo quận/huyện</div>
        <div
          class="sidebar-item"
          v-for="(district, index) in districts"
          :key="index"
        >
          <a :href="'/tim-kiem?handle=search&district=' + district.name">{{
            district.name
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { RepositoryFactory } from "../repository/factory";
export default {
  name: "SearchMotelView",
  data() {
    return {
      posts: [],
      current: 1,
      isStorage: [],
      districts: [],
      user: this.checkLogged(),
    };
  },
  created() {
    this.searchArticle(this.current);
    this.getDistricts();
  },
  computed: {
    resultSearch() {
      const { query } = this.$route;
      let baseTitle = "Cho thuê nhà trọ";
      let extraTitle = "";
      if (query.district) {
        extraTitle += " ở " + query.district;
      }
      if (query.bedRoom) {
        extraTitle += " " + query.bedRoom + " phòng ngủ ";
      }
      if (query.minArea) {
        if (query.maxArea === "") {
          extraTitle += " diện tích từ " + query.minArea + " m2 ";
        } else {
          extraTitle +=
            " diện tích từ " +
            query.minArea +
            " m2 " +
            " đến " +
            query.maxArea +
            " m2 ";
        }
      }
      if (query.minPrice) {
        if (query.maxPrice === "") {
          extraTitle += " giá tiền từ " + query.minPrice + " VND ";
        } else {
          extraTitle +=
            " giá tiền từ " +
            query.minPrice +
            " VND " +
            " đến " +
            query.maxPrice +
            " VND ";
        }
      }
      baseTitle += extraTitle;
      return baseTitle;
    },
  },
  methods: {
    async searchArticle() {
      const query = this.$route.query;
      const { data } = await RepositoryFactory.get("article").searchByKeyword(
        this.current,
        4,
        query
      );
      this.posts = data;
      if (this.user) {
        const { id } = this.user;
        this.posts.data.forEach((element) => {
          if (element.userLiked.includes(id)) {
            this.isStorage.push(element._id);
          }
        });
      }
    },
    async getDistricts() {
      const { data } = await RepositoryFactory.get("address").getDistrict();
      this.districts = data.districts;
    },
    copyInfor(infor) {
      var copyText = document.getElementById("copy-" + infor);
      copyText.select();
      navigator.clipboard.writeText(copyText.value);
      this.openNotification("Thàng công", "Thông tin đã được copy", "success");
    },
    async storageFavorite(articleID) {
      if (!this.user) {
        this.openNotification("Cảnh báo", "Bạn chưa đăng nhập", "warning");
      } else {
        if (this.isStorage.includes(articleID)) {
          this.isStorage = this.isStorage.filter(
            (element) => element !== articleID
          );
          const { data } = await RepositoryFactory.get("article").decreaseLike(
            articleID
          );
          console.log(data);
          this.openNotification(
            "Thành công",
            "Bạn đã xóa tin này khỏi danh sách yêu thích",
            "success"
          );
        } else {
          this.isStorage.push(articleID);
          const { data } = await RepositoryFactory.get("article").increaseLike(
            articleID
          );
          console.log(data);
          this.openNotification(
            "Thành công",
            "Bạn đã lưu tin này vào danh sách yêu thích",
            "success"
          );
        }
      }
    },
    async createPersonalFilter() {
      console.log(this.resultSearch);
      const { query } = this.$route;
      delete query.handle;
      try {
        await RepositoryFactory.get("user").createFilter(
          this.resultSearch,
          query
        );
        this.openNotification(
          "Thông báo",
          "Kết quả tìm kiếm đã được lưu lại",
          "success"
        );
      } catch (error) {
        this.openNotification(
          "Thông báo",
          "Kết quả tìm kiếm này đã được lưu trước đó",
          "warning"
        );
      }
    },
  },
};
</script>
<style scoped>
* {
  font-family: "Roboto";
}
.search-result {
  height: 1150px;
}
.motel-card-detail {
  padding: 0px;
  font-size: 14px;
  line-height: 20px;
  margin: 0px 0px 16px 0px;
  width: 100%;
  height: auto;
  border-radius: 4px;
}
.motel-card-detail a .motel-content {
  margin-bottom: 20px;
  box-shadow: 0px 4px 6px 0px rgb(44 44 44 / 4%);
  margin-bottom: 20px;
  border: 1px solid #f2f2f2;
}
.main-content {
  width: 100%;
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
  width: 100%;
  margin-bottom: 50px;
}
.motel-card-image {
  border: 1px none black;
  position: relative;
  width: 240px;
  height: inherit;
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
  float: left;
  margin-left: 5px;
}
.motel-card-info {
  font-size: 14px;
  width: calc(100% - 240px);
  padding: 14px 16px 16px 24px;
  box-sizing: border-box;
  position: relative;
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
  font-weight: bold;
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
  width: 100%;
  margin: 30px 0 0 0;
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
  width: 100%;
  height: 200px;
}
.main-sidebar {
  padding: 10px;
  display: block;
  float: right;
  width: 240px;
  height: auto;
  border-radius: 5px;
  background-color: #f5f5f5;
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
.colorHeart {
  color: red;
}
.motel-content-responsive {
  display: none;
}
@media screen and (max-width: 1400px) {
  .main-sidebar {
    display: none;
  }
  .motel-result {
    width: 135%;
  }
}
@media screen and (max-width: 768px) {
  .motel-content-responsive {
    display: block;
  }
  .motel-content {
    padding: 10px 20px;
  }
  .motel-card-image {
    width: 140px;
  }
  .motel-card-image img {
    height: 100px;
  }
  .motel-card-info {
    padding-top: 0;
    width: 100%;
  }
  .motel-card-info .card-title,
  .card-description {
    display: none;
  }
  .phone-number-contact {
    display: none;
  }
  .card-published-info-published-at {
    display: none;
  }
  .card-published-info-published-at .created-by {
    display: block;
  }
}
</style>
