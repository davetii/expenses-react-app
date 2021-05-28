import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense =(props) => {

    const saveData = (data) => {
        const expensedDate = {
            ...data, id: Math.random().toString()
        }
        props.onAddExpense(expensedDate);
    };


    return <div className="new-expense">
        <ExpenseForm onSave={saveData} />
    </div>
}

export default NewExpense;