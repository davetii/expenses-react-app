import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../ui/Card";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const yearChanged = (selectedYear) => { setFilteredYear(selectedYear);}
    const filteredExpense = props.expenses.filter(i => {
        return i.date.getFullYear() === +filteredYear;
    })

    return(
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeYear={yearChanged}/>
                <ExpensesList expenses={filteredExpense}/>
            </Card>
        </div>
    )
}
export default  Expenses;