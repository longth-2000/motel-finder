<template>
  <div>
    <div class="change-title">{{ title }}</div>
    <div class="change-content">
      <table class="table table-borderless">
        <tbody>
          <tr>
            <td class="label">Họ và tên</td>
            <td class="form">
              <a-input />
            </td>
          </tr>
          <tr>
            <td class="label">Ngày sinh</td>
            <td class="form">
              <a-date-picker />
            </td>
          </tr>
          <tr>
            <td class="label">Giới tính</td>
            <td class="form">
              <a-radio-group :options="plainOptions" />
            </td>
          </tr>
          <tr>
            <td class="label">Địa chỉ</td>
            <td class="form">
              <div style="display: flex; padding-right: 20px">
                <div>
                  <a-select
                    class="address"
                    placeholder="Quận/huyện"
                    style="width: 200px"
                    @change="getWard"
                  >
                    <a-select-option
                      v-for="district in districts"
                      :key="district.code"
                      :value="district.code"
                    >
                      {{ district.name }}
                    </a-select-option>
                  </a-select>
                </div>
                <div>
                  <a-select
                    class="address"
                    placeholder="Phường xã"
                    style="width: 200px"
                  >
                    <a-select-option
                      v-for="ward in wards"
                      :key="ward.code"
                      :value="ward.name"
                    >
                      {{ ward.name }}
                    </a-select-option>
                  </a-select>
                </div>
                <div>
                  <a-input class="address" placeholder="Địa chỉ" />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { RepositoryFactory } from "../../../repository/factory";
export default {
  props: ["title"],
  data() {
    return {
      plainOptions: ["Nam", "Nữ"],
      districts: [],
      wards: {},
    };
  },
  created() {
    this.fetchDistrict();
  },
  methods: {
    async fetchDistrict() {
      const { data } = await RepositoryFactory.get("address").getDistrict();
      this.districts = data.districts;
    },
    async getWard(districtID) {
      const { data } = await RepositoryFactory.get("address").getWard(
        districtID
      );
      this.wards = data.wards;
      console.log(data);
    },
  },
};
</script>
<style scoped>
.change-title {
  width: 100%;
  padding: 5px 10px;
  background: #d4ebfd;
  border-bottom: 2px solid #055699;
  font-family: Tahoma;
  font-size: 12px;
  font-weight: bold;
  color: #055699;
}
.table {
  margin: 20px 20px;
}
.table .form input {
  width: 300px;
}
.table .label {
  width: 150px;
  font-size: 12px;
  font-family: Tahoma;
}
.address {
  margin-right: 20px;
}
</style>
