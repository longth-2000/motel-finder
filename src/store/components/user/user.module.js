import { actions } from './user.actions'
import { getters } from './user.getters'
import { mutations } from './user.mutations'
import { state } from './user.state'

export default {
    namespaced: true,
    actions,
    mutations,
    getters,
    state,
}