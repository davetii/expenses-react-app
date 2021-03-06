import React, {useState} from "react";
import './App.css';
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/expenses/NewExpense";

const INIT_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

function App() {

    const [expenses, setExpenses] = useState(INIT_EXPENSES);
    const addExpenseHandler = (data) =>  {
        setExpenses(prevExpenses => {
            return [data, ...prevExpenses];
        });
        console.log("in app");
        console.log(data);
    };

  return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
