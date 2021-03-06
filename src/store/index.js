import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import UserModule from './components/user/user.module'
import ModalModule from './components/modal/modal.module'
import AppModule from './components/app/app.module'
import ArticleModule from './components/article/article.module'
import Chat from './components/chat/chat.module'
import Notification from './components/notifications/notifications.module'

const modules = {
    user: UserModule,
    modal: ModalModule,
    app: AppModule,
    article: ArticleModule,
    notifications: Notification,
    chat: Chat

}

const store = new Vuex.Store({
    modules
})

export default store