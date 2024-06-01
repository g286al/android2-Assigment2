import "./ExpenseTime.css";
import React, { useState, useEffect } from "react";


function ExpenseTime() {
    const [seconds, setSeconds] = useState("0");
    const [minutes, setMinutes] = useState("0");
    const [hours, setHours] = useState("0");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const currentSecond = now.getSeconds();
            const currentMinute = now.getMinutes();
            const currentHour = now.getHours();
            setSeconds(currentSecond);
            setMinutes(currentMinute);
            setHours(currentHour);
        }, 1000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="expense-time">
            <p>{hours}:{minutes}:{seconds}</p>
        </div>
    );
}

export default ExpenseTime;

