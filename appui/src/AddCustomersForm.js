import React, { Component } from 'react';
import { customerContract } from "./setup";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
export class AddCustomersForm extends Component{

	constructor(props) {
	    super(props);
	    this.state = {cid: '',cname: '', cdob:'', clicencenum:'', cstreet:'', dtown:'', dcounty:''};
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
			this.handleClick = this.handleClick.bind(this);
  	}

		handleChange(event) {
			if(event.target){
				var targetName = event.target.name;
	    	this.setState({[targetName]: event.target.value});
			}
			else{
				var targetName = 'cdob';
				this.setState({[targetName]: event});

			}
  	}

  	handleSubmit(event) {
			// alert('A name was submitted: '+ this.state.country+ this.state.id);
			var isCustomer = customerContract.isACustomer(parseInt(this.state.cid));
			if(!isCustomer){
				var date = (new Date(this.state.cdob)).getTime()/1000;
				customerContract.setClient(this.state.cid,this.state.cname,date,this.state.clicencenum,
					this.state.dstreet,this.state.dtown,this.state.dcounty,{gas: 1000000});
				let value = customerContract.getClient(parseInt(this.state.did));
				alert('Customer created!')
			}
			else {
				event.preventDefault();
				alert("Customer ID already exists");
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
            <div >
	            <div class="col-md-4">
	        		</div>
	        	<div class="col-md-4 divbox">
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
										<input type="date" name = "cdob" value={this.state.cdob} onChange={this.handleChange} class="form-control" placeholder="Enter Name" />
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
						    		<input type="Submit" class="form-control form-control-button" />
										<input type="Button" value="Back" class="form-control form-control-homeButton" onClick={this.props.history.goBack} />
		            	</div>
		            </form>
		        </div>
          	</div>
        )
    }
}

export default AddCustomersForm;
