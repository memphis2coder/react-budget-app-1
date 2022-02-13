import React, {useState, useContext} from 'react';
/**Importing AppContext and useContext */ 
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
  /**Getting dispatch from our global state; Dispatching an action */
  const { dispatch } = useContext(AppContext);

	const [name, setName] = useState('');
	const [cost, setCost] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
    //create a new expense object
		const expense = {
			id: uuidv4(),
			name: name,
			cost: parseInt(cost),
		};
    // the payload is the new expense we just created 
		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});
    //clear input fields after submit
    setName('');
    setCost('')
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            required='required'
            type="text" 
            className="form-control" 
            id="name" 
            value={name} 
            onChange={(event) => setName(event.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="cost" className="form-label">Cost</label>
          <input 
            required='required'
            type="text" 
            className="form-control" 
            id="cost" 
            value={cost}
            onChange={(event) => setCost(event.target.value)}/>
        </div>
        <div>
        <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  ) 
};

export default AddExpenseForm;
