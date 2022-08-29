import React, { useState } from 'react';

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// Expense Item 데이터를 렌더링하는 컴포넌트

// Keep in mind : Your componenet is a 'function' which returns 'JSX'

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

    // 원래 컴포넌트는 맨 처음에 한 번만 호출됨
    // useState 는 특별한 변수를 생성해서, 해당 변수는 변경사항으로 인해 컴포넌트를 다시 호출되도록 함
    // 초기값은 props.title 이고, 이걸 useState 에 인자로 전달함
    // useSate 는 어떤 값을 반환하는데, 그것이 이 특별한 변수에 접근할 수 있도록 해준다.
    // 뿐만 아니라, 우리가 호출하는 함수도 반환해서, 특별한 변수에 새로운 값을 할당해준다.
    // 즉, 등호를 사용해서 값을 할당하는 게 아니라, 함수를 호출해서 새로운 값을 할당해주면 된다.

    // useState 는 실제로 첫번째 값이, 변수 자체인 '배열'을 반환하고
    // 두번째 요소는 '업데이트되는 함수'이다.

    // modearn js structure feature 인, 'array-distructuring' 을 사용해서
    // 두 elements 를 separate variable/constant 에 저장할 수 있다.

    // 첫번째 요소 (title) : 관리되고 있는, 현재 상태 값 -> 초기값으로 props.title 이 저장됨
    // 두번째 요소 (setTitle) : 나중에 새로운 title 을 업데이트하기 위해 호출할 수 있는 함수

    // 이 useState 라는 hook  은, 항상 두 개의 요소가 있는 배열을 반환한다.

    const clickHandler = () => {
        setTitle('Updated!'); // state 를 업데이트 하는 함수를 호출해서, 인자로 새로운 값을 전달
        // 왜 새로운 값을 할당하지 않고, state 를 업데이트할까요??
        // 왜냐하면, 이 함수를 호출하는 것은 어떤 변수에 새로운 값을 할당하는 것이 아니라,
        // 앞서 말한 '특별한 변수'로 시작하게 만드는 것임.
        // 이 변수는 메모리 어딘가에서 리액트로 관리되는데, state Updating 함수를 호출할 때마다,
        // 이 특별한 변수는 단지 새로운 값만 받는 것이 아니다.

        // 호출한 컴포넌트 함수(ExpenseState)는, 이 state 를 업데이트하는 함수이다.
        // 즉, useState 를 이용해 prop.title 로 특별한 변수를 초기화했던 곳에서 다시 시작된다.
        // 그게 우리한테 필요한 것임...!

        // setTitle 함수를 통해, state 에 새로운 값을 할당하고 싶다고 리액트에게 알려주면,
        // 리액트는 이 컴포넌트 함수 (ExpenseItem) 을 다시 실행하고,
        // 해당 함수는 useState 를 이용해서 state 가 등록된 컴포넌트가 재평가되어야한다고 말한다.
        // 그러면 리액트는 이 component  함수를 다시 실행하고, JSX 코드를 re-evaluate 한다.
        // 즉, 이전과 비교하여 생겨난 변화사항들을 화면에 나타나게 만든다.

        console.log(title);

        // 이때 console.log 는 업데이트 되기 전의 title(아이네)를 보여준다.
        // 왜냐면, useState 함수를 호출했을 때 사실상 값을 바로 바꾼 게 아니라, state 업데이트를 예약한 것이기 때문이다.
        // 그래서 새로운 값을 아직 사용할 수 없었던 것이다.
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