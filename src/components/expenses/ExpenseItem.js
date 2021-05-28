import React, {useState} from "react";

import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";

const ExpenseItem = (props) => {
    // a react hook
    const [title, setTitle] = useState(props.title);

    const onChangeTitle = () => {
        setTitle("bob");
    };
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={onChangeTitle}>change title</button>
        </Card>
    );
}

export default ExpenseItem;

