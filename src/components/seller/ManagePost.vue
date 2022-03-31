<template>
  <div>
    <div id="title-component-profile">
      <span>TIN ĐÃ ĐĂNG</span>
    </div>
    <div id="filter-post">
      <div
        style="
          float: right;
          display: flex;
          justify-content: space-evenly;
          width: 40%;
        "
      >
        <div class="action" id="search">
          <a-input placeholder="Tìm theo mã tin, tiêu đề">
            <a-tooltip slot="suffix" title="Tìm kiếm theo tiêu đề">
              <a-icon type="search" />
            </a-tooltip>
          </a-input>
        </div>
        <a-dropdown-button>
          Lọc
          <a-menu slot="overlay" @click="handleFilter">
            <a-menu-item key="stateExpired"> Theo thời hạn </a-menu-item>
            <a-menu-item key="stateMotel"> Theo tình trạng phòng </a-menu-item>
            <a-menu-item key="stateApproved">
              Theo trạng thái phê duyệt
            </a-menu-item>
          </a-menu>
          <a-icon slot="icon" type="filter" />
        </a-dropdown-button>
        <a-modal
          v-model="isVisible[stateFilter]"
          ok-text="Chọn"
          :title="
            stateFilter === 'stateExpired'
              ? 'Trạng thái hết hạn'
              : stateFilter === 'stateMotel'
              ? 'Trạng thái phòng trọ'
              : 'Trạng thái phê duyệt'
          "
          cancel-text="Quay lại"
        >
          <FilterPost :type="this.stateFilter" />
        </a-modal>
        <a-dropdown-button>
          Sắp xếp
          <a-menu slot="overlay">
            <a-menu-item key="1"> Theo ngày đăng </a-menu-item>
            <a-menu-item key="2"> Theo tiêu đề </a-menu-item>
          </a-menu>
          <a-icon slot="icon" type="sort-descending" />
        </a-dropdown-button>
      </div>
    </div>
    <div id="content">
      <table class="table">
        <thead>
          <tr>
            <th><a-checkbox></a-checkbox></th>
            <th>Tiêu đề</th>
            <th>Phê duyệt</th>
            <th>Đã cho thuê</th>
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
              <a-tag
                :color="
                  post.isApproved === 1
                    ? 'orange'
                    : post.isApproved === 2
                    ? 'green'
                    : 'red'
                "
              >
                {{
                  post.isApproved === 1
                    ? "Chưa duyệt"
                    : post.isApproved === 2
                    ? "Chấp nhận"
                    : "Từ chối"
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
                title="Thông báo gia hạn"
                ok-text="Thanh toán"
                @ok="redirectPayment"
                cancel-text="Quay lại"
              >
                <div style="display: flex">
                  <div class="modal-icon-alert">
                    <font-awesome-icon
                      icon="fa-solid fa-money-check-dollar"
                      style="color: darkorange; font-size: 50px"
                    />
                  </div>
                  <div class="modal-content-alert">
                    <a-select style="width: 80%" v-model="paymentMoney">
                      <a-select-option :value="1"> 1 tuần </a-select-option>
                      <a-select-option :value="2"> 1 tháng </a-select-option>
                      <a-select-option :value="3"> 2 tháng </a-select-option>
                    </a-select>
                    <div style="margin-top: 10px">
                      Số tiền cần thanh toán:
                      <span>{{ countPayment(paymentMoney) }}</span>
                    </div>
                  </div>
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
                  id="edit-post-btn"
                  type="primary"
                  :disabled="post.isApproved == 1 ? true : false"
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
import FilterPost from "../filter/FilterPost.vue";
export default {
  components: {
    FilterPost,
  },
  data() {
    return {
      articleArray: [],
      stateFilter: "",
      paymentMoney: 1,
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
    countPayment(time) {
      return time === 1 ? "1000000" : time === 2 ? "2000000" : "3000000";
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
    handleFilter(event) {
      this.stateFilter = event.key;
      this.showModal(event.key);
    },
    alertPurchase(event) {
      let value = event.target.getAttribute("value");
      if (value === "false") {
        this.showModal("purchase");
      }
    },
    redirectPayment() {
      window.location.href = "/ho-so?type=payment";
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

.action-button {
  border: 1px solid #ccc;
  height: 30px;
  padding: 0 10px;
  border-radius: 4px;
  font-family: Calibri;
  display: flex;
  width: 100px;
  align-items: center;
}
.action-button:hover {
  cursor: pointer;
}

#edit-post-btn {
  margin-left: 20px;
}
::v-deep
  .ant-dropdown-button.ant-btn-group
  > .ant-btn:last-child:not(:first-child) {
  padding-bottom: 5px;
}
.modal-icon-alert {
  flex: 1;
  padding: 5px 30px;
}
.modal-content-alert {
  flex: 7;
  color: black;
}
@media screen and (max-width: 1024px) {
  #edit-post-btn {
    margin-left: 0;
  }
}
</style>
