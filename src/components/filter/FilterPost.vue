<template>
  <div>
    <a-radio-group v-model="value">
      <a-radio
        :style="radioStyle"
        v-for="(radio, index) in getArrayFilter()"
        :key="index"
        :value="radio.id"
      >
        {{ radio.name }}
      </a-radio>
    </a-radio-group>
  </div>
</template>
<script>
const stateExpired = [
  { name: "Hết hạn", id: 1 },
  { name: "Chưa hết hạn", id: 2 },
];
const stateMotel = [
  { name: "Chưa cho thuê", id: 1 },
  { name: "Đã cho thuê", id: 2 },
];
const stateApproved = [
  { name: "Chấp nhận", id: 1 },
  { name: "Từ chối", id: 2 },
  { name: "Đợi duyệt", id: 3 },
];

export default {
  props: {
    type: {
      type: String,
    },
  },

  data() {
    return {
      value: 1,
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
  },
};
</script>
