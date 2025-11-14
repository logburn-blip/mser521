const options = {
  chart: {
    type: 'bar',
  },
  plotOptions: {
    bar: {
    borderRadius: 4,
    borderRadiusApplication: 'end',
    horizontal: true,
    }
  },
  colors:['hotpink', 'lightblue'],
  title: {
    text: "Snow Days",
    },
  series: [{ name: 'Snow Days 2024', data: [4, 7, 3, 1] },
          { name: 'Snow Days 2024', data: [10, 6, 4, 2] },
],
  xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr'] },
};

// code that actually creates the chart:
const chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();

// Documentation: https://apexcharts.com/javascript-chart-demos/bar-charts/basic/
