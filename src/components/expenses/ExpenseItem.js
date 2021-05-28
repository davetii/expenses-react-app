import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";

const ExpenseItem = (props) => {
    const onChangeTitle = () => {
        console.log('hey you')
    };
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={onChangeTitle}>chaneg title</button>
        </Card>
    );
}

export default ExpenseItem;

