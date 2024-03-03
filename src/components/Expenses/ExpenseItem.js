
import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
function ExpenseItem(props){

    const [price, setPrice] = useState(props.amount);
    const priceHandler = () => {
        setPrice(100);
    }

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
       setTitle('updated!');
    }
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{price} Rs</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={priceHandler}>Change Price</button>
        </Card>
    );
}

export default ExpenseItem;