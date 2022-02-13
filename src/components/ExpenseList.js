import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';


/**
 * 
 * state that holds the filtered list
 * state that hold input field text
 * make it lower case
 * crate a new array 
 */

const ExpenseList = () => {
	const { expenses } = useContext(AppContext);

	const [filteredExpenses, setFilteredExpenses] = useState(expenses || [])

	useEffect(() => {
		setFilteredExpenses(expenses);
	}, [expenses]);


	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) => (
			filteredExpense.name.toLowerCase().includes(event.target.value)
		))
		setFilteredExpenses(searchResults)
	};

	return (
		<div>
			<input
				className='form-control mb-3'
				placeholder='type in search...'
				type='text'
				onChange={handleChange}
			/>
			<ul className='list-group'>
				{filteredExpenses.map((expense, idx) => (
					<ExpenseItem key={idx} id={expense.id} name={expense.name} cost={expense.cost} />
				))}
			</ul>
		</div>
		
	);
};

export default ExpenseList;








