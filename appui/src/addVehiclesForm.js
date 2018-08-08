import React, { Component } from 'react';
import web3 from 'web3';
import { vehicleContract } from "./setup";
import { manufacturerContract } from "./setup";
import {FormControl} from 'react-bootstrap'
export class AddVehicles extends Component{

	constructor(props) {
	    super(props);
	    this.state = {id: '',model: '', year:'', value:'', manufacturerID:'', active:''};
	    this.manufacturer = manufacturerContract.getBrands();
	    var count = 0;
			var self = this;
			self.allManufact = [];
	    this.manufacturer.forEach(function(id) {
				self.allManufact[count] = {};
			  self.allManufact[count].id = id.c[0];
				var manufacturer = manufacturerContract.getManufacturerById(id.c[0])[1].match(/.{1,2}/g).map(function(v){
	      	return String.fromCharCode(parseInt(v, 16));
		    }).join('');
			  self.allManufact[count].name = manufacturer;
			  count++;
			});
			this.state.manufacturerID = this.allManufact[0].id
    	this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
			this.handleChangeSelect = this.handleChangeSelect.bind(this);
  	}

		handleChange(event) {
			var targetName = event.target.name;
    	this.setState({[targetName]: event.target.value});
  	}

  	handleSubmit(event) {
		// alert('A name was submitted: '+ this.state.country+ this.state.id);
		vehicleContract.setCar(this.state.id,this.state.model,this.state.year,this.state.value,true,this.state.manufacturerID,{gas: 1000000});
		//let value = manufacturerContract.getBrand(this.state.id,{gas: 1000000});
		//web3.toAscii(value[1])
		event.preventDefault();
	}
	handleChangeSelect(event) {
	  const manufacturerId = event.target.value;
		this.state.manufacturerID = manufacturerId;
	  const manufacturer = this.allManufact.find(u => u.id === manufacturerId);
	  // this.setState({
	  //   value: manufacturer
	  // });
	}
    render(){
        return(
            <div>
	            <div class="col-md-4">
	        	</div>
	        	<div class="col-md-4">
	            	<h3> Vehicle Details</h3>
	            	<hr />
		            <form onSubmit={this.handleSubmit}>
		            	<div class="form-group">
		            		<label for="vehicleID">ID</label>
						    <input type="number" name = "id" value={this.state.id} onChange={this.handleChange} class="form-control" placeholder="Enter ID" required/>
		            	</div>
		            	<div class="form-group">
		            		<label for="Model Name">Model Name</label>
						    <input type="text" name = "model" value={this.state.model} onChange={this.handleChange} class="form-control" placeholder="Enter Name" />
		            	</div>
		            	<div class="form-group">
		            		<label for="Year">Car Year</label>
						    <input type="number" name = "year" value={this.state.year} onChange={this.handleChange} class="form-control" placeholder="Enter Year" />
		            	</div>
		            	<div class="form-group">
		            		<label for="value">Car Value</label>
						    <input type="number" name = "value" value={this.state.value} onChange={this.handleChange} class="form-control" placeholder="Enter Value" />
		            	</div>
		            	<div class="form-group">
									<label for="value">Car Manufacturer</label>
		            		<FormControl id = "manufacturer" componentClass="select" onChange={this.handleChangeSelect}>
			   							{this.allManufact.map((r , i) =>
									     <option
									       key={i}
									       value={r.id}>
									       {r.name}
									     </option>
									  	)}
									</FormControl>
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

export default AddVehicles;
