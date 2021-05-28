import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../ui/Card";
import ExpenseFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const expenses = props.expenses;
    const yearChanged = (data) => {
        console.log("yearChanged");
        console.log(data);
    }
    return(
        <div>
            <Card className="expenses">
                <ExpenseFilter onChangeYear={yearChanged}/>
                <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
                <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
                <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
                <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
            </Card>
        </div>

    )
}
export default  Expenses;