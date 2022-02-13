import React from 'react';
import { useContext } from 'react';
import {AppContext} from '../context/AppContext';

function Remaining() {
  const {budget} = useContext(AppContext);
  const {expenses} = useContext(AppContext);
  //function to calculate remaining budget
  //reduce function to find the total expenses
  const totalExpenses = expenses.reduce((sum, val) => {
    return (sum + val.cost)
  }, 0);
  //Conditional (ternary) operator show red or teal
  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-info'
  
  return (
    <div className={`alert ${alertType}`}>
        <span>Remaining: ${budget - totalExpenses}</span>
    </div>
  )
};

export default Remaining;

