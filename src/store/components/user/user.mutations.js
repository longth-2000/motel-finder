export const mutations = {
    LOG_IN: (state) => {
        state.isLogged = true
    },
    LOG_OUT: (state) => {
        state.isLogged = false
    },
    GET_USER: (state, payload) => {
        state.userInfor = JSON.parse(JSON.stringify(payload))
    }
}