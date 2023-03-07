<template>
  <div>
    <canvas ref="piechart"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import pieChartData from '../pie-data.js'

Chart.register(...registerables);
export default {
  name: 'PieChart',
  data() {
    return {
      pieChartData: pieChartData
    }
  },
  mounted() {const ctx = document.getElementById('piechart');
    new Chart(ctx, this.pieChartData);
  }
}

</script>

