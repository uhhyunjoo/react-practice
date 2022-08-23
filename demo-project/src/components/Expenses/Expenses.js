import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

function Expenses(props){
    return (
        <Card className = 'expenses'>
            <ExpenseItem title={props.items[0].title} height={props.items[0].height} date={props.items[0].date}></ExpenseItem>
            <ExpenseItem title={props.items[1].title} height={props.items[1].height} date={props.items[1].date}></ExpenseItem>
            <ExpenseItem title={props.items[2].title} height={props.items[2].height} date={props.items[2].date}></ExpenseItem>
            <ExpenseItem title={props.items[3].title} height={props.items[3].height} date={props.items[3].date}></ExpenseItem>
            <ExpenseItem title={props.items[4].title} height={props.items[4].height} date={props.items[4].date}></ExpenseItem>
            <ExpenseItem title={props.items[5].title} height={props.items[5].height} date={props.items[5].date}></ExpenseItem>
        </Card>
    );
}
export default Expenses;