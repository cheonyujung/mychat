import React from 'react';

export default ({handleExit}) => (
    <button style={{ display: 'table-cell', float: 'right' }} className="btn btn-danger" onClick={handleExit}>Exit</button>
);