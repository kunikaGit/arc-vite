import React, { useRef } from 'react';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import annotationPlugin from 'chartjs-plugin-annotation';
import zoomPlugin from 'chartjs-plugin-zoom';
ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Filler,
    Tooltip,
    Legend,
    annotationPlugin,
    zoomPlugin
);

// ✅ Custom plugin to set chart background
const backgroundColorPlugin = (bgColor = 'white') => ({
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext('2d');
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
    },
});

const AccountChart = ({ theme = 'light' }) => {
    const chartRef = useRef(null); // 

    const zoomIn = () => {
        alert(":")
        const chart = chartRef.current;
        if (chart) {
            chart.zoom(1.1); // Zoom in
        }
    };

    const zoomOut = () => {
        const chart = chartRef.current;
        if (chart) {
            chart.zoom(0.9); // Zoom out
        }
    };

    const resetZoom = () => {
        const chart = chartRef.current;
        if (chart) {
            chart.resetZoom(); // Reset zoom
        }
    };


    const labels = ['12th', '13th', '14th', '15th'];
    const equityValues = [9800, 9500, 12000, 15000];

    const referenceLine = 10000;
    const profitTarget = 16000;
    const maxLoss = 8000;
    const maxDailyLoss = 9000;
    const currentBalance = 13000;
    const equityValue = 10800;



    // const data = {
    //     labels,
    //     datasets: [
    //         {
    //             label: 'Account Value',
    //             data: equityValues,
    //             fill: {
    //                 target: {
    //                     value: referenceLine,
    //                 },
    //                 above: 'rgba(0, 200, 0, 0.4)',
    //                 below: 'rgba(255, 0, 0, 0.4)',
    //             },
    //             borderColor: '#fff',
    //             tension: 0.4,
    //             pointRadius: 4,
    //             pointBackgroundColor: '#fff',
    //         },
    //     ],
    // };

    //     const data = {
    //     labels,
    //     datasets: [
    //         {
    //             label: 'Above Reference',
    //             data: equityValues.map(val => val >= referenceLine ? val : null),
    //             borderColor: 'green',
    //             backgroundColor: 'rgba(0, 200, 0, 0.4)',
    //             fill: {
    //                 target: {
    //                     value: referenceLine,
    //                 },
    //                 above: 'rgba(0, 200, 0, 0.4)',
    //                 below: 'transparent',
    //             },
    //             tension: 0.4,
    //             pointRadius: 4,
    //             pointBackgroundColor: 'rgba(0, 200, 0, 0.4)',
    //         },
    //         {
    //             label: 'Below Reference',
    //             data: equityValues.map(val => val < referenceLine ? val : null),
    //             borderColor: 'red',
    //             backgroundColor: 'rgba(255, 0, 0, 0.4)',
    //             fill: {
    //                 target: {
    //                     value: referenceLine,
    //                 },
    //                 above: 'transparent',
    //                 below: 'rgba(255, 0, 0, 0.4)',
    //             },
    //             tension: 0.4,
    //             pointRadius: 4,
    //             pointBackgroundColor: 'rgba(255, 0, 0, 0.4)',
    //         }
    //     ],
    // };


    const data = {
        labels,
        datasets: [
            {
                label: 'Equity Curve',
                data: equityValues,
                borderColor: 'green', // default fallback
                borderWidth: 2,
                //backgroundColor: 'rgba(0, 200, 0, 0.3)',
                fill: {
                    target: {
                        value: referenceLine
                    },
                    above: 'rgba(0, 200, 0, 0.3)',
                    below: 'rgba(255, 0, 0, 0.3)'
                },
                tension: 0.4,
                pointRadius: 4,

                // 💡 This makes the points green or red dynamically
                pointBackgroundColor: ctx => {
                    const y = ctx.parsed.y;
                    return y < referenceLine ? 'red' : 'green';
                },
                pointBorderColor: ctx => {
                    const y = ctx.parsed.y;
                    return y < referenceLine ? 'red' : 'green';
                },
                // Segment styling function
                segment: {
                    borderColor: ctx => {
                        const current = ctx.p0.parsed.y;
                        const next = ctx.p1.parsed.y;
                        const reference = referenceLine;
                        // If both points are below reference -> red segment
                        if (current < reference && next < reference) return 'red';
                        // If both points are above or equal -> green segment
                        if (current >= reference && next >= reference) return 'green';
                        // If crossing, use a neutral (optional) or gradient logic (advanced)
                        return 'gray'; // or leave undefined to use default
                    }
                }
            }
        ]
    };





    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: { mode: 'index', intersect: false },
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'x', // 'x', 'y', or 'xy'
                },
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    pinch: {
                        enabled: true,
                    },
                    mode: 'x',
                },
            },
            annotation: {
                annotations: {

                    // equityValue: {
                    //     type: 'line',
                    //     yMin: equityValue,
                    //     yMax: equityValue,
                    //     borderColor: 'rgb(102, 3, 105)', // blue-ish highlight
                    //     borderWidth: 2,
                    //     label: {
                    //         content: `Equity Value = ${equityValue}`,
                    //         enabled: true,
                    //         display: true,
                    //         position: 'start',
                    //         backgroundColor: 'rgb(102, 3, 105)',
                    //         color: '#fff',
                    //         font: { weight: 'bold' },
                    //         padding: {
                    //             top: 10,
                    //             bottom: 5,
                    //         },
                    //     },
                    // },
                    // currentBalance: {
                    //     type: 'line',
                    //     yMin: currentBalance,
                    //     yMax: currentBalance,
                    //     borderColor: 'rgba(0, 217, 255, 0.7)', // blue-ish highlight
                    //     borderWidth: 2,
                    //     label: {
                    //         content: `Balance = ${currentBalance}`,
                    //         enabled: true,
                    //         display: true,
                    //         position: 'start',
                    //         backgroundColor: 'rgba(0, 217, 255, 0.7)',
                    //         color: '#fff',
                    //         font: { weight: 'bold' },
                    //         padding: {
                    //             top: 10,
                    //             bottom: 5,
                    //         },
                    //     },
                    // },
                    // accountSize: {
                    //     type: 'line',
                    //     yMin: referenceLine,
                    //     yMax: referenceLine,
                    //     borderColor: 'rgba(0, 0, 255, 0.7)', // blue-ish highlight
                    //     borderDash: [5, 5],
                    //     borderWidth: 2,
                    //     label: {
                    //         content: 'Account Size',
                    //         enabled: true,
                    //         display: true,
                    //         position: 'start',
                    //         backgroundColor: 'rgba(0, 0, 255, 0.7)',
                    //         color: '#fff',
                    //         font: { weight: 'bold' },
                    //         padding: {
                    //             top: 10,
                    //             bottom: 5,
                    //         },
                    //     },
                    // },
                    profitTarget: {
                        type: 'line',
                        yMin: profitTarget,
                        yMax: profitTarget,
                        borderColor: 'green',
                        borderDash: [5, 5],
                        borderWidth: 1.5,
                        label: {
                            content: 'Profit Target',
                            enabled: true,
                            display: true,
                            position: 'start',
                            backgroundColor: 'green',
                            color: '#fff',
                            font: { size: 10 },
                            padding: {
                                top: 10,
                                bottom: 5,
                            },
                        },
                    },
                    maxLoss: {
                        type: 'line',
                        yMin: maxLoss,
                        yMax: maxLoss,
                        borderColor: 'red',
                        borderDash: [5, 5],
                        borderWidth: 1.5,
                        label: {
                            content: 'Max Loss',
                            enabled: true,
                            display: true,
                            position: 'start',
                            backgroundColor: 'red',
                            color: '#fff',
                            font: { size: 10 },
                            padding: {
                                top: 10,
                                bottom: 5,
                            },
                        },
                    },
                    // maxDailyLoss: {
                    //     type: 'line',
                    //     yMin: maxDailyLoss,
                    //     yMax: maxDailyLoss,
                    //     borderColor: 'orange',
                    //     borderDash: [5, 5],
                    //     borderWidth: 1.5,
                    //     label: {
                    //         content: 'Max Daily Loss',
                    //         enabled: true,
                    //         display: true,
                    //         position: 'start',
                    //         backgroundColor: 'red',
                    //         color: '#fff',
                    //         font: {
                    //             size: 12,
                    //         },
                    //         padding: {
                    //             top: 10,
                    //             bottom: 5,
                    //         },
                    //     },
                    // },
                },
            },
            customCanvasBackgroundColor: backgroundColorPlugin(theme === 'dark' ? '#000' : '#fff'),

        },
        interaction: {
            mode: 'index',
            intersect: false,
        },
        scales: {
            x: {
                title: { display: true, text: 'Date' },
                ticks: { color: theme === 'dark' ? '#fff' : '#000' },
            },
            y: {
                title: { display: true, text: 'Amount' },
                ticks: { color: theme === 'dark' ? '#fff' : '#000' },
            },
        },
    };

    return (<>
        {/* <div style={{ marginBottom: '10px' }}>
            <button onClick={zoomIn}>Zoom In</button>
            <button onClick={zoomOut}>Zoom Out</button>
            <button onClick={resetZoom}>Reset Zoom</button>
        </div> */}
        <Line data={data} options={options} /></>);
};

export default AccountChart;
