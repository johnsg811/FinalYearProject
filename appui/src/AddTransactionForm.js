import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import web3 from 'web3';
import { vehicleContract } from "./setup";
import { manufacturerContract } from "./setup";
import { transactionContract } from "./setup";
import {FormControl} from 'react-bootstrap';
// import $ from 'jquery';
export class AddTransactionForm extends Component{

	constructor(props) {

	    super(props);
	    this.state = {tid: '',tdate: '', did:'', carid:'', cid:'', buyOrSell:'', tamount:'', tmileage:''};

			this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
			this.handleClick = this.handleClick.bind(this);
  	}

		componentDidMount() {

	  }

	handleChange(event) {
		if(event.target){
			var targetName = event.target.name;
    	this.setState({[targetName]: event.target.value});
		}
		else{
			var targetName = 'tdate';
			this.setState({[targetName]: event});

		}
  }

	handleClick(event) {
		window.location = window.location.origin;
		event.preventDefault();
	}

  	handleSubmit(event) {
		// alert('A name was submitted: '+ this.state.country+ this.state.id);
		// var date = (this.state.tdate._d.getTime()/1000);
		var date = (new Date(this.state.tdate)).getTime()/1000;
		transactionContract.setTransaction(this.state.tid,date,this.state.did,this.state.carid,this.state.cid,this.state.buyOrSell,this.state.tamount,this.state.tmileage,{gas: 1000000});
		let value = transactionContract.getTransactionDetail(this.state.tid,{gas: 1000000});
		//web3.toAscii(value[1])
		alert("Transaction Completed");
	}
    render(){
        // let movieList=this.props.movies.map((movie,i)=>
        // <tr key={i}>
        //     <td onClick={this.handleChange.bind(this,movie.name)}>{movie.name}</td>
        //     <td>{movie.rating}</td>
        // </tr>)
        return(
            <div>
	            <div class="col-md-4">
	        	</div>
	        	<div class="col-md-4 divbox">
	            	<h3> Transaction Details</h3>
	            	<hr />
		            <form onSubmit={this.handleSubmit}>

		            	<div class="form-group">
		            		<label for="TransactionDate">TransactionDate</label>
										<input type="date" name = "tdate" value={this.state.tdate} onChange={this.handleChange} class="form-control" placeholder="Enter Date" />
									</div>
		            	<div class="form-group">
		            		<label for="DealerID">DealerID</label>
						    		<input type="number" name = "did" value={this.state.did} onChange={this.handleChange} class="form-control" placeholder="Enter Dealer ID" />
		            	</div>
		            	<div class="form-group">
		            		<label for="CarID">CarID</label>
						    		<input type="number" name = "carid" value={this.state.carid} onChange={this.handleChange} class="form-control" placeholder="Enter Consumer ID" />
		            	</div>
		            	<div class="form-group">
		            		<label for="ConsumerID">ConsumerID</label>
						    		<input type="text" name = "cid" value={this.state.cid} onChange={this.handleChange} class="form-control" placeholder="Enter Town" />
		            	</div>
									<div class="form-group">
										<label for="BuyOrSell">Buy Or Sell</label>
											<select class="form-control" id="buyOrSell" name="buyOrSell" value={this.state.buyOrSell} onChange={this.handleChange}>
												<option>Buy</option>
												<option>Sell</option>
											</select>
		            	</div>
									<div class="form-group">
		            		<label for="TransactionAmount">TransactionAmount</label>
						    		<input type="number" name = "tamount" value={this.state.tamount} onChange={this.handleChange} class="form-control" placeholder="Transaction Amount" />
		            	</div>
									<div class="form-group">
		            		<label for="VehicleMileage">VehicleMileage</label>
						    		<input type="number" name = "tmileage" value={this.state.tmileage} onChange={this.handleChange} class="form-control" placeholder="Vehicle Mileage" />
		            	</div>
		            	<div class="form-group">
						    		<input type="text" type="Submit" class="form-control form-control-button"  />
										<input type="Button" value="Back" class="form-control form-control-homeButton" onClick={this.props.history.goBack}  />
		            	</div>
		            </form>
		        </div>
          	</div>
        )
    }
}

export default AddTransactionForm;
