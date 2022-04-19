import { actions } from './chat.actions'
import { getters } from './chat.getters'
import { mutations } from './chat.mutations'
import { state } from './chat.state'

export default {
    namespaced: true,
    actions,
    mutations,
    getters,
    state,
}