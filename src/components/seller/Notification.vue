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
        <div id="delete" class="action-handle" @click="deleteNotify()"><span>Xóa</span></div>
        <div id="mark" class="action-handle" @click="markNotify()"><span>Đánh dấu đã đọc</span></div>
      </div>
      <div id="notification">
        <div v-if="isRead">
          <div
            class="notify-content"
            v-for="(notify) in read.filter(ele => ele.unRead)"
            :key="notify.id"
          >
            <div id="box">
              <a-checkbox
                @change="(checked) => handleCheck(notify.id, checked)"
              ></a-checkbox>
            </div>
            <div id="text">
              <span>{{ notify.content }}</span>
            </div>
            <div id="date">24/2/2020</div>
          </div>
        </div>
        <div v-else>
          <div
            class="notify-content"
            v-for="(notify) in read.filter(ele => !ele.unRead)"
            :key="notify.id"
          >
            <div id="box">
              <a-checkbox></a-checkbox>
            </div>
            <div id="text">
              <span>{{notify.content}}</span>
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
      read: [
        { id: 1, content: "1------", unRead: true },
        { id: 2, content: "2------", unRead: true },
        { id: 3, content: "3------", unRead: true },
        { id: 4, content: "4------", unRead: true },
        { id: 5, content: "5------", unRead: true },
        { id: 6, content: "6------", unRead: true },
      ],
      checkNotify: [],
    };
  },
  methods: {
    handleCheck(notify, event) {
      let checked = event.target.checked;
      if (checked) this.checkNotify.push(notify);
      else {
        this.checkNotify = this.checkNotify.filter((item) => item !== notify);
      }
      console.log(this.checkNotify)
    },
    markNotify() {
      this.read.forEach(notify => {
        let checkNotify = this.checkNotify.some(element => element === notify.id)
        if(checkNotify) notify.unRead = false
      })
      console.log(this.read)
    }
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
  float: right;
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
