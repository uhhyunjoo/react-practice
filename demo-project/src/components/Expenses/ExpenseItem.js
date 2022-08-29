import React, { useState } from 'react';

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// Expense Item 데이터를 렌더링하는 컴포넌트
// Keep in mind : Your componenet is a 'function' which returns 'JSX'

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);

    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>

            <div className='expense_-item__description'>
                <h2> {title} </h2>
                <div className='expense-item__price'>{props.height}cm</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;