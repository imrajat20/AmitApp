import React, {useState} from "react";
import './ExpenseForm.css';

function ExpenseForm(props) {
    const [Enteredtitle, setTitle] = useState('');
    const [Enteredprice, setAmount] = useState('');
    const [Entereddate, setDate] = useState('');

    const titleHandler = (event) => {
        setTitle(event.target.value);
    }
    const dateHandler = (event) => {
        setAmount(event.target.value);
    }
    const amountHandler = (event) => {
        setDate(event.target.value);
    }

    const submitHandler = (event) => {

       event.preventDefault();
       const expenseData = {
        title:Enteredtitle,
        price:Enteredprice,
        date: new Date(Entereddate)
       }
      
       props.onSavingData(expenseData);
       setTitle('');
       setAmount('');
       setDate('');

    }

   return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">

                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={Enteredtitle} onInput={titleHandler}></input>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={Enteredprice} onInput={amountHandler}></input>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2020-01-01" max="2024-03-31" value={Entereddate} onInput={dateHandler}></input>
                </div>

            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
   )
}
export default ExpenseForm;