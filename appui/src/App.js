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
import {ViewVehicleDetails} from "./viewVehicleDetails";
import {ViewCustomerInfo} from "./viewCustomerInfo";
import {ViewCustomerDetails} from "./viewCustomerDetails";
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
          <title>AutoHistory</title>
          <a class="page-banner" href="/"><h1>AutoHistory</h1></a>
          <Route exact path="/" component={Home} />
          <Route path="/searchCustomer" component={ViewCustomerInfo} />
          <Route path="/viewCustomerDetails/:id" component={ViewCustomerDetails} />
          <Route path="/searchVehicle" component={ViewVehicleInfo} />
          <Route path="/viewVehicleDetails/:id" component={ViewVehicleDetails} />
          <Route path="/addCustomer" component={AddCustomersForm} />
          <Route path="/addDealer" component={AddDealers} />
          <Route path="/addVehicle" component={AddVehicles} />
          <Route path="/addTransaction" component={AddTransactionForm} />
          <Route path="/addManufacturer" component={AddManufacturerForm} />
          <Route path="/addScrappage" component={AddScrappageForm} />
          <Route path="/addServiceCenter" component={AddServiceCenter} />
          <Route path="/addVehicleService" component={AddVehicleService} />
        </div>
      </Router>
    );
  }
}

export default App;
