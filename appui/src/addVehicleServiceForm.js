import React, { Component } from 'react';
import { dealerContract } from "./setup";
export class AddVehicleService extends Component{

	constructor(props) {
	    super(props);
	    this.state = {Sid: '',Sdate: '', SCid:'', carid:'', Smileage:'', SrepairDetails:'', Scost:''};
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

	handleChange(event) {
		var targetName = event.target.name;
    	this.setState({[targetName]: event.target.value});
  	}

  	handleSubmit(event) {
		// alert('A name was submitted: '+ this.state.country+ this.state.id);

		// dealerContract.setServicebyID(this.state.Sid,this.state.Sdate,this.state.SCid,this.state.carid,this.state.Smileage,this.state.SrepairDetails,this.state.Scost,{gas: 1000000});
		// let value = dealerContract.getService(this.state.did,{gas: 1000000});

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
	            	<h3> Vehicle Service Details</h3>
	            	<hr />
		            <form onSubmit={this.handleSubmit}>
		            	<div class="form-group">
		            		<label for="Sid">ID</label>
						    <input type="number" name = "Sid" value={this.state.Sid} onChange={this.handleChange} class="form-control" placeholder="Enter ID" required/>
		            	</div>
		            	<div class="form-group">
		            		<label for="Servicedate">Name</label>
						    <input type="date" name = "Sdate" value={this.state.Sdate} onChange={this.handleChange} class="form-control" placeholder="Enter Date" />
		            	</div>
		            	<div class="form-group">
		            		<label for="ServiceCenterid">Service CenterID</label>
						    <input type="number" name = "SCid" value={this.state.SCid} onChange={this.handleChange} class="form-control" placeholder="Enter ServiceCenter ID" />
		            	</div>
		            	<div class="form-group">
		            		<label for="CarID">CarID</label>
						    <input type="number" name = "carid" value={this.state.carid} onChange={this.handleChange} class="form-control" placeholder="Enter Car ID" />
		            	</div>
		            	<div class="form-group">
		            		<label for="Servicemileage">Service Center Mileage</label>
						    <input type="number" name = "Smileage" value={this.state.Smileage} onChange={this.handleChange} class="form-control" placeholder="Enter Mileage" />
		            	</div>
		            	<div class="form-group">
		            		<label for="SrepairDetails">Repair Details</label>
						    <input type="text" name = "SrepairDetails" value={this.state.SrepairDetails} onChange={this.handleChange} class="form-control" placeholder="Enter Repair Details" />
		            	</div>
                  <div class="form-group">
		            		<label for="Scost">Repair Cost</label>
						    <input type="number" name = "Scost" value={this.state.Scost} onChange={this.handleChange} class="form-control" placeholder="Enter Repair Cost" />
		            	</div>
		            	<div class="form-group">
		            		<label for="Submit">Submit</label>
						    <input type="text" type="Submit" class="form-control"  />
		            	</div>
		            </form>
		        </div>
          	</div>
        )
    }
}

export default AddVehicleService;
