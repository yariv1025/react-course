import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses (props) {


    return (
        <Card className='expenses'>
            {props.expenses.map((item, index) => (
                <ExpenseItem key={index} expense={item} />
            ))}
        </Card>
    )
}

export default Expenses;