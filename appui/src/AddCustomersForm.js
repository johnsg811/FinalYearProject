import React, { Component } from 'react';
import { customerContract } from "./setup";
export class AddCustomersForm extends Component{

	constructor(props) {
	    super(props);
	    this.state = {cid: '',cname: '', cdob:'', clicencenum:'', cstreet:'', dtown:'', dcounty:''};
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

	handleChange(event) {
		var targetName = event.target.name;
    	this.setState({[targetName]: event.target.value});
  	}

  	handleSubmit(event) {
		// alert('A name was submitted: '+ this.state.country+ this.state.id);
		customerContract.setClient(this.state.cid,this.state.cname,this.state.cdob,this.state.clicencenum,this.state.dstreet,this.state.dtown,this.state.dcounty,{gas: 1000000});
		let value = customerContract.getClient(this.state.did,{gas: 1000000});
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
	            	<h3> Customer Details</h3>
	            	<hr />
		            <form onSubmit={this.handleSubmit}>
		            	<div class="form-group">
		            		<label for="CustomerID">ID</label>
						    <input type="number" name = "cid" value={this.state.cid} onChange={this.handleChange} class="form-control" placeholder="Enter ID" required/>
		            	</div>
		            	<div class="form-group">
		            		<label for="CustomerName">Name</label>
						    <input type="text" name = "cname" value={this.state.cname} onChange={this.handleChange} class="form-control" placeholder="Enter Name" />
		            	</div>
		            	<div class="form-group">
		            		<label for="DateOfBirth">DateOfBirth</label>
						    <input type="text" name = "cdob" value={this.state.cdob} onChange={this.handleChange} class="form-control" placeholder="Date of Birth" />
		            	</div>
									<div class="form-group">
		            		<label for="LicenceNumber">LicenceNumber</label>
						    <input type="number" name = "clicencenum" value={this.state.clicencenum} onChange={this.handleChange} class="form-control" placeholder="Enter Licence Number" />
		            	</div>
		            	<div class="form-group">
		            		<label for="Street">Street</label>
						    <input type="text" name = "dstreet" value={this.state.dstreet} onChange={this.handleChange} class="form-control" placeholder="Enter Street" />
		            	</div>
		            	<div class="form-group">
		            		<label for="Town">Town</label>
						    <input type="text" name = "dtown" value={this.state.dtown} onChange={this.handleChange} class="form-control" placeholder="Enter Town" />
		            	</div>
		            	<div class="form-group">
		            		<label for="County">County</label>
						    <input type="text" name = "dcounty" value={this.state.dcounty} onChange={this.handleChange} class="form-control" placeholder="Enter County" />
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

export default AddCustomersForm;
