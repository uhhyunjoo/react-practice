import React from 'react';
import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

// 사용자 입력을 위한 form 을 반환하는 컴포넌트
const NewExpense = () => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;