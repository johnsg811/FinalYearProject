import React, { Component } from 'react';
import { scrappageContract } from "./setup";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
export class Home extends Component{

	constructor(props) {
	    super(props);
    	this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}



    handleChange(event) {
			this.props.history.push(event.target.value)
  	}

  	handleSubmit(event) {
  		event.preventDefault();
  	}

    render(){
        return(
            <div>
              <h1 align="center">Welcome to AutoHistory</h1>
              <div>
                <div class="col-md-2"></div>
  	            <div class="col-md-4">
  	               <form onSubmit={this.handleSubmit}>
  		            	<div class="form-group">

		  						    <select class="form-control" id="searchSelect" name="searchSelect" onChange={this.handleChange}>
												<option value="">Search For:</option>
		  				  				<option value="searchCustomer">Customer</option>
		  						    	<option value="searchVehicle">Vehicle Details</option>
		  						    </select>
  		            	</div>
  	            	</form>
  	        	   </div>
  	        	     <div class="col-md-4">
  	            	<form>
  		            	<div class="form-group">

		  						    <select class="form-control" id="addSelect" onChange={this.handleChange}>
												<option value="">Add:</option>
		  						    	<option value="addCustomer">Customer</option>
		                    <option value="addVehicle">Vehicle</option>
		  						    	<option value="addDealer">Dealer</option>
		  						    	<option value="">Service Centers</option>
		                    <option value="addTransaction">Transaction</option>
		                    <option value="addScrappage">Vehicle Scrappage</option>
		  						    </select>
  		            	</div>
  	            	</form>
  	        	</div>
            	</div>
            </div>


        )
    }
}

export default Home;
