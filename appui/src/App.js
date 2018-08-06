import React, { Component } from 'react';
import logo from './logo.svg';
import bgimage from './bgimage.jpg';
import './App.css';
import {AddManufacturerForm} from "./addManufacturerForm";
import {AddVehicles} from "./addVehiclesForm";
import {AddScrappageForm} from "./AddScrappageForm";
import {AddDealers} from "./AddDealers";
import {AddTransactionForm} from "./AddTransactionForm";
import {AddCustomersForm} from "./AddCustomersForm";
import {Welcome} from "./welcome";
import {ViewVehicleInfo} from "./viewVehicleInfo";
import {AddServiceCenter} from "./AddServiceCenterForm";
import {AddVehicleService} from "./addVehicleServiceForm";
import {ViewCustomer} from "./viewCustomer";
import {Home} from "./homepage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/searchCustomer" component={ViewCustomer} />
          <Route path="/searchVehicle" component={ViewVehicleInfo} />
          <Route path="/addCustomer" component={AddCustomersForm} />
          <Route path="/addTransaction" component={AddTransactionForm} />
          <Route path="/addVehicle" component={AddVehicles} />
          <Route path="/addManufacturer" component={AddManufacturerForm} />
        </div>
      </Router>
    );
  }
}

export default App;
