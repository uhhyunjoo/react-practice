import React, { useState } from 'react';

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// Expense Item 데이터를 렌더링하는 컴포넌트

// Keep in mind : Your componenet is a 'function' which returns 'JSX'

function ExpenseItem(props) {
    let title = props.title; // variable -> clickHandler can change it

    useState(props.title); // 원래 컴포넌트는 맨 처음에 한 번만 호출됨
    // useState 는 특별한 변수를 생성해서, 해당 변수는 변경사항으로 인해 컴포넌트를 다시 호출되도록 함
    // 초기값은 props.title 이고, 이걸 useState 에 인자로 전달함

    const clickHandler = () => {
        title = 'Updated!';
        console.log(title);
    };
    // function clickHandler() {}

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
// App 컴포넌트에서 ExpenseItem으로 데이터를 전달하고
// ExpenseItem  에서  props 를 통해 date, title, amount 등을 받고 데이터의 일부를 출력하고
// ExpenseDate 에서 props 를 통해 props.date 를 전달 받아 더 안쪽에 있는 ExpensDate 컴포넌트로 보내진다.
// props 는 A 컴포넌트에서 B 컴포넌트로 데이터를 전달하는 방식임!
export default ExpenseItem;


//document.getElementById('root').addEventListener()\

// useState is 'react-hook'
// all these hooks should be called directly inside of react componenet functions. (예외 존재하긴 한데, 지금은 패스 ㅇㅇ)