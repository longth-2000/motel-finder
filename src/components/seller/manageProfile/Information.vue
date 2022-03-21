<template>
  <div>
    <div class="change-title">{{ title }}</div>
    <div class="change-content">
      <table class="table table-borderless">
        <tbody>
          <tr>
            <td class="label">Họ và tên <span class="require-sign">(*)</span></td>
            <td class="form">
              <a-input />
            </td>
          </tr>
          <tr>
            <td class="label">Ngày sinh <span class="require-sign">(*)</span></td>
            <td class="form">
              <a-date-picker />
            </td>
          </tr>
          <tr>
            <td class="label">Giới tính <span class="require-sign">(*)</span></td>
            <td class="form">
              <a-radio-group :options="plainOptions" />
            </td>
          </tr>
          <tr>
            <td class="label">Địa chỉ <span class="require-sign">(*)</span></td>
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
                  <a-input class="address" placeholder="Địa chỉ cụ thể" />
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
import adddressMixin from "../../../mixins/address"
export default {
  props: ["title"],
  mixins:[adddressMixin],
  data() {
    return {
      plainOptions: ["Nam", "Nữ"],
    };
  },
  methods: {
    
  },
};
</script>
<style scoped>
.address {
  margin-right: 20px;
}
</style>
