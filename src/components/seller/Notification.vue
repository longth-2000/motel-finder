<template>
  <div>
    <div id="title-component-profile">
      <span>THÔNG BÁO</span>
    </div>
    <div id="content">
      <div id="type">
        <div class="state-notification" id="read">Thông báo đã đọc</div>
        <div class="state-notification" id="unread">Thông báo chưa đọc</div>
      </div>
      <div id="notification">
        <div
          class="notify-content"
          v-for="(notify, index) in [1, 2, 3, 4, 5]"
          :key="index"
        >
          <div id="box">
            <a-checkbox></a-checkbox>
          </div>
          <div id="text">
            <span
              >Tham gia EC #112 để biết cách “giữ chân khách hàng” hiệu
              quả</span
            >
          </div>
          <div id="date">
              24/2/2020
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

#type {
  background: #d4ebfd;
  width: 100%;
  height: 50px;
  display: flex;
}
.state-notification {
  background: #fff;
  text-align: center;
  line-height: 40px;
  font-family: Tahoma;
  font-weight: bold;
  height: 40px;
  padding: 0 15px;
  font-size: 12px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  margin: 10px;
}
.state-notification:hover{
    cursor: pointer;
}
.notify-content {
  font-family: Tahoma;
  font-size: 12px;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
  display: flex;
  padding-left: 20px;
}
#box {
  flex:1
}
#text{
  flex:8;
  margin-left: -50px;
}
#date {
  flex:1
}
</style>
