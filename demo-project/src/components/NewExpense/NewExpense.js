import React from 'react';
import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

// 사용자 입력을 위한 form 을 반환하는 컴포넌트
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};
// ExpenseForm 이 어떻게 부모 컴포넌트인 NewExpense 와 소통할 수 있는지...
// NewExpense 컴포넌트에서 함수를 호출할 수 있고,
// 매개변수로 데이터를 전달할 수 있다.
// 즉, ExpenseForm 에서 onSaveExpenseData 를 호출할때,
// saveExpenseDataHandler 에서 생성한 expenseData 를 인자로 전달할 수 있다.
// 그리고 그 값이 NewExpense 에서 매개변수로 받는 값이다...

export default NewExpense;