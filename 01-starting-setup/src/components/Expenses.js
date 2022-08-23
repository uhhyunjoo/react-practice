import './Expenses.css'

function Expenses(props){
    return (
        <div className = 'expenses'>
            <div>{props.total}</div>
        </div>
    );
}
export default Expenses;