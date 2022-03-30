<template>
  <div>
    <div id="title-component-profile">
      <span>TIN ĐÃ ĐĂNG</span>
    </div>
    <div id="filter-post">
      <div style="float: right; display: flex; margin-right: 25px">
        <div class="action" id="search">
          <a-input placeholder="Tìm theo mã tin, tiêu đề">
            <a-tooltip slot="suffix" title="Tìm kiếm theo tiêu đề">
              <a-icon type="search" />
            </a-tooltip>
          </a-input>
        </div>
        <div class="action action-button" id="filter">
          <div><font-awesome-icon icon="fa-solid fa-filter" /></div>
          <div><span>Lọc</span></div>
        </div>
        <div class="action action-button" id="sort">
          <font-awesome-icon icon="fa-solid fa-sort" />
          <span>Sắp xếp</span>
        </div>
      </div>
    </div>
    <div id="content">
      <table class="table">
        <thead>
          <tr>
            <th><a-checkbox></a-checkbox></th>
            <th>Tiêu đề</th>
            <th>Phê duyệt</th>
            <th>Đã có người thuê</th>
            <th>Thời hạn đăng</th>
            <th>Ngày đăng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) in this.articleArray" :key="index">
            <td><a-checkbox></a-checkbox></td>
            <td>
              <span class="title-article">{{ post.detailedPost.title }}</span>
            </td>
            <td>
              <a-tag :color="post.isApproved ? 'green' : 'red'">
                {{
                  post.status === "posted"
                    ? "Đang xem xét"
                    : post.isApproved
                    ? "Từ chối"
                    : "Đang xem xét"
                }}
              </a-tag>
            </td>
            <td>
              <a-switch
                @change="changeStateArticle(post._id)"
                :default-checked="post.isRented ? true : false"
              />
            </td>
            <td>
              <a-tag
                style="cursor: pointer"
                :color="setExpiredState(post.postExpired).color"
                :value="setExpiredState(post.postExpired).state"
                @click="alertPurchase($event)"
              >
                {{ setExpiredState(post.postExpired).mess }}</a-tag
              >
              <a-modal
                v-model="isVisible.purchase"
                title="Thông báo thanh toán"
                ok-text="Đồng ý gia hạn"
                cancel-text="Quay lại"
              >
                <div>
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>Thời hạn</td>
                        <td>2 Tháng</td>
                      </tr>
                      <tr>
                        <td>Giá tiền</td>
                        <td>1000000</td>
                      </tr>
                      <tr>
                        <td>Só tài khoản</td>
                        <td>12345678</td>
                      </tr>
                      <tr>
                        <td>Ngân hàng</td>
                        <td>BIDV</td>
                      </tr>
                      <tr>
                        <td>Chủ tài khoản</td>
                        <td>bvbsdvdksbvdsvdv</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </a-modal>
            </td>
            <td>30/5/2000</td>
            <td>
              <a-popconfirm
                title="Bạn có chăc chắn muốn xóa bài đăng này?"
                ok-text="Yes"
                cancel-text="No"
                @confirm="confirmDelete(post._id)"
              >
                <a-button type="danger"> Xóa </a-button>
              </a-popconfirm>
              <a :href="'/dang-tin?id=' + post._id">
                <a-button
                  type="primary"
                  style="margin-left: 10px"
                  :disabled="post.isApproved ? false : true"
                >
                  Sửa
                </a-button>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { RepositoryFactory } from "../../repository/factory";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      articleArray: [],
    };
  },
  computed: {
    ...mapGetters("modal", ["isVisible"]),
  },
  created() {
    this.getMultipleArticle();
  },
  methods: {
    async getMultipleArticle() {
      const { data } = await RepositoryFactory.get(
        "article"
      ).getMultipleArticle();
      console.log(data);
      this.articleArray = data;
      console.log(this.articleArray);
    },
    async confirmDelete(articleID) {
      const { data } = await RepositoryFactory.get("article").deleteArticle(
        articleID
      );
      this.articleArray = this.articleArray.filter(
        (article) => article._id !== articleID
      );
      this.openNotification("Thành công", "Nhà trọ đã được xóa", "success");
      console.log(data);
    },
    setExpiredState(expiredTime) {
      return new Date(expiredTime).getTime() < Date.now()
        ? {
            state: "true",
            mess: "Còn hạn",
            color: "green",
          }
        : {
            state: "false",
            mess: "Hết hạn",
            color: "red",
          };
    },
    alertPurchase(event) {
      let value = event.target.getAttribute("value");
      if (value === "false") {
        this.showModal("purchase");
      }
    },
    async changeStateArticle(articleID) {
      const { data } = await RepositoryFactory.get(
        "article"
      ).updateStateArticle(articleID);
      console.log(data);
      this.openNotification("Thành công", "Cập nhật thành công", "success");
    },
  },
};
</script>
<style scoped>
#filter-post {
  width: 100%;
  height: 80px;
}
thead th {
  font-family: Roboto;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
}

.table > :not(:first-child) {
  border-top: 1px solid currentColor;
}

tbody td {
  font-family: Roboto;
  font-size: 14px;
  height: 35px;
  line-height: 35px;
}
.action {
  margin: 20px 5px;
}
.action-button {
  border: 1px solid #ccc;
  height: 30px;
  margin-top: 21px;
  padding: 0 10px;
  border-radius: 4px;
  font-family: Calibri;
  font-weight: bold;
  display: flex;
  align-items: center;
}
.action-button:hover {
  cursor: pointer;
}
.action-button span {
  margin-left: 10px;
}
.title-article {
  width: 300px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
  display: inline-block;
}
</style>
