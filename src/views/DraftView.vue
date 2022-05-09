<template>
    <div>{{userInfor}}<button @click="a()">oke</button></div>
    
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters('user', ['userInfor'])
    },
    created() {
       this.getUserInfor()
    },
    methods: {
      ...mapActions('user', ['getUserInfor']),
      a(){
          console.log(this.getUserInfor())
      }
    }
}
</script>