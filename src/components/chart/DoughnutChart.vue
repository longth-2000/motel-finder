<template>
  <div>
    <Doughnut
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
import { Doughnut } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  name: "DoughnutChart",
  components: {
    Doughnut,
  },
  props: {
    chartId: {
      type: String,
      default: "doughnut-chart",
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
    prices: {
      type: Array,
    },
    unit: {
      type: Number
    }
  },
  data() {
    console.log("prices", this.prices);
    let chartData = {
      labels: ["< 1 triệu", "1 - 2 triệu", "2 - 3 triệu", "> 3 triệu"],
      datasets: [
        {
          backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
          data: [],
        },
      ],
    };
    chartData.datasets[0].data = this.prices;
    return {
      chartData,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      type: "0",
    };
  },
  watch: {
   
    prices(val) {
      this.chartData = {
        labels: ["< 1 triệu", "1 - 2 triệu", "2 - 3 triệu", "> 3 triệu"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
            data: val,
          },
        ],
      }; 
    },
    // updated(val) {
    //   this.chartData = {
    //     labels: ["< 1 triệu", "1 - 2 triệu", "2 - 3 triệu", "> 3 triệu"],
    //     datasets: [
    //       {
    //         backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
    //         data: val,
    //       },
    //     ],
    //   };
    // },
    unit(val) {
      console.log('ba',val)
      if(val == 0) {
        this.chartData = {
          labels: ["< 1 triệu", "1 - 2 triệu", "2 - 3 triệu", "> 3 triệu"],
          datasets: [
            {
              backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
              data: this.prices,
            },
          ],
        };

      } else if(val == 1){
        this.chartData = {
          labels: ["< 3 triệu", "3 - 6 triệu", "6 - 12 triệu", "> 12 triệu"],
          datasets: [
            {
              backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
              data: this.prices,
            },
          ],
        };

      } else if(val == 2) {
        this.chartData = {
          labels: ["< 12 triệu", "12 - 24 triệu", "24 - 36 triệu", "> 36 triệu"],
          datasets: [
            {
              backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
              data: this.prices,
            },
          ],
        };

      }
    }
  },
};
</script>
