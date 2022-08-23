import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// Expense Item 데이터를 렌더링하는 컴포넌트

function ExpenseItem(props){
    // helper constant (도우미 상수)
    return (
        <Card className='expense-item'>
            <ExpenseDate date = {props.date}></ExpenseDate>
            <h2> {props.title} </h2>
            <div className='expense_-item__description'>
                <div className='expense-item__price'>{props.height}cm</div>
            </div>
        </Card>
    );
}
// App 컴포넌트에서 ExpenseItem으로 데이터를 전달하고
// ExpenseItem  에서  props 를 통해 date, title, amount 등을 받고 데이터의 일부를 출력하고
// ExpenseDate 에서 props 를 통해 props.date 를 전달 받아 더 안쪽에 있는 ExpensDate 컴포넌트로 보내진다.
// props 는 A 컴포넌트에서 B 컴포넌트로 데이터를 전달하는 방식임!
export default ExpenseItem;