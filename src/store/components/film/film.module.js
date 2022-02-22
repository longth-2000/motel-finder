import { actions } from './film.actions'
import { getters } from './film.getters'
import { mutations } from './film.mutations'
import { state } from './film.state'

export default {
    namespaced: true,
    actions,
    mutations,
    getters,
    state,
}