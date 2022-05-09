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
      <div
        id="action"
        style="display: flex; align-items: center"
        v-if="notificationItems.filter((ele) => ele.is_read === isRead).length"
      >
        <div id="box" style="margin-left: 20px">
          <a-checkbox
            @change="(checked) => handleCheckAll(checked)"
            :checked="checkAll"
          ></a-checkbox>
        </div>
        <div id="delete" class="action-handle" @click="handleDeleteNotify()"><span>Xóa</span></div>
        <div id="mark" class="action-handle" @click="markNotify()" v-if="!isRead"><span>Đánh dấu đã đọc</span></div>
      </div>
      <div
        class="manage-content"
        v-if="!notificationItems.filter((ele) => ele.is_read === isRead).length"
      >
        <div>
          <div
            style="display: flex; justify-content: center; margin-top: 100px"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA4BSURBVHgB7Z1Jk9xIFcdfSrV0V29V4wWbiAm3IwgOHgj3TMCFA2HzCfxNxvMN4BOM4YvgE1fwjVvbAcOFINyOGJgBY7rci2tTZpIvJXWra1Gm2iUpJb1fRK3KqlKl/nq5Pb3HoOa8PpZ9AP4EQB4w5t9Tbx2o57hpH4g8OQJgQ/U4lJK/avutwxmHF/cH7ChZiEFNQeF5HnwppHgqpexLGb4vUXwykiCRK4yhwPSdFpqn3mDMe3Zvj311UQZqyutjfiikPFA3ECg7FJ2+hdJbLUDcwpY82pQHyF6lpu9PK7fqPTCUNf03231a/Zn4GWMsEl/43AtvL9U7j5U1HLaghijxfR0IccBRfHgTkQBjIRq/Qa54vCq1xfIApm+fl2ra6bD4W8vKrfo9U1m5tJxpn9K5Wk/6MbKC+BiJD3yPqW6QeKo2/7p2FvD18Wg/EK3XSoDAlfBQhFKAtoKIXFvbex0r0TxYdOdFIlTi07eW5w3PvNb92lnAMfcfKbMHQSQ+tIBSSrjsA64T6knawFQ1CXXnSaZrLOoK9bfk7EntBKisnWp6Q+snYgECUSYyukMRhgpUN4bNkndQxz7gQxGLD0h8LoGWT3eFWKg/dbdfOwEq4fWFvDzrloHWcTQNYDwTF4MU4uPxdN+OQbvlQa/T0n29BaJjg/pT2x/WUoDhaHe59UPxvT2dwEjNis641K8vsZ3qsMVmSgRWbMvyu6t+J+23Pmb6ZzU4ym37TAmQw62d7oIIY8MgWdhK1a8PKGE/baR7MprB+3Fo/QKRGKAk6ympAYDF6bNkOUiUWaWdZVOLAOnTh3LF76bpc35/YMV/SPvttO2G79JTLtFIF0/ujbYH/V4HFtEKxIf6NcGmXt+5bno5TIO5knLhi8zPl5WXhu/L8r2msml/VWZ4neW3U17LaICBrQqTHE7Uib5cgPFYRI2MoYakHZfxLJyiSZcp8bEESo14kqeBW2spwLQeS8DlGiejiVVgHc+4WL4t8aRxFlCQ7XOKxllAhCxg/thWceMsIImvOGyqupEWkCgGm+NQSwES1aFxTTBRHI1tggk3oCaYcB4ahBClUjsBUv+vWtROgMsvGiJcIz5G1AckSiHuJlETTJRKLZtgojpQE0yUCk3DEKVCFpAolVoOQmggUh1oEEKUCjXBRG6QNwzhPDQRTeRGI92xqA9YLcgCEvlhcTBqaQHJCjqCxYGga0KIUqEmmCgVWgsmSoVGwUSpUB+QKBXqAxKlQk0wkR8W1mAhRC8mEBnP4AljcKBu96TOLqnZhxrw0zs9cJHTSQBTjlFFBfzvwwzenQfw3ckEziYcKouFNbgQIApvKuBL9X+fMg/6+j3z5zPHcjfG7ltTmazMx+a2TQE4vz9p5dLY6V7agru73Yvn33x3Bn9+cwJ15aKeJlweSgkHF2H0gSiTOMcaPr5TFvEPf/uvMeayS2C0/K2ODw/u7izdrpMWqps+7cZcfi1QfMlo50AiLIv5jA6f9Nrw2Z1tOPz2FKqETSvQGo3kvhTwVLuyR5YvmdKURFgsLPGYXNf+7M4WfPP9WaWsoA0t7sMjHArr9FYyTKEUN8EkvnJIilAnelYHou17cG+wCX9/+wHqBDbBByi+OL+amGuGieLRVR8JD/Gi9wa9+uWWxNxyD3lCfHYZxYm8iTOb6hYpMonb3eoIUFtvz9wLbCnR9aVMFx9uw75HoNOgrh6kMMv3bMjjc2VFzgp/d3Fyx2PhDXOrdVsMksfrSqas6LgMNttQJdo2AoRIgKtAwZ2oycGZmiCNM5AjZCWvT/KwYCp7FOCEe7Db9cFbMgEZ5vWrVp0zNcWyoaZhTLSUid+fH/kmGc0EjKZKgELovLqUZW29MAgtXyB86KjOXm/uoF3MRqgn2xYH1AVwDrCjLPqt7Y6xrO5UpElqoizfjHPd/BLrB0/osGo5jAK2IMCokDab8434YqO+9GPX3K8MqzvRhLkfJawebLXh9nZXj9xNtEyywoRzgobEuYN1jDl2VxFv+fl+H+qEUaKchsWFEA4Em1fRRgGS9tyhjsfC3EiTAokcMQqwrLmzphHPRDQNaoIdoaknOkXHcoRw2oMGIUtZt/cxsQhL3DcJ4+o29QGLwbaO//1+DHmCqxgbbR+2ui09sZw3RgGS+IrB9lDjBUt5ggJs+xzOJxxu73ZzF6GVfw9Zwfyxrd+zab5XyWGfzPcEBGpVpu0zuLnThTyhJtgpzDWd91QNypvrJUEOZxNPCRByhaZhnMKdQQgXEiZB/tckW01EE/njYj33Ovl7YFtZQBJh/rjU0uDxbrc8uLOXb/8Pqd9VLjUn75kR3/P0BeX7Nzat/Pk+FisBUj/QHX52r2H+gESR0FLcAtT/K4Zwuqt5tU3TMI7Q1MEeNcGO0NSWhgToCE1taUiARKnQIMQRmlrP5I7lCLb1/P1wBC7D1Ew5+hNuW/oTWnnDEMVgI8LjUQAug6FG2q0APlj6E5IFrBjnU7ej5qNDqx8wQEeadovBze309WRaC3YIm9bG+RA9Ospu5E849pQA04vTIMQR6lTPKL9ASpjMhLEsTcM4Qu26OuoP9TbM4eTIH5BYO6iXDvoT7pr9Cckdq2IkY/Yty+q07P1VZU1kKa/LsjDo+FbXh/1PenbxAcECujCpKMy13Lj4gNT8Fgm5Yy1QteDYRLWgUTBRKiRARyB/QKJUwq4OXRNClAijQQhBFAs5IziEjf3LGh8QJ4e7GfzzisYoQAf3uZbo5NTMXNlZ4wPqeH8et/bPKxoLAZICi6Jl0SHKGh8wjveHuf5aPoNbO/nHe8mC8S93Va2QBvMHrR8KxISU2W4Y6m+q7sYzAWcTd7yp4/G+UYA7amEZA9YQ+YGyw0X83RwTUmPKNcz57BK4N8Z/jH2Gu6rvMBzNdObMMGk1Lc6tA+ze+AwzZHqwu9HOvX/W6zqU7jVytbE65fDsvLllzv1KuIn2z/Pt/PNyJ5F6VnFE0zAVI6uRbKnuU0/75xUT78/EZe5hve4zJAFWjOrHB8TRUZwTig1pdEEURpx6Oh5DCC5fkQUkckFe3MWv5cXUkH6th/7skARYMSozAyGvPg3Fp2ZQIFr1UQpUY/IXJMCKIRy/Mn3Z3qH48MSR0QhYLW2o1+LZ53e3aBRcNQKHBSjnnsiLl5H4ZLji4/ns8Bf3tr/CbVYCxP88Uks5mD2H5qCvoi9FVEtoG2rJsoh1/hm3PwBpVzNmudLRpuyyMjJxXWc09TdUD7+bydmzuIxRgCi+kwlXyzg8FGDyB+Z+eP46VFhSNo3rXtNq8902v5u2H6s+gzdcwZhyXy2l+bmLUGZwm5aW25aJJ/meScT4OBeEY8iYHIaV572Ugr9RT155bXj++P5geOU73k+kFPJyiDzP6SRM3TnlXItRzvcubVWV9v4qBSwrv2obwPVUn4bFfuFLXFLDSd7tTgt2Nta/3BW6aoWT0HvdermGGC0gNr0ovpV9D5vzUVq8Ly0+YzolpeV7WTDs1+W8loCxWivfAYfWWyuAcSJakPOBFehtEghzNCjiKkYBtuiEtgIvKOq2aGEpK8YaG2y2wWdUsWnE/nx7GzSrlRWjsrQ/4F5XX9SC3d9kDzitN2zbU2aJW5bPmb4PwPxdzGIfTP8R62ez7WtXJxcv+nEda3/A29voD0g+gcR6obaVKBUSIFEqJECiVEiARKmQAIlSIQESpUICJErF2h9wHEjtjsWdzxVVLXByv+OHy3hNnMe28gc8HXOY8NAfkPS3XlBzEyXASUH+hK5hFOCHKYfzWQAzLvRFJeQYs35mgumTG/0+8vAndBmzAGdci4+a3vzAup2BgFED/QnN/oDR5XREvgjdv26eP6FRgG0aJxcDhtJ1IHZL0Rj/cR/9ASk+YO5gEKHdzeb5E1rHB8TYxDggaWIuizzBC5o2lOW7sd3Rbm9NI6M/IEGsF2pbiVIhARKlQgIkSoUESJQKCZAoFRIgUSokQKJUrOYBMUHNm3fncD4NHRPWRRz1qd/rwKeDnnVoi1zjFTbcP69ojAJE8f31n+9hqoQn5NUYxVKGAjLF0Ythic8Buwxt9vZ0Au9HM/jJD/eMIkyLV5iVZRHftH+eWhabcNlI/7yiMQrwSFk+7ZKFzqiRQ6pcEqLsWqH5VAHMz4fLfSimf7w9gwd3d1M/8mEqYKQtMb8Sd9j6hw1nSxiHD62rp/dtx6X0VjXEKMD/KOuESe7QAgZzHtG2cSTn30tuQwuDS31CrYeiFTQR+ifOxSu0iS1ouf0ioDbG+1PNPAkwX6z6gCg+TPkZiKu5Hj6aKOpnqCUBnkUuZh3qvwD/RPydQFK8v7wxCrDXacFwzC8uSFqrY7SMEpZA2Ax/YpEQsSiXOfybTfTPKxqs4aO0Ag/u7kDbu+yir7NPzhL3bdXx//EPto2fGUT+iXmODVi0Pw7G+zuCmmGsYYx998sf3YC//OsEvj0eg1gWIzsZJDzjiAR94QZbbfji0z39WyaS/onn0yC0ogAL0fpX7dKqvmlc1vPClAs3lDV2MN7fEGoGO5nI36vu3ZNVUfKJ8onnS9Xp+afdDfYYaoSnxPcGiErAAV5BzfCU2XsJRCVQ3dJDqBkebMBzqGHfoo4IDi+gZngDxoZqauW3QLjOs8EmO4KaoYd5x8eyD5vwRyXEAyCcQw3GDwcb7AuoIXqmdTBgQ/UHPweyhC6B64HH6vE30IVfQU1ZmOg6Hsl9Ndp6pKZlDtTQ/6GqhL567KtN+1ANqjebJAEzS+p+uFoZeqlWAN8wAa/8LXiOXSSoMf8Hi0TE3AZ9OWQAAAAASUVORK5CYII="
              alt=""
              style="display: block; width: 200px"
            />
          </div>
        </div>
        <div style="text-align: center">
          <span>Không có tin nào</span>
        </div>
      </div>
      <div id="notification">
        <div v-if="isRead" style="height:700px; overflow-y: scroll">
          <div
            class="notify-content"
            v-for="(noti, index) in notificationItems.filter(
              (ele) => ele.is_read === isRead
            )"
            :key="index"
          >
            <div id="box" >
              <a-checkbox
                @change="(checked) => handleCheck(noti.id, checked)"
                :checked="checkNotify.includes(noti.id)"
              ></a-checkbox>
            </div>
            <div id="text">
              <span>{{ noti.detail }}</span>
            </div>
            <div id="date">{{ formatDate(noti.date) }}</div>
          </div>
        </div>
        <div v-else style="height:700px; overflow-y: scroll">
          <div
            class="notify-content"
            v-for="notify in notificationItems.filter(
              (ele) => ele.is_read === isRead
            )"
            :key="notify.id"
          >
            <div id="box" >
              <a-checkbox @change="(checked) => handleCheck(notify.id, checked)"
                :checked="checkNotify.includes((notify.id))"
                ></a-checkbox>
            </div>
            <div id="text" @click="handleReadNoti(notify.id)">
              <span>{{ notify.detail }}</span>
            </div>
            <div id="date">{{ formatDate(notify.date) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { formatDate } from "./../../helper/utils";
import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "./../../fire";
export default {
  data() {
    return {
      
      checkNotify: [],
      notificationItems: [],
      isRead: true,
      formatDate: formatDate,
      user: {},
      isSelect: [],
      checkAll: false
    };
  },
  methods: {
    handleCheck(notify, event) {
      let checked = event.target.checked;
      if (checked) this.checkNotify.push(notify);
      else {
        this.checkNotify = this.checkNotify.filter((item) => item !== notify);
      }
    },
    markNotify() {
      this.checkNotify.forEach(noti => {
        this.handleReadNoti(noti)
      });
      this.checkNotify = []
    },
    ...mapActions("user", ["getUserInfor"]),
    async userInfo() {
      this.user = await this.getUserInfor();
    },
    async handleReadNoti(id) {
      await updateDoc(doc(collection(db, "notifications"), id), {
        is_read: true,
      });
    },
    async handleDeleteNoti(id) {
      await deleteDoc(doc(collection(db, "notifications"), id))
    },
    handleDeleteNotify() {
      this.checkNotify.forEach(noti => {
        this.handleDeleteNoti(noti)
      });
      this.checkNotify = []
    },
    handleCheckAll() {
      this.checkAll = !this.checkAll
      if(this.checkAll) {
        const deletedItems = this.notificationItems.filter((item) => item.is_read == this.isRead)
        deletedItems.forEach(item => {
          this.checkNotify.push(item.id)
        });
      } else {
        this.checkNotify = []
      }

    }

  },
  computed: {
    ...mapGetters("notifications", ["notifications"]),
    userInfor() {
      return this.checkLogged()
    }
  },
  watch: {
    notifications(val) {
      if (val) {
        this.notificationItems = val.filter((item) => {
          return item.user
            ? item.user_id == this.userInfor.id ||
                item.user._id == this.userInfor.id
            : item.user_id == this.userInfor.id;
        });
      }
    },
    /* 'user._id'(val) {
        this.notificationItems = this.notifications.filter((item) => item.user_id == val)
        console.log('noti', this.notificationItems)
    },*/
    isRead() {
      this.checkNotify = []
      this.checkAll = false
    }
  },
  mounted() {
    this.userInfo();
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
