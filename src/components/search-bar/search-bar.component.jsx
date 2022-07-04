import React from 'react';
import { Status } from './inputs/status.component';
import { Number } from './inputs/number.component';
import { Date } from './inputs/date.component';

export const SearchBar = (props) => {
  return (
    <div className="filters row">
      <Number handleSearchID={props.handleSearchID} />
      <Status handleSearchStatus={props.handleSearchStatus} />
      <Date handleSearchDate={props.handleSearchDate} />
    </div>
  );
};
