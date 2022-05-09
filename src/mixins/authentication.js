import cookie from "../helper/cookie"
import { subject } from "@casl/ability";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import { mapGetters } from "vuex";
import { notificationState } from "../constants/notificationState";
import { notificationTypes } from "../constants/notificationTypes";
import { formatDate } from "../helper/utils";
import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../fire";
import { RepositoryFactory } from "../repository/factory";
var authenticationMixin = {
    props: ["openNav"],
    data() {
        return {
            isLogin: false,
            checkPermission: false,
            notificationItems: [],
            isCreatePost: false,
            notificationShow: [],
            notificationState: notificationState,
            notificationTypes: notificationTypes,
            formatDate: formatDate,
            visible: false,
            suggest: [],
        };
    },
    components: {
        Login,
        Register,
    },
    created() {
        this.logged();
        this.getSuggestArticle();
    },
    computed: {
        setCheckPermisson() {
            return this.$can("create", subject("User", this.userInfor));
        },
        ...mapGetters("modal", ["isVisible"]),
        ...mapGetters("notifications", ["notifications"]),
        userInfor() {
            return this.checkLogged();
        },
    },
    watch: {
        notifications(val) {
            if (val) {
                this.notificationItems = val.filter((item) => {
                    let checkRead = item.is_read == false;
                    return item.user ?
                        checkRead &&
                        (item.user_id == this.userInfor.id ||
                            item.user._id == this.userInfor.id) :
                        checkRead && item.user_id == this.userInfor.id;
                });
                console.log(this.notificationItems);
                if (this.notificationItems.length > 3) {
                    this.notificationShow = this.notificationItems.slice(0, 3);
                } else {
                    this.notificationShow = this.notificationItems;
                }
            }
        },

        /* "user._id"(val) {
          this.notificationItems = this.notifications.filter(
            (item) => item.is_read == false && item.user_id == val
          );
          console.log(this.notificationItems)
          if (this.notificationItems.length > 3) {
            this.notificationShow = this.notificationItems.slice(0, 3);
          } else {
            this.notificationShow = this.notificationItems;
          }
        },  */
    },
    methods: {
        logged() {
            this.isLogin = this.checkLogged();
        },
        isLogout() {
            cookie.deleteCookie('accessToken');
            window.location.href = "/"
        },
        createPost() {
            this.$router.push({ path: '/dang-tin' });
            this.closeNav()
        },

        async handleReadNoti(id) {
            await updateDoc(doc(collection(db, "notifications"), id), {
                is_read: true,
            });
        },
        async handleDeleteNoti(id) {
            await deleteDoc(doc(collection(db, "notifications"), id));
        },
        async getSuggestArticle() {
            const { data } = await RepositoryFactory.get("user").getFilter();
            this.suggest = data;
        },
        insertQuery(queries) {
            console.log("query", queries);
            var queryString = ''
            for (const query in queries) {
                queryString += `&${query}=${queries[query]}`
            }
            window.location.href = "/tim-kiem?handle=search&status=recommend" + queryString
        },
    },
}
export default authenticationMixin