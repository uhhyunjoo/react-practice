import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: '아이네',
    amount: 1.58,
    date: new Date(2020, 11, 17),
  },
  {
    id: 'e2',
    title: '징버거',
    amount: 16.19,
    date: new Date(2020, 9, 8)
  },
  {
    id: 'e3',
    title: '릴파',
    amount: 164,
    date: new Date(2021, 2, 9),
  },
  {
    id: 'e4',
    title: '주르르',
    amount: 16.19,
    date: new Date(2021, 5, 10),
  },
  {
    id: 'e5',
    title: '고세구',
    amount: 30.00,
    date: new Date(2022, 8, 9),
  },
  {
    id: 'e6',
    title: '비챤',
    amount: 16.0,
    date: new Date(2022, 0, 16),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };


  return (
    <div>
      <h2 align='center'>Hing World</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );

};

export default App;