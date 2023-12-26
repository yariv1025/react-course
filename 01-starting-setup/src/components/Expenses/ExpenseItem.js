import {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

// function ExpenseItem({title, amount, date}) { // destructuring option
function ExpenseItem(props) {

    const [title, setTitle] = useState(props.expense.title);
    // let title = props.expense.title;

    const [amount, setAmount] = useState(props.expense.amount);
    // let amount = props.expense.amount;

    const clickHandler = () => {
        setTitle(props.expense.title);
        setAmount(props.expense.amount);
        // setTitle("title");
        // setAmount('amount');
        console.log("DONE!");
    };

    return (
        <Card className="expense-item">
            <ExpenseDate expense={props.expense} />
            <div className="expense-item-description">
                <h2>{title}</h2>
                <div className="expense-item-price">${amount}</div>
            </div>
            <button onClick={clickHandler}>Change Item</button>
        </Card>
    )
};

export default ExpenseItem;