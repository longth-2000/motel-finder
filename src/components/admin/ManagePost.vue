<template>
  <div>
    <div class="overview-boxes">
      <div class="box">
        <div class="right-side">
          <div class="box-topic">Số bài đăng</div>
          <div class="number">{{ articleArray.length }}</div>
        </div>
        <i class="bx bx-cart-alt cart">
          <font-awesome-icon icon="fa-solid fa-book" />
        </i>
      </div>
      <div class="box">
        <div class="right-side">
          <div class="box-topic">Đã thanh toán</div>
          <div class="number">0</div>
        </div>
        <i class="bx bxs-cart-add cart two">
          <font-awesome-icon icon="fa-solid fa-money-bill" />
        </i>
      </div>
      <div class="box">
        <div class="right-side">
          <h3 class="box-topic">Đã duyệt</h3>
          <div class="number">
            {{ articleArray.filter((element) => element.isApproved === 2).length }}
          </div>
        </div>
        <i class="bx bx-cart cart three">
          <font-awesome-icon icon="fa-solid fa-check" />
        </i>
      </div>
      <div class="box">
        <div class="right-side">
          <div class="box-topic">Từ chối</div>
          <div class="number">
            {{ articleArray.filter((element) => element.isApproved === 3).length }}
          </div>
        </div>
        <i class="bx bxs-cart-download cart four">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </i>
      </div>
    </div>

    <div class="sales-boxes">
      <div class="recent-sales box">
        <div class="title">Quản lí bài đăng</div>
        <div class="sales-details">
          <table class="table">
            <thead>
              <tr>
                <th><a-checkbox></a-checkbox></th>
                <th>Tiêu đề</th>
                <th>Ngày đăng</th>
                <th>Người đăng bài</th>
                <th>Hết hạn</th>
                <th>Thanh toán</th>
                <th>Trạng thái duyệt</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(article, index) in articleArray" :key="index" class="table-article">
                <td><a-checkbox></a-checkbox></td>
                <td>
                  <span class="title-article">{{
                    article.detailedPost.title
                  }}</span>
                </td>
                <td>{{ formatDate(article.createdAt) }}</td>
                <td>Trương Hoàng Long</td>
                <td>{{ formatDate(article.postExpired) }}</td>
                <td><a-tag color="red">Chưa thanh toán</a-tag></td>
                <td>
                  <a-tag :color="article.isApproved === 2 ? 'green' : 'red'">{{
                    article.isApproved === 2 ? "Chấp nhận" : "Từ chối"
                  }}</a-tag>
                </td>
                <td >
                  <a-button type="danger">Từ chối</a-button
                  ><a-button type="primary">Đồng ý</a-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <!-- <a-pagination
            v-model="current"
            :total="50"
            @change="getArticle"
            style="float: right"
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.icon-static {
  font-size: 30px;
}
</style>
<script>
import { RepositoryFactory } from "../../repository/factory";

export default {
  data() {
    return {
      articleArray: [],
      current: 1,
    };
  },
  created() {
    this.getArticle();
  },
  methods: {
    async getArticle() {
      console.log("nsvnldnvlkdsnv");
      const { data } = await RepositoryFactory.get(
        "article"
      ).getMultipleArticle();
      this.articleArray = data.filter((ele) => ele.status === "posted");
      console.log(this.articleArray);
    },
    formatDate(date) {
      let formatDate = new Date(date);
      return (
        formatDate.getDate() +
        "/" +
        (formatDate.getMonth() + 1) +
        "/" +
        formatDate.getFullYear()
      );
    },
  },
};
</script>
<style scoped>
.title-article {
  display: -webkit-box;
  max-width: 200px;
  height: 80px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.table-article:hover {
  background: rgba(0,0,0,.1);
  cursor: pointer;
}
</style>
