<template>
  <div class="button">
    <a-button type="danger" @click="handlePost()"> {{title}} </a-button>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  props:["handlePost", "title"],
  computed:{
    ...mapGetters('app', ['imageMotel'])
  },
  methods:{
    ...mapMutations('app', ['uploadImageMotel', 'uploadLinkMotel']),
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
