<template>
  <div>
    <div class="sales-boxes">
      <div class="recent-sales box">
        <div class="title">
          <a-input
            placeholder="Thêm loại nhà trọ"
            style="width: 30%; margin-right: 10px"
            v-model="type"
          />
          <a-button type="primary" @click="insertTypeMotel()">Thêm</a-button>
        </div>
        <div class="sales-details">
          <table class="table">
            <thead>
              <tr>
                <th><a-checkbox></a-checkbox></th>
                <th>Loại nhà cho thuê</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="type in typeMotels" :key="type._id">
                <td><a-checkbox></a-checkbox></td>
                <td>{{ type.type }}</td>
                <td class="action-approve">
                  <a-button
                    type="danger"
                    class="button-reject"
                    @click.prevent="deleteTypeMotel(type._id)"
                    >Xóa</a-button
                  >
                  <slot></slot>
                  <a-button
                    type="primary"
                    @click="showModalEdit(type._id, type.type)"
                    >Sửa</a-button
                  >
                  <a-modal
                    title="Title"
                    :visible="visible"
                    @ok="editTypeMotel(type._id)"
                    @cancel="visible = false"
                  >
                    <p>
                      <a-input
                        placeholder="Sửa"
                        v-model="inputType['input_' + typeID]"
                      />
                    </p>
                  </a-modal>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="pagination"></div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
import { RepositoryFactory } from "../../repository/factory";
export default {
  data() {
    return {
      typeMotels: [],
      visible: false,
      typeID: null,
      type: "",
      long: "",
      inputType: {},
    };
  },
  created() {
    this.getTypeMotel();
  },
  
 
  methods: {
    async deleteTypeMotel(id) {
      const data = await RepositoryFactory.get("type").deleteType(id);
      console.log(data);
      this.typeMotels = this.typeMotels.filter((element) => element._id !== id);
    },
    async insertTypeMotel() {
      const { data } = await RepositoryFactory.get("type").insertType(
        this.type
      );
      console.log(data);
      this.typeMotels.push({
        type: this.type,
        _id: data.data._id,
      });
      this.type = "";
    },
    async getTypeMotel() {
      const { data } = await RepositoryFactory.get("type").getType();
      console.log(data);
      this.typeMotels = data;
      this.inputType = this.typeMotels.reduce(
        (a, v) => ({ ...a, ["input_" + v._id]: "" }),
        {}
      );
    },
    showModalEdit(id , name ) {
      this.visible = true;
      this.typeID = id;
     this.inputType["input_" + this.typeID] = name ;  
    },
    async editTypeMotel() {
      let inputType = this.inputType["input_" + this.typeID];
      await RepositoryFactory.get("type").editType(this.typeID, inputType);
      this.typeMotels.forEach((element) => {
        if (element._id === this.typeID) {
          element.type = inputType;
        }
      });
      this.visible = false;
    },
  },
};
</script>
