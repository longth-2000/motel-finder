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
              <tr v-for="type in typeMotels" :key="type.id">
                <td><a-checkbox></a-checkbox></td>
                <td>{{ type.name }}</td>
                <td class="action-approve">
                  <a-button
                    type="danger"
                    class="button-reject"
                    @click.prevent="deleteTypeMotel(type.id)"
                    >Xóa</a-button
                  >
                  <slot></slot>
                  <a-button
                    type="primary"
                    @click="showModalEdit(type.id, type.name)"
                    >Sửa</a-button
                  >
                  <a-modal
                    title="Title"
                    :visible="visible"
                    @ok="editTypeMotel(type.id)"
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
      typeMotels: [
        {
          id: 1,
          name: "nvsnvlsdvnsv",
        },
        {
          id: 2,
          name: "22222",
        },
        {
          id: 3,
          name: "33333",
        },
        {
          id: 4,
          name: "44444",
        },
      ],
      visible: false,
      typeID: null,
      type: "",
    };
  },
  computed: {
    inputType() {
      return this.typeMotels.reduce(
        (a, v) => ({ ...a, ["input_" + v.id]: "" }),
        {}
      );
    },
  },
  methods: {
    async deleteTypeMotel(id) {
      console.log(id)
      const data = await RepositoryFactory.get("type").deleteType(id);
      console.log(data);
      this.typeMotels = this.typeMotels.filter((element) => element.id !== id); 
    },
    async insertTypeMotel() {
      this.typeMotels.push({
        id: 5,
        name: this.type,
      });
    },
    showModalEdit(id, name) {
      this.visible = true;
      this.typeID = id;
      this.inputType["input_" + this.typeID] = name;
    },
    async editTypeMotel(id) {
      /*       const data = await RepositoryFactory.get("type").editType(id);
       */ console.log(id);
      this.visible = false;
    },
  },
};
</script>
