import React from 'react';
import { Order } from '../order/order.component';

export const OrderList = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Start Date</th>
          <th>Order Status</th>
          <th>IMEI</th>
          <th>UIN</th>
          <th>SN</th>
          <th>Issue</th>
        </tr>
      </thead>
      <tbody>
        {props.orders.length ? (
          props.orders.map((order) => {
            return <Order key={order.id} order={order} />;
          })
        ) : (
          <tr>
            <td colSpan={7}>
              Sorry! Nothing was found. Please, try change your request.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
