export const pieChartData = {
  type: "pie",
  data: {
    // I going to do areas instead since just zipcodes can be an eyesore
    labels: [
      'Memorial',
      'Galleria',
      'Westchase',
      'Spring Branch',
      'Humble'
    ],
    //I will add more, I 'm just trying some things out
    datasets: [{
      label: 'Quantity',
      // Number of events per area, I'll be making an array
      data: [
        {area: 'Memorial', zip:'77024', quantity: 7},
        {area: 'Galleria', zip:'77063', quantity: 5},
        {area: 'Galleria', zip:'77057', quantity: 3},
        {area: 'Westchase', zip: '77042', quantity: 13},
        {area: 'Spring Branch', zip: '77055', quantity: 9},
        {area: 'Spring Branch', zip: '77080', quantity: 3},
        {area: 'Humble', zip: '77338', quantity: 5}],
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