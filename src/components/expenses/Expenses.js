import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../ui/Card";
import ExpenseFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const yearChanged = (selectedYear) => { setFilteredYear(selectedYear);}
    const filteredExpense = props.expenses.filter(i => {
        return i.date.getFullYear() === +filteredYear;
    })

    let expenseContent = <p>No expenses found</p>;
    if (filteredExpense.length > 0) {
        expenseContent = filteredExpense.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }

    return(
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeYear={yearChanged}/>
                {expenseContent}
            </Card>
        </div>
    )
}
export default  Expenses;