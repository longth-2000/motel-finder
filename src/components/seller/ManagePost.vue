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
          width: 38%;
        "
      >
        <div class="action" id="search">
          <a-input
            placeholder="Tìm kiếm theo tiêu đề"
            v-model="searchTitle"
            @change="searchByTitle"
          >
            <a-tooltip slot="suffix" title="Click để bắt đầu tìm kiếm">
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
          @ok="startFilter"
        >
          <FilterPost :type="this.stateFilter" @filter="handleResultFilter" />
        </a-modal>
        <a-dropdown-button>
          {{ setSortTitle() }}
          <a-menu slot="overlay" @click="handleSort">
            <a-menu-item key="sortByDate/1"> Ngày đăng sớm nhất</a-menu-item>
            <a-menu-item key="sortByDate/-1"> Ngày đăng muộn nhất</a-menu-item>
            <a-menu-item key="sortByTitle/1">
              Tiêu đề ( từ A -> Z )
            </a-menu-item>
            <a-menu-item key="sortByTitle/-1">
              Tiêu đề ( từ Z -> A )
            </a-menu-item>
          </a-menu>
          <a-icon slot="icon" type="sort-descending" />
        </a-dropdown-button>
      </div>
    </div>
    <div></div>
    <div style="position: absolute; margin: -55px 0 20px 0">
      <div v-if="postArr.length > 0">
        <a-popconfirm
          title="Bạn có muốn xóa tất cả các tin này?"
          ok-text="Có"
          cancel-text="Quay lại"
          @confirm="deleteMultiple"
        >
          <a-button style="margin: 10px 0">
            Xóa
            {{
              postArr.length === articleArray.length ? "tất cả" : postArr.length
            }}
            tin đã chọn
          </a-button>
        </a-popconfirm>
      </div>
      <div v-else>
        <span style="font-size: 25px; font-weight: bold">Tin đã đăng</span>
      </div>
    </div>
    <div
      id="content"
      style="
        margin: 20px 0 0 0;
        background: white;
        padding: 10px 0;
        border-radius: 5px;
        height: 730px;
      "
      v-if="articleArray.length > 0"
    >
      <table class="table">
        <thead>
          <tr>
            <th>
              <a-checkbox
                :checked="
                  postArr.length === articleArray.length && postArr.length > 0
                "
                @change="handleCheckAll"
              ></a-checkbox>
            </th>
            <th>Tiêu đề</th>
            <th>Phê duyệt</th>
            <th>Đã cho thuê</th>
            <th>Thời hạn đăng</th>
            <th>Ngày đăng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) in articleArray" :key="index">
            <td>
              <a-checkbox
                class="check-post"
                @change="(checked) => handleCheck(post._id, checked)"
                :checked="postArr.includes(post._id)"
              ></a-checkbox>
            </td>
            <td>
              <span class="title-article">{{ post.detailedPost.title }}</span>
            </td>
            <td>
              <a-tag
                :color="
                  post.isApproved === 1
                    ? 'blue'
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
                v-if="$route.query.isRented === undefined"
                @change="changeStateArticle(post._id)"
                :defaultChecked="post.isRented ? true : false"
              />
              <a-tag v-else :color="$route.query.isRented ? 'green' : 'red'">
                {{
                  $route.query.isRented ? "Đã cho thuê" : "Chưa cho thuê"
                }}</a-tag
              >
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
                @ok="redirectPayment(post._id, countPayment(paymentMoney))"
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
            <td>{{ formatDate(post.createdAt) }}</td>
            <td>
              <a-popconfirm
                title="Bạn có chăc chắn muốn xóa bài đăng này?"
                ok-text="Yes"
                cancel-text="No"
                @confirm="confirmDelete(post._id)"
              >
                <a-button type="danger"> Xóa </a-button>
              </a-popconfirm>
              <a :href="'/dang-tin?id=' + post._id + '&status=posted'">
                <a-button
                  id="edit-post-btn"
                  type="primary"
                  :disabled="post.isApproved === 1 ? false : true"
                >
                  Sửa
                </a-button>
              </a>

              <a-button
                id="edit-post-btn"
                type="primary"
                :disabled="post.isPaid ? true : false"
                @click="redirectPayment(post._id, post.moneyPayment)"
              >
                Thanh toán
              </a-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="empty-post-notify">
      <slot></slot>
    </div>
    <a-pagination
      v-model="current"
      :total="50"
      @change="getMultipleArticle"
      style="float: right; margin-top:-50px"
    />
  </div>
</template>
<script>
import { RepositoryFactory } from "../../repository/factory";
import { mapGetters } from "vuex";
import FilterPost from "../filter/FilterPost.vue";
import managePostMixin from "../../mixins/managePost";
export default {
  components: {
    FilterPost,
  },
  mixins: [managePostMixin],
  data() {
    return {
      stateFilter: "",
      paymentMoney: 1,
      moneyPurchase: 0,
      state: "posted",
      articleArray: [],
      postArr: [],
      resultFilter: {},
      sortTitle: "Sắp xếp",
      searchTitle: "",
    };
  },
  computed: {
    ...mapGetters("modal", ["isVisible"]),
  },
  watch: {
    $route() {
      this.getMultipleArticle(this.current);
    },
  },
  created() {
    console.log(this.$route);
  },

  methods: {
    countPayment(time) {
      return time === 1 ? "1000000" : time === 2 ? "2000000" : "3000000";
    },
    setExpiredState(expiredTime) {
      return new Date(expiredTime).getTime() > Date.now()
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
    handleResultFilter(result) {
      let type =
        result.type === "stateMotel"
          ? "isRented"
          : result.type === "stateApproved"
          ? "isApproved"
          : "isExpired";
      this.resultFilter = {
        type: type,
        value: result.value,
      };
    },
    alertPurchase(event) {
      let value = event.target.getAttribute("value");
      console.log(value);
      if (value == "false") {
        this.showModal("purchase");
      }
    },
    redirectPayment(id, money) {
      localStorage.setItem("article-id", id);
      localStorage.setItem("money-payment", money);
      window.location.href = "/ho-so?type=payment";
    },
    async changeStateArticle(articleID) {
      const { data } = await RepositoryFactory.get(
        "article"
      ).updateStateArticle(articleID);
      console.log(data);
      this.openNotification("Thành công", "Cập nhật thành công", "success");
    },
    startFilter() {
      let queryFilter =
        this.resultFilter.type === "isRented"
          ? {
              isRented: this.resultFilter.value,
            }
          : this.resultFilter.type === "isApproved"
          ? {
              isApproved: this.resultFilter.value,
            }
          : {
              isExpired: this.resultFilter.value,
            };
      this.$router.push({
        path: "/ho-so?type=manage-post",
        query: queryFilter,
      });
      this.closeModal(this.stateFilter);
    },
    handleSort(event) {
      let key = event.key.split("/");
      let title = key[0];
      let index = key[1];
      this.sortTitle = key[2];
      let queryFilter =
        title === "sortByTitle"
          ? {
              sortByTitle: index,
            }
          : {
              sortByDate: index,
            };
      this.$router.push({
        path: "/ho-so?type=manage-post",
        query: queryFilter,
      });
    },
    setSortTitle() {
      let query = this.$route.query;

      if (query.sortByTitle) {
        this.sortTitle =
          query.sortByTitle === "1"
            ? "Tiêu đề (Từ A -> Z)"
            : "Tiêu đề (Từ Z -> A)";
      }
      if (query.sortByDate) {
        this.sortTitle =
          query.sortByDate === "1"
            ? "Ngaỳ đăng sớm nhất"
            : "Ngày đăng muộn nhất";
      }

      return this.sortTitle;
    },
    searchByTitle(value) {
      console.log(value.data);
      this.$router.push({
        path: "/ho-so?type=manage-post",
        query: {
          title: this.searchTitle,
        },
      });
    },
  },
};
</script>
<style scoped>
.manage-content {
  background: red;
}
#filter-post {
  width: 100%;
  height: 50px;
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
.title-article {
  display: -webkit-box;
  max-width: 200px;
  height: 100px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media screen and (max-width: 1214px) {
  #edit-post-btn {
    margin-left: 0;
  }
}
</style>
