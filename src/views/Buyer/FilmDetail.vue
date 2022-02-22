<template>
  <div>
    <div v-for="(item, index) in films" :key="index">
      <p>film:</p> {{ item.title }} . {{ item.director }}
    </div>
  </div>
</template>
<script>
import { checkFilmMixin } from "../../mixins/checkFilmMixin";
export default {
   mixins: [checkFilmMixin]
}
</script>
