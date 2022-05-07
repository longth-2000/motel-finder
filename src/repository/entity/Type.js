import BaseRepository from "../BaseRepository";
export default {
    insertType(name) {
        return BaseRepository.post('/categories', { type: name });
    },
    deleteType(id) {
        return BaseRepository.delete(`/categories/${id}`);
    },
    editType(id, name) {
        return BaseRepository.put(`/categories/${id}`, {
            type: name
        });
    },
    getType() {
        return BaseRepository.get('/categories');
    }
}