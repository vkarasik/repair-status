import React, { Component } from 'react';
import './App.css';
import { OrderList } from './components/order-list/order-list.component';
import { SearchBar } from './components/search-bar/search-bar.component';
import orders from './data/orders.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      searchID: '',
      searchDate: '',
      searchStatus: ''
    };
  }

  componentDidMount() {
    this.setState({ orders: orders });
  }

  handleSearchStatus = (e) => {
    this.setState({ searchStatus: e.target.value });
  };

  handleSearchID = (e) => {
    this.setState({ searchID: e.target.value });
  };

  handleSearchDate = (e) => {
    this.setState({ searchDate: e.target.value });
  };

  render() {
    const { orders, searchStatus, searchID, searchDate } = this.state;
    const filteredOrders = orders
      .filter((order) => {
        if (searchStatus === 'all' || searchStatus === '') {
          return true;
        }
        return order.status === searchStatus;
      })
      .filter((order) => {
        const ids = `${order.id} ${order.sn} ${order.uin} ${order.imei}`;
        const regex = new RegExp(`(^${searchID})|(\\b${searchID})`, 'ig');
        return ids.search(regex) === -1 ? false : true;
      })
      .filter((order) => {
        if (searchDate === '') {
          return true;
        }
        return order.date === searchDate;
      });

    return (
      <div className="App ">
        <h1>Check Order Status</h1>
        <SearchBar
          handleSearchStatus={this.handleSearchStatus}
          handleSearchID={this.handleSearchID}
          handleSearchDate={this.handleSearchDate}
        />
        <OrderList orders={filteredOrders} />
      </div>
    );
  }
}

export default App;
