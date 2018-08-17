import React, { Component } from 'react';
import web3 from 'web3';
import { customerContract } from "./setup";
// import { vehicleContract } from "./setup";
import {FormControl} from 'react-bootstrap'
export class ViewCustomerInfo extends Component{

	constructor(props) {
	    super(props);
	    this.state = {cid: ''};

      this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
			this.handleClick = this.handleClick.bind(this);

  	}

    handleChange(event) {
			var targetName = event.target.name;
    	this.setState({[targetName]: event.target.value});
  	}

  	handleSubmit(event) {
		// alert('A name was submitted: '+ this.state.country+ this.state.id);
		var isCustomer = customerContract.isACustomer(parseInt(this.state.cid));
		if(isCustomer){
			this.props.history.push('/viewCustomerDetails/'+this.state.cid)
		} else{
			alert('Invalid Customer ID')
		}

		// window.location = targetName;
		//this.vehicleInfo = vehicleContract.getCar(this.state.vehicleId,{gas: 1000000});
		//let value = manufacturerContract.getBrand(this.state.id,{gas: 1000000});
		//web3.toAscii(value[1])
		event.preventDefault();
	 }

	 handleClick(event) {
 		window.location = window.location.origin;
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
  	        	<div class="col-md-4 divbox">
  	            	<h3> Customer Information</h3>
  	            	<hr />
  		            <form onSubmit={this.handleSubmit}>
  		            	<div class="form-group">
  		            		<label for="cid">Customer ID</label>
  						        <input type="number" name = "cid" value={this.state.cid} onChange={this.handleChange} class="form-control" placeholder="Enter Customer ID" required/>
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

export default ViewCustomerInfo;
