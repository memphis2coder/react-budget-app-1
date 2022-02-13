import React, {useState} from 'react';

export const EditBudget = ({budget, handleSaveClick}) => {
    const [value, setValue] = useState(budget);
    return (
        <div>
        <input
            required='required'
            type='number'
            value={value}
            id='name'
            onChange={(event) => setValue(event.target.value)}
        />
            
            <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => handleSaveClick(value)}
                 
            >
            Save
            </button>
        </div>
    )
};