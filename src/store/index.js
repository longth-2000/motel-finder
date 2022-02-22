import Vuex from 'vuex'
import FilmModule from './components/film/film.module'
const modules = {
    film: FilmModule,
}

const createStore = () => {
    return new Vuex.Store({
        namespaced: true,
        modules,
    })
}

export default createStore