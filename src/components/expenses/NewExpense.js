import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense =(props) => {
    const [isEditMode, setIsEditMode] = useState(false);

    const saveData = (data) => {
        const expensedDate = {
            ...data, id: Math.random().toString()
        }
        props.onAddExpense(expensedDate);
    };

    const resetForm = () => { setIsEditMode(false); }
    const showEditMode = (event) => { setIsEditMode(true); }


    return <div className="new-expense">
        { !isEditMode && <button onClick={showEditMode}>Add new Expense</button>}
        { isEditMode && <ExpenseForm onSave={saveData} onReset={resetForm}/>}
    </div>
}

export default NewExpense;