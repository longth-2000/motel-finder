<template>
  <div :updateTime="updateTime">
    <div class="overview-boxes">
      <div class="box">
        <div class="right-side">
          <div class="box-topic">Số bài đăng</div>
          <div class="number">{{ articleSummary.posts }}</div>
        </div>
        <i class="bx bx-cart-alt cart">
          <font-awesome-icon icon="fa-solid fa-book" />
        </i>
      </div>
      <div class="box">
        <div class="right-side">
          <div class="box-topic">Đã thanh toán</div>
          <div class="number">{{ articleSummary.paid }}</div>
        </div>
        <i class="bx bxs-cart-add cart two">
          <font-awesome-icon icon="fa-solid fa-money-bill" />
        </i>
      </div>
      <div class="box">
        <div class="right-side">
          <h3 class="box-topic">Đã phê duyệt</h3>
          <div class="number">
            {{ articleSummary.approved }}
          </div>
        </div>
        <i class="bx bx-cart cart three">
          <font-awesome-icon icon="fa-solid fa-check" />
        </i>
      </div>
      <div class="box">
        <div class="right-side">
          <div class="box-topic">Chưa phê duyệt</div>
          <div class="number">
            {{ articleSummary.notApprove }}
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
                <th></th>
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
              <tr
                v-for="(article, index) in articleArray"
                :key="index"
                class="table-article"
              >
                <td><a-checkbox></a-checkbox></td>
                <td><a :href="'/bat-dong-san/'+ article._id" class="router-link">Xem chi tiết</a></td>
                <td>
                  <span class="title-article">{{
                    article.detailedPost.title
                  }}</span>
                </td>
                <td>{{ formatDate(article.createdAt) }}</td>
                <td>{{ article.ownerId.name }}</td>
                <td>{{ formatDate(article.postExpired) }}</td>
                <td>
                  <a-tag color="green" v-if="article.isPaid"
                    >Đã thanh toán</a-tag
                  >
                  <a-tag color="red" v-if="!article.isPaid"
                    >Chưa thanh toán</a-tag
                  >
                </td>
                <td v-if="article.status == postStatus.reject">
                  <a-tag color="red"> Từ chối </a-tag>
                </td>
                <td v-if="article.status == postStatus.agree">
                  <a-tag color="green"> Đã duyệt </a-tag>
                </td>
                <td
                  v-if="article.status == postStatus.waiting"
                  class="action-approve"
                >
                  <a-button
                    type="danger"
                    class="button-reject"
                    @click.prevent="
                      handleApprove(article, { status: `rejected` })
                    "
                    >Từ chối</a-button
                  >
                   <slot></slot>
                  <a-button
                    type="primary"
                    @click.prevent="
                      handleApprove(article, { status: `approved` })
                    "
                    >Đồng ý</a-button
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="pagination">
          <a-pagination
            v-model="current"
            :total="articleSummary.posts"
            show-less-items
            :defaultPageSize="5"
          />
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { RepositoryFactory } from "../../repository/factory";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./../../fire";
import { postStatus } from "../../constants/postStatus";
import { notificationTypes } from "./../../constants/notificationTypes";

export default {
  data() {
    return {
      articleArray: [],
      current: 1,
      articleSummary: {
        posts: 0,
        paid: 0,
        approved: 0,
        refused: 0,
      },
      query: {
        limit: 5,
        page: 1,
      },
      updateTime: Date.now(),
      postStatus: postStatus,
      notificationTypes: notificationTypes,
    };
  },
  created() {
    this.getSummary();
    this.getAllPosts(this.query);
  },
  methods: {
    async getArticle() {
      console.log("nsvnldnvlkdsnv");
      const { data } = await RepositoryFactory.get(
        "article"
      ).getMultipleArticle();
      this.articleArray = data.filter((ele) => ele.status === "waiting");
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
    async getSummary() {
      console.log("get summary..");
      const { data } = await RepositoryFactory.get("article").getSummary();
      this.articleSummary = data.data;
    },
    async getAllPosts(query) {
      console.log("get all posts");
      const { data } = await RepositoryFactory.get("article").getAllPosts(
        query
      );
      this.articleArray = data.data;
      console.log(this.articleArray);
    },
    async handleApprove(article, state) {
      try {
        await RepositoryFactory.get("article").updateState(article._id, state);
        await addDoc(collection(db, "notifications"), {
          user: article.ownerId,
          detail: `Bài đăng của bạn đã ${
            state.status == this.postStatus.agree
              ? "được phê duyệt"
              : "bị từ chối"
          }`,
          state: state.status,
          type: notificationTypes.approveFromAdmin,
          date: new Date().toISOString(),
          is_read: false,
          post_id: article._id,
        });
      } catch (err) {
        console.log("err", err);
      }
      await this.getSummary();
      await this.getAllPosts(this.query);
      this.updateTime = Date.now();
    },
    redirectDetail(id) {
      window.location.href = `/bat-dong-san/${id}`;
    },
  },
  watch: {
    current(value) {
      this.query.page = value;
      this.getAllPosts(this.query);
    },
    updateTime(val) {
      this.updateTime = val;
    },
  },
  mounted() {},
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
/* .table-article:hover {
  background: rgba(0, 0, 0, 0.1);
  cursor: pointer;
} */
.button-reject {
  margin-right: 10px;
}
@media screen and (max-width: 1024px) {
  .button-reject {
    margin-bottom: 10px;
  }
}
</style>
