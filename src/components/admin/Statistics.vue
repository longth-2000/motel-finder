<template>
  <div class="chart-container">
    <div class="chart-statistic">
      <div class="chart-district chart-component">
        <div class="chart-title"><span>Theo quận/huyện</span></div>
        <div class="chart-content">
          <BarChart />
        </div>
      </div>
      <div class="chart-price-area">
        <div class="chart-price chart-child chart-component">
          <div class="chart-title"><span>Theo diện tích</span></div>
          <div class="chart-content">
            <PieChart />
          </div>
        </div>
        <div class="chart-area chart-child chart-component">
          <div class="chart-title"><span>Theo giá</span></div>
          <div class="chart-content">
            <DoughnutChart />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BarChart from "../chart/BarChart.vue";
import PieChart from "../chart/PieChart.vue";
import DoughnutChart from "../chart/DoughnutChart.vue";

export default {
  components: {
    BarChart,
    PieChart,
    DoughnutChart
  },
};
</script>
<style scoped>
.chart-container {
  width: 100%;
}
.chart-component {
  background: white;
}
.chart-statistic {
  width: 90%;
  margin: 0 auto;
}
.chart-district {
  width: 100%;
  box-shadow: 0 0 0 0 rgb(90 113 208 / 11%), 0 4px 16px 0 rgb(167 175 183 / 33%);
}
.chart-price-area {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
.chart-child {
  width: 45%;
}
.chart-area {
}
.chart-title {
  padding: 1.5rem;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #dee2e6;
  background: #e8e8e8;
  font-family: "roboto", sans-serif;
}
</style>
