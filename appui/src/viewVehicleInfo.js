import React, { Component } from 'react';
import web3 from 'web3';
import { vehicleContract } from "./setup";
import { manufacturerContract } from "./setup";
import {FormControl} from 'react-bootstrap'
export class ViewVehicleInfo extends Component{

	constructor(props) {
	    super(props);
	    this.state = {vehicleId: ''};

      this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

    handleChange(event) {
			var targetName = event.target.name;
    	this.setState({[targetName]: event.target.value});
  	}

  	handleSubmit(event) {
		// alert('A name was submitted: '+ this.state.country+ this.state.id);
		this.vehicleInfo = vehicleContract.getCar(this.state.vehicleId,{gas: 1000000});
		//let value = manufacturerContract.getBrand(this.state.id,{gas: 1000000});
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
  	            	<h3> Vehicle Information</h3>
  	            	<hr />
  		            <form onSubmit={this.handleSubmit}>
  		            	<div class="form-group">
  		            		<label for="vehicleID">Vehicle ID</label>
  						        <input type="number" name = "vehicleId" value={this.state.vehicleId} onChange={this.handleChange} class="form-control" placeholder="Enter Vehicle ID" required/>
  		            	</div>
  		            	<div class="form-group">
  										<input type="text" type="Submit" class="form-control"  />
  									</div>
  		            </form>
  		        </div>
          	</div>
        )
    }
}

export default ViewVehicleInfo;
