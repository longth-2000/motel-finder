<template>
  <div class="report-container">
    <div class="report-title">Báo cáo tin rao không đúng sự thật</div>
    <hr />
    <div class="report-option">
      <div v-for="(option, index) in optionReports" :key="index" class="items">
        <a-checkbox @change="(checked) => handleCheck(option, checked)">
          {{ option }}
        </a-checkbox>
      </div>
    </div>

    <div class="report-extra">
      <div class="title">Phản hồi khác</div>
      <div class="content">
        <a-textarea
          v-model="moreDetail"
          placeholder="Nhập nội dung"
          :auto-size="{ minRows: 3, maxRows: 5 }"
        />
      </div>
    </div>
    <div class="report-button">
      <a-button type="primary" style="width: 100%" @click="handleReport()"
        >Gửi
      </a-button>
    </div>
  </div>
</template>
<script>
import { RepositoryFactory } from "../../repository/factory";

export default {
  props: ["reportID"],
  data() {
    return {
      optionReports: [
        "Địa chỉ không đúng",
        "Ảnh không đúng",
        "Tin không có thật",
        "Không liên lạc được",
        "Đã bán",
        "Giá cao hơn tin đăng",
        "Sai thông tin cơ bản",
      ],
      detail: [],
      moreDetail: "",
    };
  },
  methods: {
    handleCheck(option, checked) {
      const checkedF = checked.target.checked;
      if (checkedF) this.detail.push(option);
      else this.detail = this.detail.filter((element) => element !== option);
      console.log(this.detail);
    },
    async handleReport() {
      const { data } = RepositoryFactory.get("article").report(
        this.reportID,
        this.detail,
        this.moreDetail
      );
      console.log(data);
    },
  },
};
</script>
<style>
.report-title {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
}
.report-option {
  margin-bottom: 20px;
}
.report-option .items {
  margin-bottom: 10px;
  color: black;
}
.report-extra {
  margin-bottom: 20px;
}
.report-extra .title {
  margin-bottom: 10px;
}
</style>
