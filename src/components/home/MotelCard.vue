<template lang="">
    <div class="motel-card">
        <a-card hoverable style="width: 300px">
            <a :href="'/phong-tro/' + card._id" class="router-link">
              <img
                slot="cover"
                alt="example"
                :src="card.images[0].url"
            />
            </a>
            
            <template slot="actions" class="ant-card-actions">
                <a-tooltip placement="bottom">
                    <template #title>
                       <span>Bấm để lưu tin</span>
                    </template>

                    <font-awesome-icon @click ="storageFavorite(card._id)" icon="fa-solid fa-heart" :class="{ colorHeart: isStorage}"/>
                </a-tooltip>
            </template>
            <a-card-meta :title="card.detailedPost.title" >
            </a-card-meta>
            <div style="display:flex; justify-content; margin: 20px 15px">
                <div class="price extra-infor">
                    <font-awesome-icon class="icon" icon="fa-solid fa-money-bill" />
                    <div>{{card.price.quantity}}</div>
                </div>
                <div class="area extra-infor">
                     <font-awesome-icon class="icon" icon="fa-solid fa-layer-group" />
                    <div>{{card.area}} m2</div>
                </div>
            </div>
            <!-- <div>{{card.address.ward}}, {{card.address.district}}</div> --> 
            <div style="margin-left:15px">{{card._id}}</div>
            <div>
                <div style="margin:15px 80px 15px; width:53%">
                    <a-rate :default-value="card.point" allow-half />
                </div>
            </div> 
        </a-card>
    </div>
</template>
<script>
import { RepositoryFactory } from "../../repository/factory";
export default {
    name: 'MotelCard',
    props: {
        motelType : {
            type: String
        },
        card :{
            type:Object
        },
        isLogged:{
            type:Boolean
        },
        user:{
            type:String
        }
    },
    data() {
        return {
            isStorage:false,
            id:JSON.parse(this.user).id
        }
    },
    computed: {
      
    },
    created() {
       this.isStorage = (this.card.userLiked.includes(this.id)) ? true : false
    },
    methods:{
        async storageFavorite(articleID){
            if(this.isLogged) {
              this.openNotification('Cảnh báo', 'Bạn chưa đăng nhập', 'warning')
            }
            else {
              if(this.isStorage) this.isStorage = false
              else {
                  this.isStorage = true;
                  const { data } = await RepositoryFactory.get('article').increaseLike(articleID);
                  console.log(data) 
                  this.openNotification('Thành công', 'Bạn đã lưu tin này vào danh sách yêu thích', 'success')
              }
            }
        }
    }

}
</script>
<style scoped>
::v-deep .ant-card-meta-title {
  font-weight: bold;
  color: #004e7f;
}
.extra-infor {
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-right: 20px;
}
.icon {
    display: block;
    margin-right: 10px;
    font-size: 18px;
}
.router-link img {
    height: 180px;
    padding:10px
}
.colorHeart {
    color: red;
}
::v-deep .ant-card-body {
  padding: 0
}

::v-deep .ant-card-actions > li > span:hover{
    color:rgba(0, 0, 0, 0.45)
}
::v-deep .ant-card-meta-detail {
    padding:10px 0 0 15px
}
::v-deep .ant-card-actions > li > span {
    font-size: 25px;
}
::v-deep .ant-card-meta {
    margin:10px 0;
}

</style>
