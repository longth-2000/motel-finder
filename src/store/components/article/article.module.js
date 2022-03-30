import { actions } from './article.actions'
import { getters } from './article.getters'
import { mutations } from './article.mutations'
import { state } from './article.state'

export default {
    namespaced: true,
    actions,
    mutations,
    getters,
    state,
}