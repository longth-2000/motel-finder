<template>
    <form action="https://jsonplaceholder.typicode.com/posts" method="post">
        <input type="text" />
        <button type="submit" @click="submitForm(this)">submit</button>
    </form>
    
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
      },
      submitForm(e){
          alert("mvdsvms")
          console.log(e)
      }
    }
}
</script>