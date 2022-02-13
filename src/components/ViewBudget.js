import React from 'react';

export const ViewBudget =({budget, handleEditClick}) => {
    return (
        <div>
            <span>Budget: ${budget}</span>
            <button type="button" className="btn btn-primary" onClick={handleEditClick}>
            Edit
            </button>
        </div>
    )
};

