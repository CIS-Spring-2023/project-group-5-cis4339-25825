export const pieChartData = {
  type: "pie",
  data: {
    // I going to do areas instead since just zipcodes can be an eyesore
    labels: [
      'Memorial',
      'Galleria'
    ],
    //I will add more, I'm just trying some things out
    datasets: [
      {label: 'Quantity',
      data: [{area: 'Memorial', zip:'77024', quantity: 7}],
      backgroundColor: 'rgb(54, 162, 235)'},
      {label: 'Quantity',
      data: [{area: 'Galleria', zip:'77063', quantity: 5}],
      backgroundColor: 'rgb(255, 205, 86)'}
    ]
  }
};
export default pieChartData;