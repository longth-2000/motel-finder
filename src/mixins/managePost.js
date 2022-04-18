import { RepositoryFactory } from "../repository/factory";
var managePostMixin = {
    props: {
        getArticle: {
            type: Function,
        },
    },
    created() {
        this.getMultipleArticle(1)
    },
    data() {
        return {
            current: 1,
            total: 0
        }
    },
    methods: {
        async getMultipleArticle(current) {
            this.current = current
            const { data, total } = await this.getArticle(current, this.state);
            this.articleArray = data
            this.total = total
        },
        handleCheck(id, event) {
            let checked = event.target.checked;
            if (checked) this.postArr.push(id);
            else {
                this.postArr = this.postArr.filter((item) => item !== id);
            }
        },
        async handleCheckAll(event) {
            let state = event.target.checked;
            this.postArr = state ? this.articleArray.map((item) => item._id) : [];
        },
        async confirmDelete(articleID) {
            const { data } = await RepositoryFactory.get("article").deleteArticle(
                articleID
            );
            this.articleArray = this.articleArray.filter(
                (article) => article._id !== articleID
            );
            this.openNotification("Thành công", "Nhà trọ đã được xóa", "success");
            console.log(data);
        },
        formatDate(date) {
            let formatDate = new Date(date);
            return (
                formatDate.getDate() +
                "/" +
                (formatDate.getMonth() + 1) +
                "/" +
                formatDate.getFullYear()
            );
        },
        deleteMultiple() {
            console.log(this.postArr)
            const { data } = RepositoryFactory.get('article').deleteMultiple(this.postArr);
            console.log(data)
            this.articleArray = this.articleArray.filter(item => !this.postArr.some(ele => ele === item._id))
            this.postArr = []
            this.openNotification('Thành công', 'Xóa nhà trọ thành công', 'success')

        }
    },
}
export default managePostMixin