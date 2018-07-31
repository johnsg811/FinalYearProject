import React, { Component } from 'react';
import { dealerContract } from "./setup";
export class AddDealers extends Component{

	constructor(props) {
	    super(props);
	    this.state = {did: '',dname: '', dphone:'', dstreet:'', dtown:'', dcounty:''};
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

	handleChange(event) {
		var targetName = event.target.name;
    	this.setState({[targetName]: event.target.value});
  	}

  	handleSubmit(event) {
		// alert('A name was submitted: '+ this.state.country+ this.state.id);
		dealerContract.setDealer(this.state.did,this.state.dname,this.state.dphone,this.state.dstreet,this.state.dtown,this.state.dcounty,{gas: 1000000});
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
	            	<h3> Dealer Details</h3>
	            	<hr />
		            <form onSubmit={this.handleSubmit}>
		            	<div class="form-group">
		            		<label for="did">ID</label>
						    <input type="number" name = "did" value={this.state.did} onChange={this.handleChange} class="form-control" placeholder="Enter ID" required/>
		            	</div>
		            	<div class="form-group">
		            		<label for="DealerName">Name</label>
						    <input type="text" name = "dname" value={this.state.dname} onChange={this.handleChange} class="form-control" placeholder="Enter Name" />
		            	</div>
		            	<div class="form-group">
		            		<label for="DealerPhone">Phone</label>
						    <input type="text" name = "dphone" value={this.state.dphone} onChange={this.handleChange} class="form-control" placeholder="Enter Phone" />
		            	</div>
		            	<div class="form-group">
		            		<label for="DealerStreet">Street</label>
						    <input type="number" name = "dstreet" value={this.state.dstreet} onChange={this.handleChange} class="form-control" placeholder="Enter Strret" />
		            	</div>
		            	<div class="form-group">
		            		<label for="DealerTown">Town</label>
						    <input type="email" name = "dtown" value={this.state.dtown} onChange={this.handleChange} class="form-control" placeholder="Enter Town" />
		            	</div>
		            	<div class="form-group">
		            		<label for="DealerCounty">County</label>
						    <input type="email" name = "dcounty" value={this.state.dcounty} onChange={this.handleChange} class="form-control" placeholder="Enter County" />
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

export default AddDealers;
