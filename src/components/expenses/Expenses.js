import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../ui/Card";
import ExpenseFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const expenses = props.expenses;
    const yearChanged = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log("yearChanged");
        console.log(selectedYear);
    }
    return(
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeYear={yearChanged}/>
                {
                    props.expenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date} />
                    ))
                }
            </Card>
        </div>
    )
}
export default  Expenses;