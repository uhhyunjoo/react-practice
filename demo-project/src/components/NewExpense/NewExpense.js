import React from 'react';
import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

// 사용자 입력을 위한 form 을 반환하는 컴포넌트
const NewExpense = () => {

    return (
        <div className="new-expense">
            <ExpenseForm />
        </div>
    );
};

export default NewExpense;