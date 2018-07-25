import React, { Component } from 'react';
export class Welcome extends Component{

	constructor(props) {
	    super(props);
	    this.state = {id: '',type: ''};

    	this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleChange(event) {
		var targetName = event.target.name;
    	this.setState({[targetName]: event.target.value});
  	}

  	handleSubmit(event) {
		// alert('A name was submitted: '+ this.state.country+ this.state.id);
		// manufacturerContract.setBrand(this.state.id,this.state.name,this.state.country,this.state.phone,this.state.website,{gas: 1000000});
		// let value = manufacturerContract.getBrand(this.state.id,{gas: 1000000});
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
            	<div class="col-md-2"></div>
	            <div class="col-md-4">
	            	<form onSubmit={this.handleSubmit}>
	            		<div class="form-group">
						    <input type="number" name = "signIn" value={this.state.id} onChange={this.handleChange} class="form-control" placeholder="Enter ID" required/>
		            	</div>
		            	<div class="form-group">
		            		<label for="sel1">Select list:</label>
						    <select class="form-control" id="sel1" name="type">
						    	<option>Manufacturer</option>
						    	<option>Customer</option>
						    	<option>Dealer</option>
						    	<option>Service Centers</option>
						    </select>
		            	</div>
		            	<div class="form-group">
		            		<input type="text" value = "Sign In" type="Submit" class="form-control btn btn-success"  />
		            	</div>
	            	</form>
	        	</div>
	        	<div class="col-md-4">
	            	<form>
		            	<div class="form-group">
		            		<label for="sel1">Select list:</label>
						    <select class="form-control" id="sel1">
						    	<option>Customer</option>
						    	<option>Dealer</option>
						    	<option>Service Centers</option>
						    </select>
		            	</div>
		            	<div class="form-group">
						    <input type="button" value = "Sign Up" class="form-control btn btn-success" />
		            	</div>
	            	</form>
	        	</div>
          	</div>
        )
    } 
}

export default Welcome;