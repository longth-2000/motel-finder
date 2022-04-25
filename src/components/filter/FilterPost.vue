<template>
  <div>
    <a-radio-group v-model="value[type]" @change="handleFilter">
      <a-radio
        :style="radioStyle"
        v-for="(radio, index) in getArrayFilter()"
        :key="index"
        :value="radio.value"
        
      >
        {{ radio.name }}
      </a-radio>
    </a-radio-group>
  </div>
</template>
<script>
const stateExpired = [
  { name: "Hết hạn", value: true },
  { name: "Chưa hết hạn", value: false },
];
const stateMotel = [
  { name: "Chưa cho thuê", value: false },
  { name: "Đã cho thuê", value:true },
];
const stateApproved = [
  { name: "Chấp nhận", value: 'approved' },
  { name: "Từ chối", value: 'rejected' },
  { name: "Đợi duyệt", value: 'waiting' },
];

export default {
  props: {
    type: {
      type: String,
    },
  },

  data() {
    return {
      value:{
        stateExpired: true,
        stateMotel:true,
        stateApproved:"waiting"
      },
      radioStyle: {
        display: "block",
        height: "30px",
        lineHeight: "30px",
      },
    };
  },
  methods: {
    getArrayFilter() {
      return this.type === "stateExpired"
        ? stateExpired
        : this.type === "stateMotel"
        ? stateMotel
        : stateApproved;
    },
    handleFilter() {
      this.$emit('filter', {
        type: this.type,
        value:this.value[this.type]
      })
    }
  },
};
</script>
