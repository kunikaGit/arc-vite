import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = ({ title, value }) => {
    const chartData = {
        series: [value],
        options: {
            chart: {
                type: "radialBar",
                offsetY: -20,
                sparkline: {
                    enabled: true,
                },
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    track: {
                        background: "#1e1e1e", // Matches your card bg
                        strokeWidth: "97%",
                        margin: 5,
                        dropShadow: {
                            enabled: true,
                            top: 2,
                            left: 0,
                            color: "#000",
                            opacity: 0.5,
                            blur: 3,
                        },
                    },
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            offsetY: -2,
                            fontSize: "20px",
                            color: 'var(--text_black)',
                        },
                    },
                },
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    shadeIntensity: 0.5,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 53, 91],
                    colorStops: [
                        { offset: 0, color: "#6B34D2", opacity: 1 },
                        { offset: 100, color: "#6B34D2", opacity: 1 },
                    ],
                },
            },
            labels: ["Progress"],
        },
    };

    return (
        <div
            className="objective-graph"
            style={{
                borderRadius: "12px",
                color: "var(--text_black)",
                textAlign: "center",
            }}>
            <ReactApexChart options={chartData.options} series={chartData.series} type="radialBar" height={150} />
            <h3 className="text-xs" style={{ marginTop: "10px" }}>{title}</h3>
        </div>
    );
};

const TradingObjective = () => {
    return (
        <>
            <div className="bg-grey theme_card mb-4" >
                <h2 className="card-title font-semibold text-lg mb-4" style={{ color: 'var(--text_black)' }}>
                    Trading Objectives</h2>
                <div className="tradingobjective-cards">
                    <ApexChart title="Profit target" value={76} />
                    <ApexChart title="Max drawdown (Daily)" value={63} />
                    <ApexChart title="Max drawdown (Overall)" value={88} />
                    <ApexChart title="Minimum trading days" value={45} />
                </div>
            </div>
            <div className="theme_card bg-grey data-table mb-4">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>Minimum Trading Days</th>
                            <th>Max Daily Loss</th>
                            <th>Max Loss</th>
                            <th>Profit Target</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>4</td>
                            <td>$5000</td>
                            <td>$10,000</td>
                            <td>$10,000.00</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>$5000</td>
                            <td>$10,000</td>
                            <td>$10,000.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TradingObjective;
