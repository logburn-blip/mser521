// Store data in simple variables for easy access
const chartData = [4, 7, 3, 5];
const categories = ['Jan', 'Feb', 'Mar', 'Apr'];

// chart options:
const options = {
  chart: {
    type: 'bar',
    events: {
      dataPointSelection: getDetails,
    },
  },
  series: [{ name: 'Count', data: chartData }],
  xaxis: { categories: categories },
};

function getDetails(event, chartContext, config) {
  const dataIndex = config.dataPointIndex; // get the index of the clicked point
  console.log(dataIndex);

  // 1. How do you get the value of the clicked point?
  // 2. How do you get the category of the clicked point?
  // 3. How do you output the value and label to the details panel?
}

// code that actually creates the chart:
const chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();
