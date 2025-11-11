const options = {
  chart: {
    type: 'bar',
  },
  series: [{ name: 'Snow Days', data: [4, 7, 3, 1] }],
  xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr'] },
};

// code that actually creates the chart:
const chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();

// Documentation: https://apexcharts.com/javascript-chart-demos/bar-charts/basic/
