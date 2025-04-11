import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const [data, setData] = React.useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
        background: 'transparent', // 🖤 transparent black background
        foreColor: "#ffffff", // 🤍 makes all text white
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        colors: ["#ffffff"], // line color white (optional)
      },
      title: {
        align: "left",
        style: {
          color: "#ffffff", // title color white
          fontSize: "18px",
        },
      },
      grid: {
        borderColor: "#444", // grid line color
        row: {
          colors: ["transparent"], // no row stripes
        },
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr"],
        labels: {
          style: {
            colors: "#ffffff",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#ffffff",
          },
        },
      },
    }

  });

  return (
    <>
        <div className="theme_card bg-2b2a33">
          <div id="chart">
            <ReactApexChart
              options={data.options}
              series={data.series}
              type="line"
              height={350}
            />
          </div>
        </div>
      </>
      );
};

      export default LineChart;
