<template>
    <form action="https://jsonplaceholder.typicode.com/posts" method="post">
        <input type="text" />
        <button type="submit" @click="submitForm">submit</button>
    </form>
    
</template>
<script>
import axios from 'axios'
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
      submitForm(event,name = "long"){
          console.log(event,name)
          console.log(axios)
          event.target.submit()
      }
    }
}
</script>