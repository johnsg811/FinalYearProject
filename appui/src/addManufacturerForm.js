import React, { Component } from 'react';
import { manufacturerContract } from "./setup";
export class AddManufacturerForm extends Component{

	constructor(props) {
	    super(props);
	    this.state = {id: '',name: '', country:'', phone:'', website:''};

    	this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

	handleChange(event) {
		var targetName = event.target.name;
    	this.setState({[targetName]: event.target.value});
  	}

  	handleSubmit(event) {
		// alert('A name was submitted: '+ this.state.country+ this.state.id);
		manufacturerContract.setBrand(this.state.id,this.state.name,this.state.country,this.state.phone,this.state.website,{gas: 1000000});
		let value = manufacturerContract.getBrand(this.state.id,{gas: 1000000});
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
	            	<h3> Manufacture Details</h3>
	            	<hr />
		            <form onSubmit={this.handleSubmit}>
		            	<div class="form-group">
		            		<label for="manufacturerId">ID</label>
						    <input type="number" name = "id" value={this.state.id} onChange={this.handleChange} class="form-control" placeholder="Enter ID" required/>
		            	</div>
		            	<div class="form-group">
		            		<label for="manufacturerId">Name</label>
						    <input type="text" name = "name" value={this.state.name} onChange={this.handleChange} class="form-control" placeholder="Enter Name" />
		            	</div>
		            	<div class="form-group">
		            		<label for="manufacturerId">Country</label>
						    <input type="text" name = "country" value={this.state.country} onChange={this.handleChange} class="form-control" placeholder="Enter Country" />
		            	</div>
		            	<div class="form-group">
		            		<label for="manufacturerId">Phone</label>
						    <input type="number" name = "phone" value={this.state.phone} onChange={this.handleChange} class="form-control" placeholder="Enter Phone" />
		            	</div>
		            	<div class="form-group">
		            		<label for="manufacturerId">Website</label>
						    <input type="email" name = "website" value={this.state.website} onChange={this.handleChange} class="form-control" placeholder="Enter Website" />
		            	</div>
		            	<div class="form-group">
		            		<label for="manufacturerId">Website</label>
						    <input type="text" type="Submit" class="form-control"  />
		            	</div>
		            </form>
		        </div>
          	</div>
        )
    }
}

export default AddManufacturerForm;
