export default {
    install(Vue) {
        Vue.mixin({
            methods: {
                openNotification(message, description, type) {
                    this.$notification[type]({
                        message: message,
                        description: description,
                        onClick: () => {
                            console.log('Notification Clicked!');
                        },
                        style: {
                            width: '400px'
                        },
                    });
                }
            }
        })
    }
}