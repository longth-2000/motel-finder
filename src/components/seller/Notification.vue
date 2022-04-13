<template>
  <div>
    <div id="title-component-profile">
      <span>THÔNG BÁO</span>
    </div>
    <div id="content">
      <div id="type">
        <div
          class="state-notification"
          id="read"
          @click="isRead = true"
          :class="{ stateDisplay: isRead }"
        >
          Thông báo đã đọc
        </div>
        <div
          class="state-notification"
          id="unread"
          @click="isRead = false"
          :class="{ stateDisplay: !isRead }"
        >
          Thông báo chưa đọc
        </div>
      </div>
      <div id="action">
        <div id="delete" class="action-handle"><span>Xóa</span></div>
        <div id="mark" class="action-handle"><span>Đánh dấu đã đọc</span></div>
      </div>
      <div id="notification">
        <div v-if="isRead">
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
            <div id="date">24/2/2020</div>
          </div>
        </div>
        <div v-else>
          <div
            class="notify-content"
            v-for="(notify, index) in [1, 2, 3, 4, 5]"
            :key="index"
          >
            <div id="box">
              <a-checkbox></a-checkbox>
            </div>
            <div id="text">
              <span>dmm dmmm dmmm dmmm dmmm</span>
            </div>
            <div id="date">24/2/2020</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isRead: true,
    };
  },
};
</script>
<style scoped>
* {
  font-family: Tahoma;
}
#type {
  background: #d4ebfd;
  width: 100%;
  height: 50px;
  display: flex;
}
#action {
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
}
.action-handle {
  line-height: 30px;
  height: 30px;
  width: 150px;
  text-align: center;
  background: #e8e8e8;
  margin: 10px;
  font-size: 12px;
  border-radius: 5px;
}
.stateDisplay {
  background: #e8e8e8 !important;
}
.action-handle:hover {
  cursor: pointer;
}
.state-notification {
  background: #fff;
  text-align: center;
  line-height: 40px;
  font-weight: bold;
  height: 40px;
  padding: 0 15px;
  font-size: 12px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  margin: 10px;
}
.state-notification:hover {
  cursor: pointer;
  background: #e8e8e8;
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
  flex: 1;
}
#text {
  flex: 8;
  margin-left: -50px;
}
#date {
  flex: 1;
}
</style>
