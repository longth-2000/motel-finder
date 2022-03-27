<template>
  <div class="button">
    <a-button type="danger" @click="createPost()"> Đăng bài </a-button>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
import { RepositoryFactory } from "../../../repository/factory";

export default {
  props:["createPost"],
  computed:{
    ...mapGetters('app', ['imageMotel'])
  },
  methods:{
    ...mapMutations('app', ['uploadImageMotel', 'uploadLinkMotel']),
    async createArticle() {
      let formData = new FormData();
      this.imageMotel.forEach(image => {
        formData.append('file', image)
      });
      const { data } = await RepositoryFactory.get('app').uploadImage(formData) 
      console.log(data)
      this.uploadLinkMotel(data)
    }
  }
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
