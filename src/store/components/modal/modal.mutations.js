export const mutations = {
    showModal: (state, type) => {
        state.isVisible[type] = true
    },
    closeModal: (state, type) => {
        state.isVisible[type] = false
    },
}