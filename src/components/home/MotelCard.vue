<template lang="">
  <div class="motel-card">
    <div class="motel-img">
      <img :src="card.images[0].url" />
    </div>
    <div class="motel-content">
      <div class="motel-descript" style="position: relative">
        <div class="motel-title">
          {{ card.detailedPost.title }}
        </div>
        <div class="motel-rate">
          <a-rate
            style="font-size: 14px"
            v-model="rateStar"
            :disabled="true"
            allow-half
          />
          <div
            style="
              background: #007ae9;
              display: flex;
              height:20px;
              justify-content: space-between;
              border-radius:4px;
              color:white;
              font-size:13px
              align-items:baseline;
              margin: 2px 10px;
              text-align:center
            "
            class="motel-icon"
            @click.prevent="storageFavorite(card._id)"
          >
            <div style="margin: 0px 2px 0px 6px">
              <font-awesome-icon
                icon="fa-solid fa-heart"
                color="white"
                :class="{ colorHeart: isStorage }"
              />
            </div>
            <div style="margin: 0px 10px 0px 3px">{{isStorage ? 'UNLIKE' : 'LIKE'}}</div>
          </div>
        </div>
        <div class="motel-detail" style="display: flex; margin: 20px 0">
          <div class="detail">{{ card.area }} m2</div>
          <div class="detail">{{ card.bedRoom }} ROOM</div>
        </div>
        <div class="motel-notify">
          {{ card.detailedPost.content }}
        </div>
        <div
          class="motel-price"
          style="
            text-align: center;
            font-family: 'DM Serif Display';
            font-weight: bold;
            margin-top: 25px;
          "
        >
          <span style="font-size: 27px">{{ card.price.quantity }}</span
          >/<span>{{ card.price.unit }}</span>
        </div>
      </div>
      <a :href="'/bat-dong-san/' + card._id" class="router-link"
        ><div class="motel-select">Xem chi tiết</div></a
      >
    </div>
  </div>
</template>
<script>
import { RepositoryFactory } from "../../repository/factory";
export default {
  name: "MotelCard",
  props: {
    motelType: {
      type: String,
    },
    card: {
      type: Object,
    }
  },
  data() {
    return {
      isStorage: false,
      rateStar: 0,
      user:this.checkLogged()
    };
  },
  computed: {},
  created() {
    if (this.user) {
      this.isStorage = this.card.userLiked.includes(this.user.id) ? true : false; 
    }
    this.getRate();
  },
  methods: {
    async storageFavorite(articleID) {
      if (!this.user) {
        this.openNotification("Cảnh báo", "Bạn chưa đăng nhập", "warning");
      } else {
        if (this.isStorage) {
          this.isStorage = false;
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
    async getRate() {
      const { data } = await RepositoryFactory.get("article").getRate(
        this.card._id
      );
      let rateStar = data.reduce(
        (previousValue, currentValue) => previousValue + currentValue.metadata,
        0
      );
      this.rateStar =
        data.length === 0
          ? 0
          : parseFloat(
              (Math.round((rateStar / data.length) * 2) / 2).toFixed(1)
            );
    },
  },
};
</script>
<style scoped>
* {
  font-family: "Open Sans";
}
.motel-card {
  height: 520px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgb(44 44 44 / 4%);
  border: 1px solid #e8e8e8;
}
.motel-img img {
  width: 100%;
  height: 150px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  object-fit: cover;
}
.motel-content {
  width: 90%;
  height: 320px;
  margin: 20px auto 20px auto;
  position: relative;
}
.motel-select {
  width: 100%;
  background: #2ecc71;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: 700;
  color: white;
  position: absolute;
  bottom: 0;
}
.motel-title {
  font-family: "DM Serif Display";
  font-weight: bold;
  color: #081f32;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  margin-bottom: 10px;
}
.motel-rate {
  display: flex;
}
.motel-icon:hover {
  cursor: pointer;
}
.motel-detail .detail {
  height: 20px;
  border: 1px solid #d7d8d9;
  border-radius: 4px;
  line-height: 20px;
  font-size: 12px;
  width: 70px;
  text-align: center;
  margin-right: 10px;
  padding: -4px 0;
  color: #007ae9;
  text-transform: uppercase;
  font-family: "Open Sans";
  font-weight: bold;
}
.motel-notify {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  margin: 20px 0 10px 0;
  color: #6e798c;
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
.router-link img {
  height: 180px;
  padding: 10px;
}
.colorHeart {
  color: red;
}
@media only screen and (max-width: 768px) {
  .motel-card {
    width: 80%;
    margin: 0 auto;
  }
}
</style>