import React from 'react';

export const Status = (props) => {
  return (
    <div className="col">
      <select
        defaultValue={'default'}
        className="form-select"
        onChange={props.handleSearchStatus}
      >
        <option value="default" disabled>
          Choose Status
        </option>
        <option value="all">Show All</option>
        <option value="done">Done</option>
        <option value="inprogress">In progress</option>
        <option value="suspended">Suspended</option>
        <option value="sparepart">Waiting for spare part</option>
        <option value="techrequest">Technical request</option>
      </select>
    </div>
  );
};
