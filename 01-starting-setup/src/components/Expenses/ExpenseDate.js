import './ExpenseDate.css';

function ExpenseDate(props) {

    const month = props.expense.date.toLocaleString('en-US', {month: 'long'});
    const year = props.expense.date.getFullYear();
    const day = props.expense.date.toLocaleString('en-US', {day: '2-digit'});

    return (
        <div className='expense-date'>
            <div className='expense-date-year'>{year}</div>
            <div className='expense-date-month'>{month} </div>
            <div className='expense-date-day'>{day}</div>
        </div>
    )

}

export default ExpenseDate;