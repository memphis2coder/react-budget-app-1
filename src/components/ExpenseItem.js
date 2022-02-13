import React from 'react';
import {TiDelete} from 'react-icons/ti';
import { AppContext} from '../context/AppContext';
import { useContext } from 'react';


const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);
  
  //dispatch an action function
  const handleDeleteExpense = () => {
    dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
  }
  return (
    <div>
        <li className="list-group-item d-flex justify-content-between align-items-center">
        {props.name}
            <div>
                <span className="badge bg-primary rounded-pill mr-3">${props.cost}</span>
                
                <TiDelete size="1.6rem" color="red" onClick={handleDeleteExpense} />
                
                
            </div>
        </li>
    </div>
  )
};

export default ExpenseItem;




