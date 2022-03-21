<template>
  <div class="information-post">
    <div class="title">
      <h3>{{ title }}</h3>
    </div>
    <div class="content">
      <div id="title-post" class="content-items">
        <p class="label">Tiêu đề <span class="require-sign">(*)</span></p>
        <a-textarea
          placeholder="VD: Cho thuê phòng trọ 50m2 tại Cầu Giấy"
          :auto-size="{ minRows: 3, maxRows: 5 }"
          v-model="value.title"
          :class="{ 'is-invalid-form': isSubmit && validation.title.$error }"
        />
        <div v-if="isSubmit && !validation.title.required" class="condition">
          {{ validation_message.require }}
        </div>
        <div v-if="isSubmit && !validation.title.minLength" class="condition">
          Tối thiểu 30 ký tự
        </div>
        <div v-if="isSubmit && !validation.title.maxLength" class="condition">
          Tối đa 90 kí tự
        </div>
      </div>
      <div id="content-post" class="content-items">
        <p class="label">Nội dung <span class="require-sign">(*)</span></p>
        <a-textarea
          placeholder="Nhập mô tả chung về bất động sản của bạn. Ví dụ: Khu nhà có vị trí thuận lợi, gần công viên, gần trường học ... "
          :auto-size="{ minRows: 8, maxRows: 10 }"
          v-model="value.content"
          :class="{ 'is-invalid-form': isSubmit && validation.content.$error }"
        />
        <div v-if="isSubmit && !validation.content.required" class="condition">
          {{ validation_message.require }}
        </div>
        <div v-if="isSubmit && !validation.content.minLength" class="condition">
          Tối thiểu 30 ký tự
        </div>
        <div v-if="isSubmit && !validation.content.maxLength" class="condition">
          Tối đa 3000 kí tự
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import childrenValidationMixin from "../../../mixins/validation/childrenValidation";

export default {
  mixins: [childrenValidationMixin],
};
</script>
<style scoped></style>
