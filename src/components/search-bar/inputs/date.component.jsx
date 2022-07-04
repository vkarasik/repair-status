import React from 'react';

export const Date = (props) => {
  return (
    <div className="col">
      <input
        className="form-control"
        type="date"
        placeholder="Date"
        onChange={props.handleSearchDate}
      />
    </div>
  );
};
