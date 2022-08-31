import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // state 를 사용하면, 'two-way binding'이라는 것을 구현할 수 있다.
    // for inputs, we don't jst listen to chagnes,
    // but we can also pass a new value back in to the input
    // 즉, 입력값을 재설정하거나 입력할 수 있게 된다.

    // how?
    // default attribute 인 value 를 input element 에 추가하면 된다.
    // 그리고 이것을 특정값 (ex. enteredTitle) 으로 바인딩하면 된다. value={enteredTitle}
    // two-way binding 된 것임
    // 왜냐면, 상태를 update 하기 위해, input 에서 changes 를 수신하는 것뿐만 아니라,
    // input 에 state 를 송신하기도 하기 때문 
    // change the state -> change the input 
    // 장점 : 폼이 제출 됐을 때,
    // setEnteredTitle(''); 으로 override 해서 입력 부분을 지운다!
    // 'two-way binding' 은, form 을 다룰 때 매우 유용한다!
    // form 전송에 따라 user input 을 모으거나 / 변경할 수 있기 때문이다.

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault(); // 기본 요청이 보내지는 것을 막음 -> 페이지 다시 로드 되지 x

        // 입력된 모든 데이터를 결합하는 객체
        // enteredTitle, enteredAmoung, enteredDate 는 위에 작성된 상태변수를 가리킨다.
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData);
        setEnteredTitle(''); // clear the input
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2021-01-01' max='2023-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;