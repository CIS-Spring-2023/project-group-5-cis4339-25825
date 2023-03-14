export const pieChartData = {
  type: "pie",
  data: {
    // Zip Codes
    labels: [
      '77024',
      '77063',
      '77042',
      '77055',
      '77080'
    ],
    datasets: [{
      label: 'Quantity',
      // Number of Clients
      data: [7, 5, 13, 9, 5],
      backgroundColor: [
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(20, 22, 236)',
        'rgb(22, 236, 20)',
        'rgb(0, 85, 18)'
      ]
    }]
  }
};
export default pieChartData;