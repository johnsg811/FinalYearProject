import React, { Component } from 'react';
import web3 from 'web3';
import { vehicleContract } from "./setup";
import { manufacturerContract } from "./setup";
import {FormControl} from 'react-bootstrap'
export class AddTransactionForm extends Component{

	constructor(props) {

	    super(props);
	    this.state = {tid: '',tdate: '', did:'', carid:'', cid:'', buyOrSell:'', tamount:'', tmileage:''};

			this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

	handleChange(event) {
		var targetName = event.target.name;
    	this.setState({[targetName]: event.target.value});
  	}

  	handleSubmit(event) {
		// alert('A name was submitted: '+ this.state.country+ this.state.id);
		dealerContract.setBrand(this.state.tid,this.state.tdate,this.state.did,this.state.carid,this.state.cid,this.state.buyOrSell,this.state.tamount,this.state.tmileage,{gas: 1000000});
		let value = dealerContract.getDealer(this.state.did,{gas: 1000000});
		//web3.toAscii(value[1])
		event.preventDefault();
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
	        	<div class="col-md-4">
	            	<h3> Transaction Details</h3>
	            	<hr />
		            <form onSubmit={this.handleSubmit}>
		            	<div class="form-group">
		            		<label for="did">TransactionID</label>
						    		<input type="number" name = "tid" value={this.state.tid} onChange={this.handleChange} class="form-control" placeholder="Enter Transaction ID" required/>
		            	</div>
		            	<div class="form-group">
		            		<label for="did">Date</label>
						    		<input type="text" name = "tdate" value={this.state.tdate} onChange={this.handleChange} class="form-control" placeholder="Transaction Date" />
		            	</div>
		            	<div class="form-group">
		            		<label for="did">DealerID</label>
						    		<input type="text" name = "did" value={this.state.did} onChange={this.handleChange} class="form-control" placeholder="Enter Dealer ID" />
		            	</div>
		            	<div class="form-group">
		            		<label for="did">CarID</label>
						    		<input type="number" name = "carid" value={this.state.cid} onChange={this.handleChange} class="form-control" placeholder="Enter Consumer ID" />
		            	</div>
		            	<div class="form-group">
		            		<label for="did">ConsumerID</label>
						    		<input type="email" name = "cid" value={this.state.dtown} onChange={this.handleChange} class="form-control" placeholder="Enter Town" />
		            	</div>
									<div class="form-group">
										<label for="value">Buy Or Sell</label>
											<select class="form-control" id="buyOrSell">
												<option>Buy</option>
												<option>Sell</option>
											</select>
		            	</div>
									<div class="form-group">
		            		<label for="did">TransactionAmount</label>
						    		<input type="email" name = "tamount" value={this.state.tamount} onChange={this.handleChange} class="form-control" placeholder="Transaction Amount" />
		            	</div>
									<div class="form-group">
		            		<label for="did">VehicleMileage</label>
						    		<input type="email" name = "tmileage" value={this.state.tmileage} onChange={this.handleChange} class="form-control" placeholder="Vehicle Mileage" />
		            	</div>
		            	<div class="form-group">
		            		<label for="did">Transaction Submit</label>
						    		<input type="text" type="Submit" class="form-control"  />
		            	</div>
		            </form>
		        </div>
          	</div>
        )
    }
}

export default AddTransaction;
