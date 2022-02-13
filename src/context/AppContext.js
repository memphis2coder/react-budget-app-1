import { useReducer } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from 'uuid';

/**context object created!; this is the data */
const initialState = {
	budget: 2000,
	expenses: [
		{ id: uuidv4(), name: 'shopping', cost: 40 },
		{ id: uuidv4(), name: 'holiday', cost: 400 },
		{ id: uuidv4(), name: 'car service', cost: 50 },
	],
};
/** useReducer update our reducer to handle the action and update the state. */
const AppReducer = (state, action) => {
	switch (action.type) { 
		case 'ADD_EXPENSE': //action type
			return {
				...state, // copy of the current state
				expenses: [...state.expenses, action.payload], //copy of the current expenses & adds the new expenses to the end
			};
		case 'DELETE_EXPENSE' :
			return {
				...state,// copy of current state
				expenses: state.expenses.filter( //return new array that does not have expense id  
					(expense) => expense.id !== action.payload
				)
			};
		case 'SET_BUDGET':
			return {
				...state,
				budget: action.payload
			}
		default:
			return state;
	}
};
/**createContext */
export const AppContext = createContext();
/**The provider is a component that wraps the components which we want to pass the state to. 
 * We use it in conjunction with the useReducer hook to actually store the global state. */
 export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				budget: state.budget,
				expenses: state.expenses,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

