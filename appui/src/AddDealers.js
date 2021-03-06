import React, { Component } from 'react';
import { dealerContract } from "./setup";
export class AddDealers extends Component{

	constructor(props) {
	    super(props);
	    this.state = {did: '',dname: '', dphone:'', dstreet:'', dtown:'', dcounty:''};
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
		var isDealer = dealerContract.isADealer(parseInt(this.state.did));
		if(!isDealer){
			dealerContract.setDealer(this.state.did,this.state.dname,this.state.dphone,this.state.dstreet,this.state.dtown,this.state.dcounty,{gas: 1000000});
			let value = dealerContract.getDealer(this.state.did,{gas: 1000000});
			alert('Dealer Created')
		} else{
			event.preventDefault();
			alert("Dealer ID already exists");
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
						    <input type="number" name = "dphone" value={this.state.dphone} onChange={this.handleChange} class="form-control" placeholder="Enter Phone" />
		            	</div>
		            	<div class="form-group">
		            		<label for="DealerStreet">Street</label>
						    <input type="text" name = "dstreet" value={this.state.dstreet} onChange={this.handleChange} class="form-control" placeholder="Enter Strret" />
		            	</div>
		            	<div class="form-group">
		            		<label for="DealerTown">Town</label>
						    <input type="text" name = "dtown" value={this.state.dtown} onChange={this.handleChange} class="form-control" placeholder="Enter Town" />
		            	</div>
		            	<div class="form-group">
		            		<label for="DealerCounty">County</label>
						    <input type="text" name = "dcounty" value={this.state.dcounty} onChange={this.handleChange} class="form-control" placeholder="Enter County" />
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

export default AddDealers;
