<template>
  <div>
    <form
      action="https://gorest.co.in/public/v2/users"
      method="post"
      @submit="submitForm"
    >
      <!-- <input type="hidden" name="_token" value="e32802758aaffede801b0c41df39ae3dd9fe7c7165dbc21baef2f3eabbaf8cfe" /> -->
      <div>
        <a-input placeholder="Name" v-model="data.name" />
      </div>
      <div>
        <a-input placeholder="Email" v-model="data.email" />
      </div>
      <div>
        <a-radio-group v-model="data.gender">
          <a-radio :style="radioStyle" value="Male"> Male </a-radio>
          <a-radio :style="radioStyle" value="Female"> Female </a-radio>
        </a-radio-group>
      </div>
      <div>
        <a-button type="primary" html-type="submit"> Primary </a-button>
      </div>
    </form>
  </div>
</template>
<script>
import { RepositoryFactory } from "../../repository/factory";
import axios from 'axios';
 
export default {
  data() {
    return {
      films: [],
      radioStyle: {
        display: "block",
        height: "30px",
        lineHeight: "30px",
      },
      data: {},
    };
  },
  created() {
    console.log(RepositoryFactory);
    this.fetch();
  },
  methods: {
    async fetch() {
      const { data } = await RepositoryFactory.get("films").get();
      this.films = data;
    },
    submitForm() {
      this.data.status = "active";
      axios.post("https://gorest.co.in/public/v2/users", this.data, {
        headers: {
          Authorization: "Bearer e32802758aaffede801b0c41df39ae3dd9fe7c7165dbc21baef2f3eabbaf8cfe",
        },
      })
      .then(res => {
        console.log(res.data)
      }); 
    },
  },
};
</script>
