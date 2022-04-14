<template>
  <a-carousel arrows dots-class="slick-dots slick-thumb">
    <a slot="customPaging" slot-scope="props">
      <img :src="getImgUrl(props.i)" />
    </a>
    <div v-for="(item,index) in images.length" :key="index">
      <img :src="getImgUrl(index)" />
    </div>
  </a-carousel>
</template>
<script>

export default {
  data() {
    return {
    };
  },
  props:{
    images:{
      type:Array
    }
  },
  methods: {
    getImgUrl(i) {
      return `${this.images[i].url}`;
    },
  },
};
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-dots {
  height: auto;
}
.ant-carousel >>> .slick-slide img {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 100%;
}
.ant-carousel >>> .slick-thumb {
  bottom: -45px;
}
.ant-carousel >>> .slick-thumb li {
  width: 60px;
  height: 45px;
}
.ant-carousel >>> .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}
.ant-carousel >>> .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
</style>