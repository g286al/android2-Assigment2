import './ExpenseDate.css'

function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();
    const time = props.date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric' });

    return (
        <div className="expense-date">
            <div>
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__year">{year}</div>
                <div className="expense-date__day">{day}</div>
            </div>
        </div>
    );
}

export default ExpenseDate;