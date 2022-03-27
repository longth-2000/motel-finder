export const mutations = {
    uploadImageMotel: (state, payload) => {
        state.imageMotel = payload
    },
    uploadImageAvatar: (state, payload) => {
        state.imageAvatar = payload
    },
    uploadLinkMotel: (state, payload) => {
        state.linkMotel = payload
    },
    onSpinning(state) {
        state.isSpinning = true
    },
    offSpinning(state) {
        state.isSpinning = false
    }


}