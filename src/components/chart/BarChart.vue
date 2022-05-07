<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
    :updated="updated"
  />
</template>

<script>
import { Bar } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: {
    Bar,
  },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
    districts: {
      type: Array,
    },
  },
  data() {
    let chartData = {
      labels: [],
      datasets: [
        {
          label: "Số bài đăng",
          backgroundColor: "#f87979",
          data: [],
        },
      ],
    };
    this.districts.forEach((item) => {
      if (item._id) {
        chartData.labels.push(item._id);
        chartData.datasets[0].data.push(item.count);
      }
    });
    return {
      chartData,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      updated: Date.now(),
    };
  },
};
</script>
