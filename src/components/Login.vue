<template>
  <div>
    <h3>This is login component {{isLogged}}</h3>
    <button @click="LOG_IN(true)">Login</button>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  methods: {
    ...mapMutations("user", ["LOG_IN"]),
  },
  computed:{
    ...mapGetters("user", ["isLogged"])
  }
};
</script>
