import React from "react";
import './ExpenseForm.css';

function ExpenseForm() {
    const titleHandler = (event) => {
        console.log(event.target.value);
    }
    const dateHandler = (event) => {
        console.log(event.target.date);
    }
    const amountHandler = (event) => {
        console.log(event.target.value);
    }

   return (
        <form>
            <div className="new-expense__controls">

                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onInput={titleHandler}></input>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onInput={amountHandler}></input>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2020-01-01" max="2024-03-31" onInput={dateHandler}></input>
                </div>

            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
   )
}
export default ExpenseForm;