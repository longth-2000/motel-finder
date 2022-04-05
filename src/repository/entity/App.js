import BaseRepository from "../BaseRepository";
export default {
    uploadImage(image) {
        return BaseRepository.post('/file/upload', image);
    },
    deleteImage(public_id) {
        return BaseRepository.post('/file/destroy', { public_id });
    }
}