// variables at the top:
let snowDays1;
let snowDays2;
let months;

// define the function to get the chart data:
async function getChartData() {
  const sheetName = 'WData';
  const response = await fetch(
    `https://script.google.com/macros/s/AKfycbzcOnqzvg3ajtKVALrY_bvc5qo6bvYhwVYgPM7KNKU-3t2mG2YJRrFl4rwDmPxx0ZI78g/exec?sheet=${sheetName}`
  );
  const data = await response.json();
  return data;
}

// define the funciton to create the chart:
async function createChart() {
  const serverData = await getChartData();

  // create the two lists that we need for the chart:
  snowDays1 = serverData.map(row => row['Hours Played-Willow']);
  snowDays2 = serverData.map(row => row['Hours Played-Thad']);
  months = serverData.map(row => row['Game']);

  const options = {
    chart: {
      type: 'bar',
      events: {
        dataPointSelection: getDetails,
      },
    },
    colors: ['cyan', '#ffd817ff'], // series 1 and series 2 colors
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    series: [
      { name: 'Hours Played-Willow', data: snowDays1 },
      { name: 'Hours Played-Thad', data: snowDays2 },
    ],
    xaxis: { categories: months },
    
    title: {
      text: 'Hours of Games Played: Me vs My Partner',
      align: 'center',
    }
  };

  document.querySelector('#chart').innerHTML = '';
  const chart = new ApexCharts(document.querySelector('#chart'), options);
  chart.render();
}

// Much simpler function using our stored data:
function getDetails(event, chartContext, config) {
  const dataIndex = config.dataPointIndex; // get the index of the clicked point

  // target the details panel:
  const detailsElement = document.querySelector('#details');
  // update the details panel:
  detailsElement.innerHTML = `
          <h2>Details for ${months[dataIndex]}</h2>
          <p>Game: ${months[dataIndex]}</p>
          <p>Hours Played-Willow: ${snowDays1[dataIndex]}</p>
          <p>Hours Played-Thad: ${snowDays2[dataIndex]}</p>
      `;
}

// run the function:
createChart();
