import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    // dataPoint object 를, dataPoint 에 저장되어 있는 value(숫자)로 변경한다는 뜻
    // 즉, dataPointValues  는 숫자들로만 이루어진 배열이 될 것임
    const totalMax = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMax}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;