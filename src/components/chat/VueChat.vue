<template>
  <div style="height: 550px; width: 100%">
    <Chat
      v-if="visible"
      :participants="setPaticipant"
      :myself="setMyself"
      :messages="messages"
      :chat-title="chatTitle"
      :placeholder="placeholder"
      :colors="colors"
      :border-style="borderStyle"
      :hide-close-button="hideCloseButton"
      :close-button-icon-size="closeButtonIconSize"
      :submit-icon-size="submitIconSize"
      :load-more-messages="toLoad.length > 0 ? loadMoreMessages : null"
      :async-mode="asyncMode"
      :scroll-bottom="scrollBottom"
      :display-header="true"
      :send-images="true"
      :profile-picture-config="profilePictureConfig"
      :timestamp-config="timestampConfig"
      :link-options="linkOptions"
      :accept-image-types="'.png, .jpeg'"
      @onImageClicked="onImageClicked"
      @onImageSelected="onImageSelected"
      @onMessageSubmit="onMessageSubmit"
      @onType="onType"
      @onClose="onClose"
    />
  </div>
</template>
<script>
import { Chat } from "vue-quick-chat";
import "vue-quick-chat/dist/vue-quick-chat.css";
import { mapGetters, mapMutations } from "vuex";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./../../fire";
export default {
  props: ["role", "chatTitle", "owner"],
  components: {
    Chat,
  },
  computed: {
    ...mapGetters("user", ["userInfor"]),
    ...mapGetters("chat", ["chat", "conversation"]),

    setMyself() {
      return this.role === "owner"
        ? {
            name: this.userInfor.name,
            id: 2,
            profilePicture: this.userInfor.avatar.url,
          }
        : {
            name: "admin",
            id: 2,
            profilePicture:
              "data:image/jpeg;base64,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",
          };
    },
    setPaticipant() {
      return this.role === "owner"
        ? [
            {
              name: "admin",
              id: 1,
              profilePicture:
                "data:image/jpeg;base64,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",
            },
          ]
        : [
            {
              name: this.conversation.name,
              id: 1,
              profilePicture: this.conversation.avatar,
            },
          ];
    },
  },

  data() {
    return {
      conversations: [],
      chatItems: [],
      visible: true,

      myself: {},
      messages: [],
      placeholder: "send your message",
      colors: {
        header: {
          bg: "#d30303",
          text: "#fff",
        },
        message: {
          myself: {
            bg: "#fff",
            text: "#bdb8b8",
          },
          others: {
            bg: "#fb4141",
            text: "#fff",
          },
          messagesDisplay: {
            bg: "#f7f3f3",
          },
        },
        submitIcon: "#b91010",
        submitImageIcon: "#b91010",
      },
      borderStyle: {
        topLeft: "10px",
        topRight: "10px",
        bottomLeft: "10px",
        bottomRight: "10px",
      },
      hideCloseButton: false,
      submitIconSize: 25,
      closeButtonIconSize: "20px",
      asyncMode: false,
      toLoad: [],
      scrollBottom: {
        messageSent: true,
        messageReceived: false,
      },
      displayHeader: true,
      profilePictureConfig: {
        others: true,
        // myself: true,
        styles: {
          width: "30px",
          height: "30px",
          borderRadius: "50%",
        },
      },
      timestampConfig: {
        format: "HH:mm",
        relative: false,
      },
      // there are other options, you can check them here
      // https://soapbox.github.io/linkifyjs/docs/options.html
      linkOptions: {
        myself: {
          className: "myLinkClass",
          events: {
            click: function () {
              alert("Link clicked!");
            },
            mouseover: function () {
              alert("Link hovered!");
            },
          },
          format: function (value, type) {
            if (type === "url" && value.length > 50) {
              value = value.slice(0, 50) + "…";
            }
            return value;
          },
        },
        others: {
          className: "othersLinkClass",
          events: {
            click: function () {
              alert("Link clicked!");
            },
            mouseover: function () {
              alert("Link hovered!");
            },
          },
          format: function (value, type) {
            if (type === "url" && value.length > 50) {
              value = value.slice(0, 50) + "…";
            }
            return value;
          },
        },
      },
    };
  },
  methods: {
    ...mapMutations("chat", ["setConversation", "openChatFrame"]),
    onType: function () {
      //here you can set any behavior
    },
    loadMoreMessages(resolve) {
      setTimeout(() => {
        resolve(this.toLoad); //We end the loading state and add the messages
        //Make sure the loaded messages are also added to our local messages copy or they will be lost
        this.messages.unshift(...this.toLoad);
        this.toLoad = [];
      }, 1000);
    },
    onMessageSubmit: function (message) {
      /*
       * example simulating an upload callback.
       * It's important to notice that even when your message wasn't send
       * yet to the server you have to add the message into the array
       */
      this.messages.push(message);
      if (this.role == "owner") {
        addDoc(collection(db, "conversations"), {
          owner_id: this.userInfor._id || "",
          message: message.content,
          created_at: Date.now(),
          role: this.role,
        });
      } else {
        addDoc(collection(db, "conversations"), {
          owner_id: this.owner,
          message: message.content,
          created_at: Date.now(),
          role: this.role,
        });
      }

      /*
       * you can update message state after the server response
       */
      // timeout simulating the request
      setTimeout(() => {
        message.uploaded = true;
      }, 2000);
    },
    onClose() {
      this.openChatFrame(false);
      this.visible = false;
      console.log(this.userInfor);
    },
    onImageSelected(files, message) {
      let src =
        "https://149364066.v2.pressablecdn.com/wp-content/uploads/2017/03/vue.jpg";
      this.messages.push(message);
      /**
       * This timeout simulates a requisition that uploads the image file to the server.
       * It's up to you implement the request and deal with the response in order to
       * update the message status and the message URL
       */
      setTimeout(
        (res) => {
          message.uploaded = true;
          message.src = res.src;
        },
        3000,
        { src }
      );
    },
    onImageClicked(message) {
      /**
       * This is the callback function that is going to be executed when some image is clicked.
       * You can add your code here to do whatever you need with the image clicked. A common situation is to display the image clicked in full screen.
       */
      console.log("Image clicked", message.src);
    },
  },
  watch: {
    chat(val) {
      this.messages = [];
      if (this.role == "owner") {
        console.log("owner", this.userInfor._id);
        this.chatItems = val.filter(
          (item) => item.owner_id == this.userInfor._id
        );
        this.chatItems.sort(function (a, b) {
          return new Date(a.created_at) - new Date(b.created_at);
        });
        this.chatItems.map((item) => {
          this.messages.push({
            content: item.message,
            myself: item.role == "owner" ? true : false,
            participantId: 1,
            timestamp: new Date(item.created_at),
            type: "text",
          });
        });
      } else {
        const chatInCoversation = val.filter(
          (item) => item.owner_id == this.owner
        );
        chatInCoversation.sort(function (a, b) {
          return new Date(a.created_at) - new Date(b.created_at);
        });
        chatInCoversation.map((item) => {
          this.messages.push({
            content: item.message,
            myself: item.role == "admin" ? true : false,
            participantId: 1,
            timestamp: new Date(item.created_at),
            type: "text",
          });
        });
      }
    },
    conversations(val) {
      console.log("conversations", val);
    },
    owner(val) {
      const chatInCoversation = this.chat.filter(
        (item) => item.owner_id == val
      );
      chatInCoversation.sort(function (a, b) {
        return new Date(a.created_at) - new Date(b.created_at);
      });
      chatInCoversation.map((item) => {
        this.messages.push({
          content: item.message,
          myself: item.role == "admin" ? true : false,
          participantId: 1,
          timestamp: new Date(item.created_at),
          type: "text",
        });
      });
    },
  },
  mounted() {
    this.messages = [];
    if (this.role == "owner") {
      this.chatItems = this.chat.filter(
        (item) => item.owner_id == this.userInfor._id
      );
      this.chatItems.sort(function (a, b) {
        return new Date(a.created_at) - new Date(b.created_at);
      });
      this.chatItems.map((item) => {
        this.messages.push({
          content: item.message,
          myself: item.role == "owner" ? true : false,
          participantId: 1,
          timestamp: new Date(item.created_at),
          type: "text",
        });
      });
    } else {
      console.log("chat amin", this.chat);
      const chatInCoversation = this.chat.filter(
        (item) => item.owner_id == this.owner
      );
      chatInCoversation.sort(function (a, b) {
        return new Date(a.created_at) - new Date(b.created_at);
      });
      chatInCoversation.map((item) => {
        this.messages.push({
          content: item.message,
          myself: item.role == "admin" ? true : false,
          participantId: 1,
          timestamp: new Date(item.created_at),
          type: "text",
        });
      });
      console.log("chat in con", chatInCoversation);
    }
  },
};
</script>
<style scoped>
::v-deep .header-title {
  margin-top: 15px;
}
</style>
