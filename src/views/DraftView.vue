<template>
  <div>
    <a-table :columns="columns" :data-source="data">
      <span slot="tags" slot-scope="tags">
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="
            theme === 1 ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'
          "
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
      <span slot="action">
        <a-button
          type="danger"
         
        >
          Sentence
        </a-button>
      </span>
    </a-table>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
const columns = [
  {
    title: "Phrase",
    dataIndex: "phrase",
    key: "phrase",
  },
  {
    title: "Meaning",
    dataIndex: "meaning",
    key: "meaning",
  },
  {
    title: "Sentence",
    dataIndex: "sentence",
    key: "sentence",
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" },
  },
];

const data = [
  {
    key: "1",
    phrase: "To start with",
    meaning: "Bắt đầu với",
    sentence: "",
    theme: 1,
    tags: ["Giới thiệu luận điểm"],
  },
  {
    key: "2",
    phrase: "First of all",
    meaning: "Trước hết",
    sentence: "",
    theme: 1,
    tags: ["Giới thiệu luận điểm"],
  },
  {
    key: "3",
    phrase: "It is often said that…/Many people claim that…",
    meaning: "Mọi người thường cho rằng…/ Nhiều người cho rằng…",
    sentence: "",
    theme: 1,
    tags: ["Giới thiệu luận điểm"],
  },
  {
    key: "4",
    phrase: " In conclusion",
    meaning: "Kết luận lại",
    sentence: "",
    theme: 2,
    tags: ["Kết luận"],
  },
  {
    key: "5",
    phrase: "For instance …. / For example…/such as",
    meaning: "ví dụ…./ ví dụ…./ như là",
    sentence: "",
    theme: 3,
    tags: ["Đưa ví dụ"],
  },
  {
    key: "6",
    phrase: "One clear example is...",
    meaning: "Một ví dụ rõ ràng là",
    sentence: "",
    theme: 3,
    tags: ["Đưa ví dụ"],
  },
  {
    key: "8",
    phrase: "In addition",
    meaning: "Ngoài ra",
    sentence: "",
    theme: 4,
    tags: ["Thêm thông tin"],
  },
  {
    key: "9",
    phrase: "Furthermore",
    meaning: "Hơn nữa",
    sentence: "",
    theme: 4,
    tags: ["Thêm thông tin"],
  },
  {
    key: "10",
    phrase: "As a result",
    meaning: "Kết quả là",
    sentence: "Marina studied very hard. As a result, she got the maximum test score in the last exam.",
    theme: 5,
    tags: ["Kết quả"],
  },
  {
    key: "11",
    phrase: "For this reason",
    meaning: "Vì lí do này",
    sentence: "",
    theme: 5,
    tags: ["Kết quả"],
  },
  {
    key: "12",
    phrase: "Despite the fact that subject + verb,…	",
    meaning: "Mặc dù thực tế là... + Chủ từ + Động từ",
    sentence: "Despite the fact that all of America’s effort to create an equal society for everyone, there are a huge amount of difficulties that cannot be easy to overcome. ",
    theme: 6,
    tags: ["Tương phản"],
  },
  {
    key: "13",
    phrase: "On the contrary",
    meaning: "Ngược lại",
    sentence: "He believes that contestant A deserved to win. On the contrary, I think contestant B performed much better, which is causing a minor conflict between us.",
    theme: 6,
    tags: ["Tương phản"],
  },
  {
    key: "15",
    phrase: "On other hand",
    meaning: "Mặt khác",
    sentence: "Nobita is a clumsy boy, but on the other hand, he has a warm heart and always kind to others.",
    theme: 6,
    tags: ["Tương phản"],
  },
  {
    key: "14",
    phrase: "From my point of view,…",
    meaning: "Theo quan điểm của tôi,…",
    sentence: "",
    theme: 7,
    tags: ["Quan điểm"],
  },
  {
    key: "15",
    phrase: "Admittedly",
    meaning: "Phải thừa nhận rằng",
    sentence: "Admittedly, many of our dreams and expectations do not turn out the way we wish.",
    theme: 7,
    tags: ["Quan điểm"],
  },
  {
    key: "16",
    phrase: "Whatever the case",
    meaning: "Trong bất kể trường hợp nào",
    sentence: "The doctor may or may not have been at fault, but whatever the case (maybe) the patient almost died.",
    theme: 7,
    tags: ["Quan điểm"],
  },
  {
    key: "17",
    phrase: "In case + clause",
    meaning: "Trong trường hợp",
    sentence: "In case Susie comes and looks for me, tell her I’ll be right back. Chúng ta thường sử dụng thì hiện tại đơn cho mệnh đề bắt đầu bằng “in case”, thay vì thì tương lai đơn với “will”.",
    theme: 7,
    tags: ["Quan điểm"],
  },
  {
    key: "18",
    phrase: "Similarly",
    meaning: "Tương tự như thế",
    sentence: "",
    theme: 7,
    tags: ["Quan điểm"],
  },
  {
    key: "19",
    phrase: "As said above",
    meaning: "Như đã nói ở trên",
    sentence: "",
    theme: 7,
    tags: ["Quan điểm"],
  },
  {
    key: "20",
    phrase: "For all above reason",
    meaning: "Vì tất cả các lí do trên",
    sentence: "",
    theme: 7,
    tags: ["Quan điểm"],
  },
  {
    key: "21",
    phrase: "It has been estimated that",
    meaning: "Người ta đã ước tính rằng",
    sentence: "It has been estimated that a typical diet in the US contains around 1 gram of inositol per day.",
    theme: 7,
    tags: ["Quan điểm"],
  },
  {
    key: "22",
    phrase: "Besides + N",
    meaning: "Ngoài ra/bên cạnh đó",
    sentence: "",
    theme: 7,
    tags: ["Quan điểm"],
  },
  {
    key: "23",
    phrase: "Contribute to ( Lead to ) + V-ing / N (khuyến khích dùng N)",
    meaning: "Góp phần vào",
    sentence: "",
    theme: 7,
    tags: ["Quan điểm"],
  },
  {
    key: "24",
    phrase: "Even",
    meaning: "Thậm chí",
    sentence: "https://stepup.edu.vn/blog/cau-truc-even/",
    theme: 7,
    tags: ["Quan điểm"],
  },
  {
    key: "26",
    phrase: "have insisted that",
    meaning: "Có thể khẳng định rằng",
    sentence: "But they have insisted that there was no massacre.",
    theme: 7,
    tags: ["Quan điểm"],
  },
   {
    key: "27",
    phrase: "Along with",
    meaning: "Đi cùng với",
    sentence: "Along with the development of the internet, which has changed all of our lives in so many ways, Wikipedia has changed our lives in many many ways.",
    theme: 7,
    tags: ["Quan điểm"],
  },
  {
    key: "28",
    phrase: "Especially",
    meaning: "Đặc biệt",
    sentence: "https://tienganhduhoc.vn/cach-su-dung-va-phan-biet-specially-va-especially-trong-tieng-anh/",
    theme: 7,
    tags: ["Quan điểm"],
  },
];

export default {
  data() {
    return {
      data,
      columns,
      text: "Are you sure to delete this task?",
      user: {
        name: "",
        email: "",
      },
      isSubmit: false
    };
  },
  methods: {
    handleOk(e) {
      console.log(e);
    },
    submit() {
      console.log("njvbsjdbnvs")
      this.isSubmit = true 
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
    },
  },
  validations: {
    user: {
      name: {
        required,
      },
      email: {
        required,
      },
    },
  },
};
</script>
