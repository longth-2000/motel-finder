<template>
  <div class="information-post">
    <div class="title">
      <h3>{{ title }}</h3>
    </div>
    <div class="content">
      <div id="type" class="content-items">
        <p class="label">
          Loại phòng trọ <span class="require-sign">(*)</span>
        </p>
        <a-select
          v-model="value.type"
          placeholder="Chọn loại phòng trọ"
          style="width: 100%"
          :class="{ 'is-invalid-form': isSubmit && validation.type.$error }"
        >
          <a-select-option
            v-for="type in types"
            :key="type._id"
            :value="type._id"
          >
            {{ type.type }}
          </a-select-option>
        </a-select>
        <div v-if="isSubmit && !validation.type.required" class="condition">
          {{ validation_message.require }}
        </div>
      </div>
      <div id="address" class="content-items">
        <p class="label">Địa chỉ <span class="require-sign">(*)</span></p>
        <div class="address-box">
          <div class="address">
            <a-select
              class="address-component"
              placeholder="Quận/huyện"
              v-model="value.address.district"
              :class="{
                'is-invalid-form':
                  isSubmit && validation.address.district.$error,
              }"
            >
              <a-select-option
                v-for="district in districts"
                :key="district.code"
                :value="district.name"
              >
                {{ district.name }}
              </a-select-option>
            </a-select>
            <div
              v-if="isSubmit && !validation.address.district.required"
              class="condition"
            >
              {{ validation_message.require }}
            </div>
          </div>
          <div class="empty-space"></div>
          <div class="address">
            <a-select
              class="address-component"
              placeholder="Phường xã"
              v-model="value.address.ward"
              :class="{
                'is-invalid-form': isSubmit && validation.address.ward.$error,
              }"
            >
              <a-select-option
                v-for="ward in wards"
                :key="ward.code"
                :value="ward.name"
              >
                {{ ward.name }}
              </a-select-option>
            </a-select>
            <div
              v-if="isSubmit && !validation.address.ward.required"
              class="condition"
            >
              {{ validation_message.require }}
            </div>
          </div>
          <div class="empty-space"></div>
          <div class="address">
            <a-input
              class="address-component"
              placeholder="Địa chỉ cụ thể"
              v-model="value.address.detail"
              :class="{
                'is-invalid-form': isSubmit && validation.address.detail.$error,
              }"
            />
            <div
              v-if="isSubmit && !validation.address.detail.required"
              class="condition"
            >
              {{ validation_message.require }}
            </div>
          </div>
        </div>
      </div>
      <div id="duration" class="content-items">
        <p class="label">
          Thời hạn đăng bài <span class="require-sign">(*)</span>
        </p>
        <a-select
          @change="handleExpire"
          style="width: 100%"
          placeholder="Chọn thời gian gia hạn"
        >
          <a-select-option
            v-for="(time, index) in duration"
            :key="index"
            :value="time.id"
          >
            {{ time.name }}
          </a-select-option>
        </a-select>
      </div>
      <div v-if="this.money.isChosen">
        <a-button type="primary" style="margin-top: 20px">
          Số tiền cần thanh toán là {{ this.money.value }} VND
        </a-button>
      </div>
    </div>
  </div>
</template>
<script>
import addressMixin from "../../../mixins/address";
import childrenValidationMixin from "../../../mixins/validation/childrenValidation";
import { RepositoryFactory } from "../../../repository/factory";

export default {
  mixins: [addressMixin, childrenValidationMixin],
  data() {
    return {
      types: [
       
      ],
      duration: [
        { name: "1 tuần", id: 1 },
        { name: "1 tháng ", id: 2 },
        { name: "2 tháng", id: 3 },
      ],
      money: {
        isChosen: false,
        value: "",
      },
    };
  },
  computed: {
    getDistrict() {
      return this.value.address.district;
    },
    getWards() {
      return this.value.address.ward;
    }
    
  },
  created() {
    this.getType()
  },
  watch: {
    getDistrict(newVal, oldVal) {
      if (oldVal !== undefined) {
        this.value.address = {
          district: newVal,
        };
      }
      this.getWard(newVal);
    },
    getWards(newVal, oldVal) {
      if (oldVal !== undefined) {
        this.value.address = {
          district: this.value.address.district,
          ward: newVal,
        };
      }
    }
  },
  methods: {
    handleExpire(time) {
      this.money =
        time === 1
          ? {
              isChosen: false,
              value:0
            }
          : time === 2
          ? {
              isChosen: true,
              value: 1000000,
            }
          : {
              isChosen: true,
              value: 200000,
            };
      this.$emit("timeExpired", {
        time:time,
        value:this.money.value
      });
    },
    async getType() {
     const { data } = await RepositoryFactory.get('type').getType();
     this.types = data
    }
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
