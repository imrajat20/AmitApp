import React from "react";

import './ExpensesFilter.css'

function ExpensesFilter(props) {

    const dropdownChangeHandler = (event) => {
        props.onChangeHandler(event.target.value);
    }

    return (
        <div className="">
            <div className="">
                <label>Filter By Year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>

                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>

                </select>
            </div>
        </div>
    )

}

export default ExpensesFilter;