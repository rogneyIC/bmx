import React from "react";
import { Bar } from "react-chartjs-2";

const cantRegion = 10;

const data = [
    { x: 1, name: "Pepe/35", point: 10, region: 1 },
    { x: 2, name: "Juan/25", point: 60, region: 1 },
    { x: 3, name: "Papo/17", point: 120, region: 1 },
    { x: 4, name: "Pupi/20", point: 36, region: 1 },
    { x: 5, name: "Pipo/23", point: 85, region: 2 },
    { x: 6, name: "Pepe2/35", point: 10, region: 2 },
    { x: 7, name: "Juan2/25", point: 60, region: 2 },
    { x: 8, name: "Papo2/17", point: 120, region: 3 },
    { x: 9, name: "Pupi2/20", point: 36, region: 3 },
    { x: 10, name: "Pipo2/23", point: 85, region: 3 },
    { x: 11, name: "Pepe3/35", point: 10, region: 3 },
    { x: 12, name: "Juan3/25", point: 60, region: 4 },
    { x: 13, name: "Papo3/17", point: 120, region: 4 },
    { x: 14, name: "Pupi3/20", point: 36, region: 4 },
    { x: 15, name: "Pipo3/23", point: 85, region: 4 },
    { x: 16, name: "Pepe4/35", point: 10, region: 5 },
    { x: 17, name: "Juan4/25", point: 60, region: 5 },
    { x: 18, name: "Papo4/17", point: 120, region: 6 },
    { x: 19, name: "Pupi4/20", point: 36, region: 6 },
    { x: 20, name: "Pipo4/23", point: 85, region: 6 },
    { x: 21, name: "Pepe5/35", point: 10, region: 7 },
    { x: 22, name: "Juan5/25", point: 60, region: 7 },
    { x: 23, name: "Papo5/17", point: 120, region: 7 },
    { x: 24, name: "Pupi5/20", point: 36, region: 7 },
    { x: 25, name: "Pipo5/23", point: 85, region: 8 },
    { x: 26, name: "Pepe6/35", point: 10, region: 8 },
    { x: 27, name: "Juan6/25", point: 60, region: 9 },
    { x: 28, name: "Papo6/17", point: 120, region: 9 },
    { x: 29, name: "Pupi6/20", point: 36, region: 10 },
    { x: 30, name: "Pipo6/23", point: 85, region: 10 },
    { x: 31, name: "Pepe/35", point: 10, region: 11 },
    { x: 32, name: "Juan/25", point: 60, region: 11 },
    { x: 33, name: "Papo/17", point: 120, region: 12 },
    { x: 34, name: "Pupi/20", point: 36, region: 12 },
    { x: 35, name: "Pipo/23", point: 85, region: 12 },
    { x: 36, name: "Pepe2/35", point: 10, region: 12 },
    { x: 37, name: "Juan2/25", point: 60, region: 12 },
    { x: 38, name: "Papo2/17", point: 120, region: 13 },
    { x: 39, name: "Pupi2/20", point: 36, region: 13 },
    { x: 40, name: "Pipo2/23", point: 85, region: 13 },
    { x: 41, name: "Pepe3/35", point: 10, region: 13 },
    { x: 42, name: "Juan3/25", point: 60, region: 14 },
    { x: 43, name: "Papo3/17", point: 120, region: 14 },
    { x: 44, name: "Pupi3/20", point: 36, region: 14 },
    { x: 45, name: "Pipo3/23", point: 85, region: 14 },
    { x: 46, name: "Pepe4/35", point: 10, region: 15 },
    { x: 47, name: "Juan4/25", point: 60, region: 15 },
    { x: 48, name: "Papo4/17", point: 120, region: 16 },
    { x: 49, name: "Pupi4/20", point: 36, region: 16 },
    { x: 50, name: "Pipo4/23", point: 85, region: 16 },
    { x: 51, name: "Pepe5/35", point: 10, region: 16 },
    { x: 52, name: "Juan5/25", point: 60, region: 16 },
    { x: 53, name: "Papo5/17", point: 120, region: 16 },
    { x: 54, name: "Pupi5/20", point: 36, region: 16 },
    { x: 55, name: "Pipo5/23", point: 85, region: 16 },
    { x: 56, name: "Pepe6/35", point: 10, region: 16 },
    { x: 57, name: "Juan6/25", point: 60, region: 16 },
    { x: 58, name: "Papo6/17", point: 120, region: 16 },
    { x: 59, name: "Pupi6/20", point: 36, region: 16 },
    { x: 60, name: "Pipo6/23", point: 85, region: 16 },
];

const labelArray = [];

const colorArray = [
    "blue",
    "red",
    "green",
    "yellow",
    "brown",
    "pink",
    "grey",
    "indigo",
    "darkslategrey",
    "violet",
    "cyan",
    "salmon",
    "khaki",
    "lime",
    "orange",
    "tomato",
];
// for (var i = 0; i < cantRegion; i++) {
//     colorArray.push("#" + Math.floor(Math.random() * 16777215).toString(16));
// }
const backgroundColor = [];
data.forEach(function (val, index, array) {
    colorArray.forEach(function (val2, index2, array2) {
        if (val.region == index2 + 1) {
            backgroundColor.push(colorArray[index2]);
        }
    });
    labelArray.push(val.x);
});

const cfg = {
    labels: labelArray,
    datasets: [
        {
            data: data,
            backgroundColor: backgroundColor,
        },
    ],
};

const options = {
    /*legendCallback(chart) {
        var text = [];
        text.push("<ul>");
        for (var i = 0; i < chart.data.datasets.length; i++) {
            console.log(chart.data.datasets[i]); // see what's inside the obj.
            text.push("<li>");
            text.push(
                '<span style="background-color:' +
                    chart.data.datasets[i].borderColor +
                    '">' +
                    chart.data.datasets[i].label +
                    "</span>"
            );
            text.push("</li>");
        }
        text.push("</ul>");
        return text.join("");
    },*/
    parsing: {
        //xAxisKey: "name",
        yAxisKey: "point",
    },
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
    animation: {
        onComplete: function () {
            {
                //
            }
        },
    },
};

const new_width = data.length * 50 + "px";

const LevelerChart = () => (
    <>
        <div className="chartWrapper">
            <div
                className="chartAreaWrapper"
                style={{ height: "500px", width: "100%" }}
            >
                <Bar
                    data={cfg}
                    options={options}
                    id="levelerChar"
                    height="500"
                    width="0"
                />
            </div>
        </div>
    </>
);

export default LevelerChart;
