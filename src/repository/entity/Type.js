import BaseRepository from "../BaseRepository";
export default {
    insertType(name) {
        return BaseRepository.post('/user/log-in', { name: name });
    },
    deleteType(id) {
        alert(id)
        return BaseRepository.delete('/user/log-in');
    },
    editType(id) {
        alert(id)
        return BaseRepository.edit('/user/log-in');
    }
}