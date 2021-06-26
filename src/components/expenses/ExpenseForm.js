import React, {useState} from "react";
import './ExpenseForm.css'
const ExpenseForm = (props) => {

    const [changedTitle, setChangedTitle] = useState('');
    const [changedAmount, setChangedAmount] = useState('');
    const [changedDate, setChangedDate] = useState('');

    const onChangeTitle = (event) =>  { setChangedTitle(event.target.value); }
    const onDateChange = (event) =>  { setChangedDate(event.target.value); }
    const onAmountChange = (event) =>  { setChangedAmount(event.target.value); }

    const resetForm = (event) => {
        setChangedTitle('');
        setChangedAmount('');
        setChangedDate('');
        props.onReset();
    }
    const onSubmit = (event) => {
        event.preventDefault();
        const expenseData = {
            title: changedTitle,
            amount : changedAmount,
            date: new Date(changedDate)
        };
        props.onSave(expenseData);
        resetForm();
    }

    return <form onSubmit={onSubmit}>
        <div className="new-expense__controls">
            <div className="new-expense__control"></div>
            <label>Title</label>
            <input type="text" value={changedTitle} onChange={onChangeTitle}/>
        </div>

        <div className="new-expense__controls">
            <div className="new-expense__control"></div>
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" value={changedAmount}  onChange={onAmountChange}/>
        </div>

        <div className="new-expense__controls">
            <div className="new-expense__control"></div>
            <label>date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" value={changedDate}  onChange={onDateChange}/>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={resetForm}>Cancel Expense</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;