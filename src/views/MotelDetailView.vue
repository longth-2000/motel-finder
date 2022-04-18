<template lang="">
  <div class="motel-detail">
    <div class="container">
      <div class="main-content">
        <div class="picture-carousel">
          <Carousel :images="motel.images" />
        </div>
        <div class="bread-crumb">
          <a-breadcrumb>
            <a-breadcrumb-item>Cho thuê</a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Nhà trọ</a></a-breadcrumb-item>
            <a-breadcrumb-item
              ><a href="">{{ motel.address.district }}</a></a-breadcrumb-item
            >
            <a-breadcrumb-item>Chi tiết</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <div class="product-detail">
          <h2 class="product-title">
            {{ motel.detailedPost.title.toUpperCase() }}
          </h2>
          <span class="product-brief">{{ motel.detailedPost.content }}</span>
          <div class="product-short-info">
            <div class="short-info-item">
              <span class="title">Mức giá</span>
              <span class="value" style="display: inline"
                >{{ motel.price.quantity }} VND</span
              >
              <span class="ext">Tính trên tháng</span>
            </div>
            <div class="short-info-item">
              <span class="title">Diện tích</span>
              <span class="value" style="display: inline"
                >{{ motel.area }} m²</span
              >
              <span class="ext">Mặt tiền 6 m</span>
            </div>
            <div class="short-info-item">
              <span class="title">Phòng ngủ</span>
              <span class="value" style="display: inline"
                >{{ motel.bedRoom }} PN</span
              >
            </div>
            <div class="short-info-save">
              <font-awesome-icon
                icon="fa-solid fa-heart"
                style="margin: 5px 5px 0 0"
                :class="{ colorHeart: isStorage }"
                @click="storageFavorite(motel._id)"
              />
              <span class="heart-label" style="padding-left: 5px">Lưu tin</span>
            </div>
            <div class="short-info-share">
              <font-awesome-icon
                icon="fa-solid fa-flag"
                style="margin: 5px 5px 0 0; color: green"
              />
              <span class="share-label" style="padding-left: 5px">Báo cáo</span>
            </div>
            <div class="short-info-share">
              <font-awesome-icon
                icon="fa-solid fa-star"
                style="margin: 0 5px 0 0; color: #faad14; font-size: 20px"
                @click="showModal('rate')"
              />
              <a-modal
                v-model="isVisible.rate"
                centered
                title="Đánh giá bài đăng"
                @ok="sendRate(motel._id)"
              >
                <a-rate v-model="rateSend" />
              </a-modal>
              <span class="share-label" style="padding-left: 5px"
                >Đánh giá</span
              >
            </div>
          </div>
          <div class="product-full-description">
            <span class="full-desc-title">Thông tin mô tả</span>
            Cập nhật thông tin phòng trọ tại khu vực
            {{ motel.address.district }}
            <br />
            I. Thông tin cơ bản
            <br />
            {{ setType(motel.type) }}. Diện tích {{ motel.area }} m2. Giá tiền
            {{ motel.price.quantity }}VND/{{ motel.price.unit }}
            <br />
            Gần những cơ sở công cộng như {{ motel.public_location }}
            <br />
            II. Cơ cở vật chất
            <br />
            {{ motel.aircondition ? "Có điều hòa" : "Không có điều hòa" }},
            {{ motel.balcony ? "Có ban công" : "Không có ban công" }},
            {{ motel.bathRoom ? "Có phòng tắm" : "Không có phòng tắm" }},
            {{ motel.kitchen ? "Có nhà bếp" : "Không có nhà bếp" }}
          </div>
          <div class="product-property">
            <span class="full-desc-title">Đặc điểm nhà trọ</span>
            <div class="property-box">
              <div class="line-info">
                <span class="title">Loại tin đăng:</span>
                <span class="value">Cho thuê {{ setType(motel.type) }}</span>
              </div>
              <div class="line-info">
                <span class="title">Địa chỉ:</span>
                <span class="value"
                  >{{ motel.address.detail }}, {{ motel.address.ward }},
                  {{ motel.address.district }}</span
                >
              </div>
              <div class="line-info">
                <span class="title">Số phòng ngủ:</span>
                <span class="value">{{ motel.bedRoom }}</span>
              </div>
              <div class="line-info">
                <span class="title">Nội thất:</span>
                <span class="value">
                  {{
                    motel.aircondition ? "Có điều hòa" : "Không có điều hòa"
                  }}, {{ motel.balcony ? "Có ban công" : "Không có ban công" }},
                  {{ motel.bathRoom ? "Có phòng tắm" : "Không có phòng tắm" }},
                  {{ motel.kitchen ? "Có nhà bếp" : "Không có nhà bếp" }}
                </span>
              </div>
              <div class="line-info">
                <span class="title">Chung chủ:</span>
                <span class="value">{{
                  motel.sameOwner ? "Chung chủ" : "Không chung chủ"
                }}</span>
              </div>
              <div class="line-info">
                <span class="title">Đánh giá:</span>
                <a-rate v-model="rate" :disabled="true" allow-half />
              </div>
            </div>
          </div>

          <div class="product-comment-box">
            <form action="" method="">
              <span class="comment-box-title">Bình luận</span>
              <div class="comment-box" style="margin: 20px 0 0 0">
                <a-textarea
                  placeholder="Viết bình luận"
                  :rows="4"
                  allowClear
                  v-model="textComment"
                />
              </div>
              <div class="submit-button">
                <a-button type="primary" @click="sendComment(motel._id)">
                  Comment
                </a-button>
              </div>
              <div>
                <a-comment v-for="(comment, index) in comments" :key="index">
                  <a slot="author">{{ comment.username }}</a>
                  <a-avatar
                    slot="avatar"
                    :src="comment.avatar.url"
                    alt="Han Solo"
                  />
                  <p slot="content">
                    {{ comment.coment }}
                  </p>
                </a-comment>
              </div>
            </form>
          </div>

          <div class="product-short-info">
            <div class="short-info-item">
              <span class="title">Ngày đăng</span>
              <span class="value" style="display: inline">{{
                motel.createdAt.match(/\S+(?=T)/g)[0]
              }}</span>
            </div>
            <div class="short-info-item">
              <span class="title">Ngày hết hạn</span>
              <span class="value" style="display: inline">{{
                motel.postExpired.match(/\S+(?=T)/g)[0]
              }}</span>
            </div>
            <div class="short-info-item">
              <span class="title">Loại tin</span>
              <span class="value" style="display: inline">Cho thuê </span>
            </div>
            <div class="short-info-item">
              <span class="title">Mã tin</span>
              <span class="value" style="display: inline">{{ motel._id }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="main-sidebar">
        <div class="sidebar-avatar">
          <a-avatar :size="60" icon="user" />
        </div>
        <span class="prefix-contact-name">Được đăng bởi</span>
        <div class="contact-name" title="Nguyễn Như Duy">
          <h5>Nguyễn Như Duy</h5>
        </div>
        <div class="phone-contact" style="position: relative">
          <input
            type="text"
            value="1234567890"
            id="copy-phone"
            style="position: absolute; top: 1px; left: 3px"
          />
          <a-button
            type="primary"
            block
            @click="displayInfor.phone = true"
            :class="{ changeSize: displayInfor.phone }"
          >
            <div v-if="!displayInfor.phone">Gọi cho tôi</div>
            <div v-else @click="copyInfor('phone')">
              <div id="phone-copy">1234567890</div>
              <div>Sao chép</div>
            </div>
          </a-button>
        </div>
        <div class="send-email" style="position: relative">
          <input
            type="text"
            value="truonghoanglong305@gmail.com"
            id="copy-email"
            style="position: absolute; top: 1px; left: 3px"
          />
          <a-button
            type="primary"
            block
            @click="displayInfor.email = true"
            :class="{ changeSize: displayInfor.email }"
            style="background-color: green"
          >
            <div v-if="!displayInfor.email">email</div>
            <div v-else @click="copyInfor('email')">
              <div id="phone-copy">truonghoanglong305@gmail.com</div>
              <div>Sao chép</div>
            </div>
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import Carousel from "../components/home/Carousel.vue";
import { RepositoryFactory } from "../repository/factory";
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "MotelDetailView",
  components: {
    Carousel,
  },
  data() {
    return {
      span_responsive: 6,
      motel: {},
      moment,
      comments: [],
      textComment: "",
      isStorage: false,
      displayInfor: {
        phone: false,
        email: false,
      },
      rate: 0,
      rateSend: 0,
    };
  },
  created() {
    this.getDataArticle();
  },
  mounted() {
    window.addEventListener("resize", this.onResponsive);
  },
  computed: {
    ...mapGetters("modal", ["isVisible"]),
  },
  methods: {
    onResponsive() {
      if (window.innerWidth < 500) {
        this.span_responsive = 24;
      } else if (window.innerWidth < 1000) {
        this.span_responsive = 12;
      } else if (window.innerWidth < 1180) {
        this.span_responsive = 8;
      } else this.span_responsive = 6;
    },
    getDataArticle() {
      let articleAPI = `https://backend-api-production.up.railway.app/accomodations/${this.$route.params.id}`;
      let commentAPI = `https://backend-api-production.up.railway.app/report/comment/${this.$route.params.id}`;
      const requestArticle = axios.get(articleAPI);
      const requestComment = axios.get(commentAPI);
      axios
        .all([requestArticle, requestComment])
        .then(
          axios.spread((...responses) => {
            const responseArticle = responses[0];
            const responseComment = responses[1];
            const responseEval = responses[2];
            this.motel = responseArticle.data;
            const id = JSON.parse(localStorage.getItem("user")).id;
            this.isStorage = this.motel.userLiked.includes(id) ? true : false;
            console.log(responseArticle);
            responseComment.data.forEach((element) => {
              this.comments.push({
                coment: element.metadata,
                username: element.createBy.userName,
                avatar: {
                  url: element.createBy.avatar.url,
                },
              });
            });
            console.log(responseEval.data)
            
          })
        )
        .catch((errors) => {
          console.log(errors);
        });
    },
    setType(type) {
      if (type === 1) return "phòng trọ";
      if (type === 2) return "nhà nguyên căn";
      if (type === 3) return "chung cư nguyên căn";
      if (type === 4) return "chung cư mini";
    },
    async sendComment(articleID) {
      const { data } = await RepositoryFactory.get("article").comment(
        articleID,
        this.textComment
      );
      console.log(data);
      this.comments.push(data.data);
    },
    async sendRate(articleID) {
      const { data } = await RepositoryFactory.get("article").rate(
        articleID,
        this.rateSend
      );
      console.log(data);
      this.openNotification(
        "Thành công",
        "Đánh giá của bạn đã được lưu",
        "success"
      );
      this.closeModal("rate");
    },
    async storageFavorite(articleID) {
      if (this.isLogged) {
        this.openNotification("Cảnh báo", "Bạn chưa đăng nhập", "warning");
      } else {
        if (this.isStorage) this.isStorage = false;
        else {
          this.isStorage = true;
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
    copyInfor(infor) {
      var copyText = document.getElementById("copy-" + infor);
      copyText.select();
      navigator.clipboard.writeText(copyText.value);
      this.openNotification("Thàng công", "Thông tin đã được copy", "success");
    },
  },
};
</script>
<style scoped>
* {
  font-family: Tahoma;
}
.picture-carousel {
  margin-bottom: 100px;
}
.picture-carousel img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  z-index: 1;
}
.bread-crumb {
  margin: 24px 0px 8px 0px;
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
<<<<<<< HEAD
  height: auto;
  width: 100%;
  margin: 0 0 24px 0;
  padding: 15px 0px;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
  box-sizing: border-box;
  float: left;
=======
    height: auto;
    width: 100%;
    margin : 24px 0px;
    padding : 15px 0px;
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
    box-sizing: border-box;
    float: left;
    display: bloxk;
>>>>>>> adaf0c25ecbde6f230f0c6c47c8d40a8e594980f
}
.short-info-item {
  padding-left: 48px;
  float: left;
}
.short-info-item:first-child {
  padding-left: 0px;
}
.short-info-item span {
  display: flex;
  align-items: flex-start;
}
.short-info-item span:nth-child(1) {
  font-size: 14px;
  line-height: 20px;
  font-weight: normal !important;
  color: #999;
  display: block;
}
.short-info-item span:nth-child(2) {
  line-height: 28px;
  margin-top: 4px;
  display: block;
}
.short-info-item span:nth-child(3) {
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
<<<<<<< HEAD
  font-weight: bold;
  font-size: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
=======
    display: block;
    font-weight: bold;
    font-size: 20px;
    margin-top : 50px;
    margin-bottom : 50px
>>>>>>> adaf0c25ecbde6f230f0c6c47c8d40a8e594980f
}
.comment-box-title {
    padding-bottom : 30px
}
.submit-button {
    float: right;
}
.product-suggest {
  width: inherit;
  height: auto;
  display: block;
}
.product-watch-history {
  margin-top: 40px;
  width: inherit;
  height: auto;
  display: block;
}
.motel-card {
  width: 100px;
}
.product-property {
  margin-top: 40px;
}
.property-box {
<<<<<<< HEAD
  font-size: 14px;
  text-decoration-style: solid;
  border: 1px solid rgb(242, 242, 242);
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 8px;
  padding-bottom: 8px;
  padding-top: 8px;
  display: block;
  box-sizing: border-box;
}
.line-info {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 0px 16px 0px 16px;
  padding: 14px 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  border-bottom: 1px solid rgb(242, 242, 242);
=======
    font-size: 14px;
    text-decoration-style: solid;
    border: 1px solid rgb(242, 242, 242);
    border-radius: 4px;
    margin-bottom: 10px;
    padding-bottom: 8px;
    padding-top: 8px;
    display: block;
    box-sizing: border-box;
}
.line-info {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 0px 16px 0px 16px;
    padding: 14px 14px 0px 0px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
>>>>>>> adaf0c25ecbde6f230f0c6c47c8d40a8e594980f
}
.title {
  width: 112px;
  line-height: 20px;
  color: rgb(44, 44, 44);
}
.value {
<<<<<<< HEAD
  width: calc(100% - 112px);
  box-sizing: border-box;
  font-size: 14px;
  text-decoration-style: solid;
  line-height: 20px;
  font-weight: bold;
=======
    width: calc(100% - 112px);
    box-sizing: border-box;
    font-size: 14px;
    line-height: 20px;
    color: rgb(44, 44, 44);
>>>>>>> adaf0c25ecbde6f230f0c6c47c8d40a8e594980f
}
.project-info {
  box-sizing: border-box;
  display: block;
  margin-bottom: 32px;
  font-size: 14px;
  line-height: 20px;
  height: 172px;
}
span.section-title {
  margin-top: 50px;
  display: block;
  margin-bottom: 16px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: bold;
  line-height: 28px;
}
.section-body {
  outline: 1px solid #f2f2f2;
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-sizing: border-box;
}
.section-avatar {
  height: 128px;
  box-sizing: border-box;
  float: left;
  display: block;
  width: 216px;
  height: inherit;
}
.section-avatar img {
  box-sizing: border-box;
  display: inline;
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
.section-content {
  box-sizing: border-box;
  display: block;
  float: right;
  padding: 16px;
  position: relative;
  width: calc(100% - 216px);
}
.project-item {
  display: block;
  margin-bottom: 16px;
  box-sizing: border-box;
}
.project-title {
  font-size: 15px;
  font-weight: bold;
  box-sizing: border-box;
  display: -webkit-box;
}
.project-item a {
<<<<<<< HEAD
  position: absolute;
  box-sizing: border-box;
  right: 16px;
  top: 16px;
  float: right;
  color: red;
  text-decoration: none;
=======
    display : flex;
    align-items: center;
    position: absolute;
    box-sizing: border-box;
    right: 16px;
    top: 16px;
    color: red;
    text-decoration: none;
>>>>>>> adaf0c25ecbde6f230f0c6c47c8d40a8e594980f
}
.project-item a span {
    padding-right : 5px
}
.project-item span.value {
  box-sizing: border-box;
  display: -webkit-box;
  float: right;
}

.main-sidebar {
<<<<<<< HEAD
  padding: 10px;
  display: block;
  float: right;
  width: 250px;
  height: auto;
  display: block;
  border: 1px solid #f2f2f2;
  background-color: azure;
  border-radius: 5px;
=======
    padding: 10px;
    display: block;
    float: right;
    width: 210px;
    height: auto;
    display: block;
}
.sidebar-block {
    margin-bottom : 15px;
    border: 1px solid #f2f2f2;
    padding: 10px;
    background-color: #f2f2f2;
}
.sidebar-block a {
    text-decoration: none;
    color: black;
}
.sidebar-block .sidebar-title {
    text-decoration: none;
    color: black;
    font-weight: bold;
}
.sidebar-block .sidebar-item {
    line-height: 30px;
>>>>>>> adaf0c25ecbde6f230f0c6c47c8d40a8e594980f
}
.sidebar-avatar {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}
.prefix-contact-name {
  font-size: 12px;
  color: #999;
}
.prefix-contact-name,
.contact-name {
  margin-top: 5px;
  display: block;
  text-align: center;
}
.phone-contact,
.send-email {
  display: block;
  border-radius: 4px;
  margin-top: 30px;
  margin-bottom: 20px;
  height: 30px;
}
.colorHeart {
  color: red;
}
.changeSize {
  height: 50px;
}
::v-deep .ant-carousel .slick-slider {
  height: 400px;
}
::v-deep .ant-carousel .slick-slide img {
  height: 400px !important;
}
::v-deep .anticon {
  vertical-align: 0.2rem;
}
::v-deep .ant-modal-body {
  width: 35%;
  margin: 0 auto;
}
@media screen and (max-width: 1400px) {
  .main-sidebar {
    display: none;
  }
}
</style>
