import { actions } from './notifications.actions'
import { getters } from './notifications.getters'
import { mutations } from './notifications.mutations'
import { state } from './notifications.state'

export default {
    namespaced: true,
    actions,
    mutations,
    getters,
    state,
}