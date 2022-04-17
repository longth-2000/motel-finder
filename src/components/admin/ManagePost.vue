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
          <div class="number">{{articleSummary.paid}}</div>
        </div>
        <i class="bx bxs-cart-add cart two">
          <font-awesome-icon icon="fa-solid fa-money-bill" />
        </i>
      </div>
      <div class="box">
        <div class="right-side">
          <h3 class="box-topic">Đã phê duyệt</h3>
          <div class="number">
            {{articleSummary.approved}}
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
                <td v-if="article.state == postState.reject">     
                  <a-tag color="red">
                    Từ chối
                  </a-tag>
                </td>
                <td v-if="article.state == postState.agree">     
                  <a-tag color="green">
                    Đã duyệt
                  </a-tag>
                </td>
                <td v-if="article.state == postState.waiting" class="action-approve">
                  <a-button type="danger" @click="handleApprove(article, {state: 0})">Từ chối</a-button
                  ><a-button type="primary" class="button-approve" @click="handleApprove(article, {state: 2})">Đồng ý</a-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="pagination">
          <a-pagination v-model="current" :total="articleSummary.posts" show-less-items :defaultPageSize="5" />
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
import { collection, addDoc } from "firebase/firestore"
import {db} from './../../fire'
import { postState } from './../../constants/postState'
import { notificationTypes } from './../../constants/notificationTypes'

export default {
  data() {
    return {
      articleArray: [],
      current: 1,
      articleSummary: {
        posts: 0,
        paid: 0,
        approved: 0,
        refused: 0
      },
      query: {
        limit: 5,
        page: 1
      },
      updateTime: Date.now(),
      postState: postState,
      notificationTypes: notificationTypes
    };
  },
  created() {
    this.getSummary()
    this.getAllPosts(this.query)
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
    async getSummary() {
      console.log('get summary..')
      const { data } = await RepositoryFactory.get('article').getSummary()
      this.articleSummary = data.data
    },
    async getAllPosts(query) {
      console.log('get all posts')
      const { data } = await RepositoryFactory.get('article').getAllPosts(query)
      this.articleArray = data.data
    },
    async handleApprove(article, state) {
      try {
        await RepositoryFactory.get('article').updateState(article._id, state)
        await addDoc(collection(db, "notifications"), {
          user_id: article.ownerId,
          detail: `Bài đăng của bạn đã ${state.state  == postState.agree ? 'được phê duyệt' : 'bị từ chối'}`,
          state: state.state,
          type: notificationTypes.approveFromAdmin,
          date: new Date().toISOString(),
          isRead: false
        });
      } catch(err) {
        console.log('err', err)
      }
      await this.getSummary()
      await this.getAllPosts(this.query)
      this.updateTime = Date.now()

    }
  },
  watch: {
    current(value) {
      this.query.page = value
      this.getAllPosts(this.query)
    },
    updateTime(val) {
      this.updateTime = val
    }
  },
  mounted() {
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
.button-approve {
  margin-left: 10px;
}
</style>
