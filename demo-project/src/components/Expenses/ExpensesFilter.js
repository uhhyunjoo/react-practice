import React, { useState } from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const [enteredOption, setEnteredOption] = useState('default');

    const optionChangeHandler = (event) => {
        event.preventDefault();
        //console.log('before:', enteredOption);
        const expenseOption = {
            option: event.target.value,
        }

        //console.log('after:', expenseOption);
        props.onChange(expenseOption);
        setEnteredOption(expenseOption);

    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={optionChangeHandler} value={enteredOption} >
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;