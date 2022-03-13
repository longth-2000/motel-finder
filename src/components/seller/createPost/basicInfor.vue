<template>
  <div class="information-post">
    <div class="title">
      <h3>{{ title }}</h3>
    </div>
    <div class="content">
      <div id="type" class="content-items">
        <p class="label">Loại phòng trọ</p>
        <a-select default-value="Phòng trọ" style="width: 100%">
          <a-select-option
            v-for="(type, index) in types"
            :key="index"
            :value="type"
          >
            {{ type }}
          </a-select-option>
        </a-select>
      </div>
      <div id="address" class="content-items">
        <p class="label">Địa chỉ</p>
        <div class="address-box">
          <div class="address">
            <a-select
              class="address-component"
              placeholder="Quận/huyện"
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
          <div class="empty-space"></div>
          <div class="address">
            <a-select class="address-component" placeholder="Phường xã">
              <a-select-option
                v-for="ward in wards"
                :key="ward.code"
                :value="ward.name"
              >
                {{ ward.name }}
              </a-select-option>
            </a-select>
          </div>
          <div class="empty-space"></div>
          <div class="address">
            <a-input class="address-component" placeholder="Địa chỉ cụ thể" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import adddressMixin from "../../../mixins/address";
export default {
  props: ["title"],
  mixins: [adddressMixin],
  data() {
    return {
      types: [
        "Phòng trọ",
        "Nhà nguyên căn",
        "Chung cư nguyên căn",
        "Chung cư mini",
      ],
    };
  },
};
</script>
<style scoped>
.address {
  margin-bottom: 20px;
  width: 100%;
}
.address-component {
    width: 100%;
}

@media only screen and (min-width: 1200px) {
  .address-box {
    display: flex;
  }
  .address {
    width: 32%;
  }
  .empty-space {
    width: 2%;
  }
  .address-component {
    width: 100%;
  }
}
</style>
