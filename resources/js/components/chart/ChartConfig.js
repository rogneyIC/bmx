import color from "../Color";
const configuration = {};

configuration.config = (dataResponse, user_id) => {
    let labelArray = [];
    let dataArray = [];
    let backgroundColor = [];

    dataResponse.forEach(function (val, index, array) {
        color.forEach(function (val2, index2, array2) {
            if (val.region == index2 + 1) {
                backgroundColor.push(color[index2]);
            }
        });
        user_id == val.id
            ? labelArray.push("* " + val.name + " / " + val.age + "años *")
            : labelArray.push(val.name + " / " + val.age + "años");
        dataArray.push(val.point);
    });

    return {
        labels: labelArray,
        datasets: [
            {
                barPercentage: dataArray.length < 10 ? 0.5 : 1,
                data: dataArray,
                backgroundColor: backgroundColor,
            },
        ],
    };
};

configuration.configOne = (dataResponse) => {
    let labelArray = [];
    let dataArray = [];
    let backgroundColor = [];

    color.forEach(function (val, index, array) {
        if (dataResponse.region == index + 1) {
            backgroundColor.push(color[index]);
        }
    });
    labelArray.push(dataResponse.name + " / " + dataResponse.age + "años");
    dataArray.push(dataResponse.point);

    return {
        labels: labelArray,
        datasets: [
            {
                barPercentage: 0.1,
                data: [dataResponse.point],
                backgroundColor: backgroundColor,
            },
        ],
    };
};

export default configuration;
