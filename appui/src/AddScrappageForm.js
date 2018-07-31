import React, { Component } from 'react';
import { scrappageContract } from "./setup";
export class AddScrappageForm extends Component{

	constructor(props) {
	    super(props);
	    this.state = {carid: '',scrapDate: ''};

    	this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

	handleChange(event) {
		var targetName = event.target.name;
    	this.setState({[targetName]: event.target.value});
  	}

  	handleSubmit(event) {
		// alert('A name was submitted: '+ this.state.country+ this.state.id);
		scrappageContract.setScraps(this.state.carid,this.state.scrapDate,{gas: 1000000});
		let value = scrappageContract.getScrap(this.state.carid,{gas: 1000000});
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
	            	<h3> Scappage Details</h3>
	            	<hr />
		            <form onSubmit={this.handleSubmit}>
		            	<div class="form-group">
		            		<label for="carId">ID</label>
						    <input type="number" name = "carid" value={this.state.carid} onChange={this.handleChange} class="form-control" placeholder="Enter VehileID" required/>
		            	</div>
		            	<div class="form-group">
		            		<label for="ScrappageDate">Scappage Date</label>
						    <input type="text" name = "scrapDate" value={this.state.scrapDate} onChange={this.handleChange} class="form-control" placeholder="Enter Scappage Date" />
		            	</div>
		            	<div class="form-group">
		            		<label for="Submit">Website</label>
						    <input type="text" type="Submit" class="form-control"  />
		            	</div>
		            </form>
		        </div>
          	</div>
        )
    }
}

export default AddScrappageForm;
