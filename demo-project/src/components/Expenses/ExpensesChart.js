import React from 'react';

import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    // props.expenses 가 객체가 아닌 배열이기 때문에, in 이 아닌 of 를 사용해야 한다.
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
        chartDataPoints[expenseMonth].value += expense.amount;
        // charDataPoints 에 각 데이터가 value 를 갖게 될 것임
        // 이걸 chart 로 전달하면 됨!
    }
    return <Chart dataPoints={chartDataPoints} />;
};
export default ExpensesChart;