import React from 'react';

export const Order = ({ order }) => {
  let color = '';
  switch (order.status) {
    case 'done':
      color = 'table-success';
      break;
    case 'suspended':
      color = 'table-danger';
      break;
    case 'inprogress':
      color = 'table-primary';
      break;
    case 'sparepart':
      color = 'table-secondary';
      break;
    case 'techrequest':
      color = 'table-warning';
      break;
    default:
      color = '';
  }
  return (
    <tr className={color}>
      <td>{order.id}</td>
      <td>{order.date}</td>
      <td>{order.statustxt}</td>
      <td>{order.imei}</td>
      <td>{order.uin}</td>
      <td>{order.sn}</td>
      <td>{order.description}</td>
    </tr>
  );
};
