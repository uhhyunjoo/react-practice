import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: '아이네',
    amount: 158.00,
    date: new Date(1994, 11, 17),
  },
  {
    id: 'e2',
    title: '징버거',
    amount: 161.9,
    date: new Date(1995, 9, 8)
  },
  {
    id: 'e3',
    title: '릴파',
    amount: 164,
    date: new Date(1996, 2, 9),
  },
  {
    id: 'e4',
    title: '주르르',
    amount: 161.9,
    date: new Date(1997, 5, 10),
  },
  {
    id: 'e5',
    title: '고세구',
    amount: 30000,
    date: new Date(1998, 8, 9),
  },
  {
    id: 'e6',
    title: '비챤',
    amount: 160,
    date: new Date(2000, 0, 16),
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