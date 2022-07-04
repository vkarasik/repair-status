import React from 'react';

export const Number = (props) => {
  return (
    <div className="col">
      <input
        className="form-control"
        type="text"
        placeholder="Order ID / IMEI / UIN / SN"
        onChange={props.handleSearchID}
      />
    </div>
  );
};
