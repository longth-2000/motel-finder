<template>
  <div style="max-height: 500px; overflow: auto">
      <Chat v-if="visible"
        :participants="participants"
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
        @onClose="onClose"/>
   </div>
</template>
<script>
import {Chat} from 'vue-quick-chat';
import 'vue-quick-chat/dist/vue-quick-chat.css';
import { mapGetters } from 'vuex'
import { collection, addDoc } from "firebase/firestore"
import {db} from './../../fire'
export default {
    props: ['role', 'chatTitle', 'owner'],
    components: {
        Chat
    },
    computed:{
        ...mapGetters('user', ['userInfor']),
        ...mapGetters("chat", ['chat']),

        setMyself() {
            return {
                // name:this.userInfor.name,
                id:2,
                // profilePicture:this.userInfor.avatar.url
            }
        } 
    },
    
    data() {
        return {
            conversations: [],
            chatItems: [],
            visible: true,
            participants: [
                {
                    name: this.role == 'owner' ? 'Admin': '',
                    id: 1,
                    profilePicture: 'https://file4.batdongsan.com.vn/images/default-user-avatar-blue.jpg'
                }
            ],
            myself: {
            },
            messages: [
                // {
                //     content: 'received messages',
                //     myself: false,
                //     participantId: 1,
                //     timestamp: {year: 2019, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123},
                //     type: 'text'
                // },
                // {
                //     content: 'received messages',
                //     myself: true,
                //     participantId: 1,
                //     timestamp: new Date().now,
                //     type: 'text'
                // },
                // {
                //     content: 'received messages',
                //     myself: true,
                //     participantId: 1,
                //     timestamp: {year: 2019, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123},
                //     type: 'text'
                // },
            ],
            placeholder: 'send your message',
            colors: {
                header: {
                    bg: '#d30303',
                    text: '#fff'
                },
                message: {
                    myself: {
                        bg: '#fff',
                        text: '#bdb8b8'
                    },
                    others: {
                        bg: '#fb4141',
                        text: '#fff'
                    },
                    messagesDisplay: {
                        bg: '#f7f3f3'
                    }
                },
                submitIcon: '#b91010',
                submitImageIcon: '#b91010',
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
            toLoad: [
            ],
            scrollBottom: {
                messageSent: true,
                messageReceived: false
            },
            displayHeader:true,
            profilePictureConfig: {
                others: true,
                // myself: true,
                styles: {
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%'
                }
            },
            timestampConfig: {   
                format: 'HH:mm',
                relative: false
            },
            // there are other options, you can check them here
            // https://soapbox.github.io/linkifyjs/docs/options.html
            linkOptions: {
                myself: {
                    className: 'myLinkClass',
                    events: {
                        click: function () {
                            alert('Link clicked!');
                        },
                        mouseover: function () {
                            alert('Link hovered!');
                        }
                    },
                    format: function (value, type) {
                        if (type === 'url' && value.length > 50) {
                            value = value.slice(0, 50) + '…';
                        }
                        return value;
                    }
                },
                others: {
                    className: 'othersLinkClass',
                    events: {
                        click: function () {
                            alert('Link clicked!');
                        },
                        mouseover: function () {
                            alert('Link hovered!');
                        }
                    },
                    format: function (value, type) {
                        if (type === 'url' && value.length > 50) {
                            value = value.slice(0, 50) + '…';
                        }
                        return value;
                    }
                }
            }
        }
    },
    methods: {
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
            if(this.role == 'owner') {
                addDoc(collection(db, "conversations"), {
                    owner_id: this.userInfor._id  || '',
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
                message.uploaded = true
            }, 2000)
        },
        onClose() {
            this.$emit('change-display', false) 
            this.visible = false;
            console.log(this.userInfor)
        },
        onImageSelected(files, message){
            let src = 'https://149364066.v2.pressablecdn.com/wp-content/uploads/2017/03/vue.jpg'
            this.messages.push(message);
            /**
             * This timeout simulates a requisition that uploads the image file to the server.
             * It's up to you implement the request and deal with the response in order to
             * update the message status and the message URL
             */
            setTimeout((res) => {
                message.uploaded = true
                message.src = res.src
            }, 3000, {src});
        },
        onImageClicked(message){
            /**
             * This is the callback function that is going to be executed when some image is clicked.
             * You can add your code here to do whatever you need with the image clicked. A common situation is to display the image clicked in full screen.
             */
            console.log('Image clicked', message.src)
        }
    },
    watch: {
        chat(val) {
            this.messages = []
            if(this.role == 'owner') {
            console.log('owner', this.userInfor._id)
            this.chatItems = val.filter((item) => item.owner_id == this.userInfor._id)
            this.chatItems.sort(function(a,b){
                return new Date(a.created_at) - new Date(b.created_at);
            });
            this.chatItems.map((item) => {
                this.messages.push(
                    {
                        content: item.message,
                        myself: item.role == 'owner' ? true : false,
                        participantId: 1,
                        timestamp: new Date(item.created_at),
                        type: 'text'
                    },
                )
            })
            } else {
                const chatInCoversation = val.filter((item) => item.owner_id == this.owner )
                chatInCoversation.sort(function(a,b){
                    return new Date(a.created_at) - new Date(b.created_at);
                });
                chatInCoversation.map((item) => {
                    this.messages.push(
                        {
                            content: item.message,
                            myself: item.role == 'admin' ? true : false,
                            participantId: 1,
                            timestamp: new Date(item.created_at),
                            type: 'text'
                        },
                    )
                })
            }
        },
        conversations(val) {
            console.log('conversations', val)
        },
        owner(val) {
            const chatInCoversation = this.chat.filter((item) => item.owner_id == val )
            chatInCoversation.sort(function(a,b){
                return new Date(a.created_at) - new Date(b.created_at);
            });
            chatInCoversation.map((item) => {
                this.messages.push(
                    {
                        content: item.message,
                        myself: item.role == 'admin' ? true : false,
                        participantId: 1,
                        timestamp: new Date(item.created_at),
                        type: 'text'
                    },
                )
            })
        }
    },
    mounted() {
        this.messages = []
        if(this.role == 'owner') {
            this.chatItems = this.chat.filter((item) => item.owner_id == this.userInfor._id)
            this.chatItems.sort(function(a,b){
                return new Date(a.created_at) - new Date(b.created_at);
            });
            this.chatItems.map((item) => {
                this.messages.push(
                    {
                        content: item.message,
                        myself: item.role == 'owner' ? true : false,
                        participantId: 1,
                        timestamp: new Date(item.created_at),
                        type: 'text'
                    },
                )
            })
        } else {
            console.log('chat amin', this.chat)
            const chatInCoversation = this.chat.filter((item) => item.owner_id == this.owner )
            chatInCoversation.sort(function(a,b){
                return new Date(a.created_at) - new Date(b.created_at);
            });
            chatInCoversation.map((item) => {
                this.messages.push(
                    {
                        content: item.message,
                        myself: item.role == 'admin' ? true : false,
                        participantId: 1,
                        timestamp: new Date(item.created_at),
                        type: 'text'
                    },
                )
            })
            console.log('chat in con', chatInCoversation)
        }
    }
}
</script>
<style scoped>
::v-deep .header-title {
    margin-top: 15px;
}
</style>