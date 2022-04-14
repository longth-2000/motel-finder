<template>
  <div class="avatar-upload" style="position: relative">
    <div class="change-title">{{ title }}</div>
    <div class="change-content">
      <a-upload
        name="file"
        action="https://backend-api-production.up.railway.app/fil"
        :auto-upload="false"
        @change="handleChange"
        list-type="picture"
        accept="image/*"
      >
        <a-button class="upload-button fixed-button" :class="{hiddenButton: !disableUpload}">
          <a-icon type="upload" /> Chọn file
        </a-button>
      </a-upload>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      disableUpload: true,
    };
  },
  props: ["title"],
  methods: {
    ...mapMutations("app", ["uploadImageAvatar"]),
    handleChange(infor) {
      const MAX_SIZE = 1024 * 1024 * 5;
      this.disableUpload = infor.fileList.length == 0 ? true : false;
      if(infor.fileList.size > MAX_SIZE) {
        this.openNotification("Ảnh không hợp lệ", "Kích thước ảnh lớn hơn 5MB", "error");
      }
      else this.uploadImageAvatar(infor.file.originFileObj);
    }
  },
};
</script>
<style scoped>
.avatar-upload .change-content {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
 
}
.avatar-upload .upload-button {
  position: absolute;
  top: 70px;
  left: 45%;
} 
::v-deep .ant-upload-list-item {
   width: 300px;
}
.hiddenButton {
  display:none
}

</style>
