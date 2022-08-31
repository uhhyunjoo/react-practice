import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });
    // 차이점 : 이 state 를 업데이트할 때마다, 한 개가 아닌 이 세 property 모두를 업데이트 해야 한다.

    const titleChangeHandler = (event) => {
        // (1) : state 3개 따로인 경우
        // setEnteredTitle(event.target.value);

        // (2) : state 1개인 경우
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        // (3) : 이전 state 사용
        // 만약, 하나씩 증가하는 counter 처럼, 이전 state 에 의존해야 한다면 이렇게 하면 안된다.
        // previous state 의 snapshot 을 얻어서, 새로운 state 의 snapshot 을 반환해야한다.
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value };
        });
        // 왜 이렇게 해야할까?
        // react 는 state update schedule 을 갖고 있어서, 바로 실행하지 않다,
        // 그래서, 이론적으로, 동시에 수많은 state update 가 scheduled 되어 있다면
        // 오래됐거나, 잘못된 state snapshot 에 의존할 수 있다. (2) 를 사용한다면.
        // (3) 을 사용한다면, prevState 의 snapshot 이 가장 최신 상태의 snapshot 이고
        // 항상 계획된 state update 를 고려하고 있다는 것을 보장한다.
        // 즉, 상태업데이트가 이전 상태에 의존하고 있다면,
        // 이 방법이 항상 최신 상태의 snapshot 에서 작업하기 위한, 좀 더 안전한 방법이다.
    };

    const amountChangeHandler = (event) => {
        // setEnteredAmount(event.target.value);
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        })
    };

    const dateChangeHandler = (event) => {
        // setEnteredDate(event.target.value);
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        })
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2021-01-01' max='2023-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;