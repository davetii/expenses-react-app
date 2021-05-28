import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense =() => {

    const saveData = (data) => {
        const expensedDate = {
            ...data, id: Math.random().toString()
        }
        console.log("in NewExpense");
        console.log(expensedDate)

    };

    return <div className="new-expense">
        <ExpenseForm onSave={saveData} />
    </div>
}

export default NewExpense;