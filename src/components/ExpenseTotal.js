import React from 'react';
import {AppContext} from '../context/AppContext';
import {useContext} from 'react';


const ExpenseTotal = () => {
  //import expenses data from AppContext
  //Taking the expenses from state
  const {expenses} = useContext(AppContext);
  //reduce function to find the total expenses
  const totalExpenses = expenses.reduce((sum, val) => {
    return (sum + val.cost)
  }, 0);
  return (
    <div className='alert alert-primary'>
        <span>Expense Total: ${totalExpenses}</span>
    </div>
  )
};

export default ExpenseTotal;



