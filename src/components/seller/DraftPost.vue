<template>
  <div style="position: relative">
    <div id="title-component-profile">
      <span>TIN NHÁP</span>
    </div>
    <div style="position: absolute; margin-left: 20px">
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
        <span style="font-size: 25px; font-weight: bold">Tin nháp</span>
      </div>
    </div>
    <div
      id="content"
      style="
        margin: 80px 0 0 0;
        background: white;
        padding: 10px 0;
        border-radius: 5px;
        height: 741px;
      "
    >
      <table class="table" v-if="articleArray.length > 0">
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
            <th>Mã tin</th>
            <th>Tiêu đề</th>
            <th>Ngày đăng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) in this.articleArray" :key="index">
            <td>
              <a-checkbox
                class="check-post"
                @change="(checked) => handleCheck(post._id, checked)"
                :checked="postArr.includes(post._id)"
              ></a-checkbox>
            </td>
            <td>Tin nháp</td>
            <td>
              <span class="title-article">{{
                post.detailedPost.title === ""
                  ? "Chưa có tiêu đề"
                  : post.detailedPost.title
              }}</span>
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
              <a :href="'/dang-tin?id=' + post._id + '&status=draft'">
                <a-button id="edit-post-btn" type="primary"> Sửa </a-button>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="empty-post-notify">
        <slot></slot>
      </div>
      <a-pagination
        v-model="current"
        :total="50"
        @change="getMultipleArticle"
        style="text-align:center; margin-top:50px"
      />
    </div>
  </div>
</template>
<script>
import managePostMixin from "../../mixins/managePost";
export default {
  mixins: [managePostMixin],
  data() {
    return {
      state: "draft",
      articleArray: [],
      postArr: [],
    };
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
tr {
  height: 8px;
}
td {
  line-height: 80px !important;
}

@media screen and (max-width: 1024px) {
  #edit-post-btn {
    margin-left: 0;
  }
}
</style>
