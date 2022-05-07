<template>
  <div>
    <div class="overview-boxes">
      <div class="box">
        <div class="right-side">
          <div class="box-topic">Người thuê trọ</div>
          <div class="number">{{userSummary.renters}}</div>
        </div>
        <i class="bx bx-cart-alt cart">
          <font-awesome-icon class="icon-static" icon="fa-solid fa-user" />
        </i>
      </div>
      <div class="box">
        <div class="right-side">
          <div class="box-topic">Người cho thuê</div>
          <div class="number">{{userSummary.owners}}</div>
        </div>
        <i class="bx bxs-cart-add cart two">
          <font-awesome-icon class="icon-static" icon="fa-solid fa-user" />
        </i>
      </div>
      <div class="box">
        <div class="right-side">
          <h3 class="box-topic">Đã phê duyệt</h3>
          <div class="number">{{userSummary.approved}}</div>
        </div>
        <i class="bx bx-cart cart three">
          <font-awesome-icon
            class="icon-static"
            icon="fa-solid fa-user-check"
          />
        </i>
      </div>
      <div class="box">
        <div class="right-side">
          <div class="box-topic">Chưa phê duyệt</div>
          <div class="number">{{userSummary.notApproved}}</div>
        </div>
        <i class="bx bxs-cart-download cart four">
          <font-awesome-icon
            class="icon-static"
            icon="fa-solid fa-user-minus"
          />
        </i>
      </div>
    </div>

    <div class="sales-boxes">
      <div class="recent-sales box">
        <div class="title">Người cho thuê trọ</div>
        <div class="sales-details">
          <table class="table">
            <thead>
              <tr>
                <th><a-checkbox></a-checkbox></th>
                <th>Tên</th>
                <th>Giới tính</th>
                <th>Địa chỉ</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(owner, index) in owners" :key="index">
                <td><a-checkbox></a-checkbox></td>
                <td>{{owner.name}}</td>
                <td><a-tag color="green">{{owner.sex == 1 ? 'Nam': 'Nữ'}}</a-tag></td>
                <td>{{owner.address ? `${owner.address.detail} ${owner.address.ward} ${owner.address.district}` : ''}}</td>
                <td>{{owner.email}}</td>
                <td>{{owner.phoneNumber}}</td>
                <td v-if="owner.state == userState.reject">     
                 <a-tooltip placement="top">
                    <template slot="title">
                      <span>Khôi phục phê duyệt</span>
                    </template>
                    <a-tag
                      color="red"
                      @click="owner.state = userState.waiting"
                    >
                      Từ chối
                    </a-tag>
                  </a-tooltip>
                </td>
                <td v-if="owner.state == userState.agree">     
                  <a-tooltip placement="top">
                    <template slot="title">
                      <span>Khôi phục phê duyệt</span>
                    </template>
                    <a-tag
                      color="green"
                      @click="owner.state = userState.waiting"
                    >
                      Đã duyệt
                    </a-tag>
                  </a-tooltip>
                </td>
                <td v-if="owner.state == userState.waiting" class="action-approve">
                  <a-button type="danger" class="button-reject" @click="handleApprove(owner, {state: 0})">Từ chối</a-button
                  ><a-button type="primary"  @click="handleApprove(owner, {state: 2})">Đồng ý</a-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="pagination">
          <a-pagination v-model="current" :total="userSummary.owners" show-less-items :defaultPageSize="5" />
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { RepositoryFactory } from '../../repository/factory';
import { userState } from './../../constants/userState'
import { collection, addDoc } from "firebase/firestore"
import {db} from './../../fire'
import { notificationTypes } from './../../constants/notificationTypes'

export default {
  data() {
    return {
      current: 1,
      userSummary: {
        renters: 0,
        owners: 0,
        approved: 0,
        notApproved: 0
      },
      owners: [],
      query: {
        page: 1,
        limit: 5
      },
      userState: userState,
      notificationTypes: notificationTypes
    }
  },
  methods:{
    async getSummary() {
      console.log('get summary...')
      const { data } = await RepositoryFactory.get(
        "user"
      ).getSummary();
      this.userSummary = data.data
    },
    async getOwners(query) {
      console.log('get owners...')
      const { data } = await RepositoryFactory.get("user").getOwners(query);
      this.owners = data.data
    },
    async handleApprove(owner, state) {
      try {
        await RepositoryFactory.get('user').updateState(owner._id, state);
        await addDoc(collection(db, "notifications"), {
          user_id: owner._id,
          detail: `Tài khoản của bạn đã ${state.state  == this.userState.agree ? 'được phê duyệt' : 'bị từ chối'}`,
          state: state.state,
          type: notificationTypes.approveFromAdmin,
          date: new Date().toISOString(),
          is_read: false,
          post_id: ''
        });
      } catch(err) {
        console.log('err', err)
      }
      await this.getSummary();
      await this.getOwners(this.query);
    }
  },
  mounted() {
    this.getSummary()
    this.getOwners(this.query)
  },
  watch: {
    current(value) {
      this.query.page = value
      this.getOwners(this.query)
    }
  }
}
</script>
<style scoped>
.icon-static {
  font-size: 30px;
}
.action-approve {
  display: flex;
}

</style>
