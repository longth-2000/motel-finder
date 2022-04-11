<template>
    <div>vsvlsdkl;vksd;lvks;dv</div>
</template>
<script>
import { RepositoryFactory } from "../repository/factory";

export default {
    created() {
        this.displayResult()
    },
    methods:{
        async displayResult() {
           let query = this.$route.query 
           const { data } = await RepositoryFactory.get('article').searchByKeyword(1,2,query)
           console.log(data)
        }
    }
}
</script>
