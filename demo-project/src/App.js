import React from 'react';
import Expenses from './components/Expenses/Expenses';
const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: '아이네',
      height: 158.00,
      date: new Date(1994, 11, 17),
    },
    {
      id: 'e2', 
      title: '징버거',
      height: 161.9,
      date: new Date(1995, 9, 8)
    },
    {
      id: 'e3',
      title: '릴파',
      height: 164,
      date: new Date(1996, 2, 9),
    },
    {
      id: 'e4',
      title: '주르르',
      height: 161.9,
      date: new Date(1997, 5, 10),
    },
    {
      id: 'e5',
      title: '고세구',
      height: 30000,
      date: new Date(1998, 8, 9),
    },
    {
      id: 'e6',
      title: '비챤',
      height: 160,
      date: new Date(2000, 0, 16),
    },
  ];

  return (
    <div>
      <h2 align='center'>Hing World</h2>
      <Expenses items={expenses}></Expenses>
    </div>
  );

  /* return React.createElement(
    'div',
    {},
    React.createElement('h2', {align : 'center'}, 'Hing World'),
    React.createElement(Expenses, {items : expenses}, 'Hing World')); */
}

export default App;