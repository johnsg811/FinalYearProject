import React, { Component } from 'react';
import { serviceCenterContract } from "./setup";
export class AddServiceCenter extends Component{

	constructor(props) {
	    super(props);
	    this.state = {SCid: '',SCname: '', SCphone:'', SCstreet:'', SCtown:'', SCcounty:''};
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
		var isAServiceCenter = serviceCenterContract.isAServiceCenter(parseInt(this.state.SCid));
		if(!isAServiceCenter){
			serviceCenterContract.setServiceCent(this.state.SCid,this.state.SCname,this.state.SCphone,this.state.SCstreet,this.state.SCtown,this.state.SCcounty,{gas: 1000000});

			alert("Service Center Created");
		} else {
			event.preventDefault();
			alert("Service Center ID already exists");
		}


		//web3.toAscii(value[1])
		// event.preventDefault();
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
	            	<h3> Service Center Details</h3>
	            	<hr />
		            <form onSubmit={this.handleSubmit}>
		            	<div class="form-group">
		            		<label for="SCid">SCID</label>
						    <input type="number" name = "SCid" value={this.state.SCid} onChange={this.handleChange} class="form-control" placeholder="Enter ID" required/>
		            	</div>
		            	<div class="form-group">
		            		<label for="SCname">Name</label>
						    <input type="text" name = "SCname" value={this.state.SCname} onChange={this.handleChange} class="form-control" placeholder="Enter ServiceCenter Name" />
		            	</div>
		            	<div class="form-group">
		            		<label for="SCphone">Phone</label>
						    <input type="number" name = "SCphone" value={this.state.SCphone} onChange={this.handleChange} class="form-control" placeholder="Enter Phone" />
		            	</div>
		            	<div class="form-group">
		            		<label for="SCstreet">Street</label>
						    <input type="text" name = "dstreet" value={this.state.dstreet} onChange={this.handleChange} class="form-control" placeholder="Enter Strret" />
		            	</div>
		            	<div class="form-group">
		            		<label for="SCtown">Town</label>
						    <input type="text" name = "SCtown" value={this.state.SCtown} onChange={this.handleChange} class="form-control" placeholder="Enter Town" />
		            	</div>
		            	<div class="form-group">
		            		<label for="SCcounty">County</label>
						    <input type="text" name = "SCcounty" value={this.state.SCcounty} onChange={this.handleChange} class="form-control" placeholder="Enter County" />
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

export default AddServiceCenter;
