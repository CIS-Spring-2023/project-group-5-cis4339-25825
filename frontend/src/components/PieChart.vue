<template>
    <div>
      <canvas id="pie-chart"></canvas>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  import pieChartData from '../assets/pieData.js';
  export default {
    // Type of Chart
    name: 'PieChart',
    data() {
      return{
        // Chart Data
        pieChartData: pieChartData
      }
    },
    mounted(){
      // Mount to canvas with the id "pie-chart"
      const ctx = document.getElementById('pie-chart');
      // Create Chart
      new Chart(ctx, this.pieChartData);
    }
  }
  </script>