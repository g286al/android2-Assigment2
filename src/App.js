import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import Expenses from "./components/Expenses";
import ExpenseTime from "./components/ExpenseTime";

function App() {
    const [expenses, setExpenses] = useState([]);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [...prevExpenses, expense];
        });
    }

    return (
        <div className="app-container">
            <div className="form-clock-container">
                <ExpenseForm onAddExpense={addExpenseHandler} />
                <ExpenseTime />
            </div>
            <Expenses items={expenses} />
        </div>
    );
}

export default App;

