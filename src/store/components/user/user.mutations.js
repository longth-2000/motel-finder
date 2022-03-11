export const mutations = {
    LOG_IN: (state) => {
        state.isLogged = true
    },
    LOG_OUT: (state) => {
        state.isLogged = false
    },
}