<template>
  <div class="button">
    <a-button type="danger" @click="createPost()"> Đăng bài </a-button>
  </div>
</template>
<script>
export default {
  props:["createPost"]
}
</script>
<style scoped>
.button {
  width: 90%;
  margin: 0px auto;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
