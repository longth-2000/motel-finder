import BaseRepository from "../BaseRepository";
export default {
    uploadImage(image) {
        return BaseRepository.post('/file/upload', image);
    },
}