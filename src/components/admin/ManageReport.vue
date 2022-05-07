<template>
  <div>
    <div class="sales-boxes">
      <div class="recent-sales box">
        <div class="title">Quản lí report</div>
        <div class="sales-details">
          <table class="table">
            <thead>
              <tr>
                <th><a-checkbox></a-checkbox></th>
                <th>Số hiệu bài đăng</th>
                <th>Tên người report</th>
                <th>Tiêu chí report</th>
                <th>Nội dung report</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="report in reports" :key="report._id">
                <td><a-checkbox></a-checkbox></td>
                <td>{{ report.postId }}</td>
                <td>{{ report.createBy.userName }}</td>
                <td>
                  <span
                    v-for="(title, index) in report.metadata.detail"
                    :key="index"
                  >
                    {{ title
                    }}<span v-if="index !== report.metadata.detail.length - 1"
                      >,</span
                    >
                  </span>
                </td>
                <td>{{ report.metadata.moreDetail }}</td>
                <td class="action-approve">
                  <a-button
                    type="danger"
                    class="button-reject"
                    @click.prevent="deleteReport(report._id)"
                    >Xóa</a-button
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="pagination"></div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
import { RepositoryFactory } from "../../repository/factory";

export default {
  data() {
    return {
      reports: [],
    };
  },
  created() {
    this.getReports();
  },
  methods: {
    async getReports() {
      const { data } = await RepositoryFactory.get("article").getReport();
      console.log(data);
      this.reports = data;
    },
    async deleteReport(id) {
      const { data } = await RepositoryFactory.get("article").deleteReport(id);
      console.log(data);
      this.reports = this.reports.filter((element) => element._id !== id);
    },
  },
};
</script>
