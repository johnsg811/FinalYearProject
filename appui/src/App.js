import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {AddManufacturerForm} from "./addManufacturerForm";
import {AddVehicles} from "./addVehiclesForm";
import {AddScrappageForm} from "./AddScrappageForm";
import {AddDealers} from "./AddDealers";
import {AddTransactionForm} from "./AddTransactionForm";
import {AddCustomersForm} from "./AddCustomersForm";
import {Welcome} from "./welcome";
import {ViewVehicleInfo} from "./viewVehicleInfo"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
         <AddCustomersForm />
      </div>
    );
  }
}

export default App;
