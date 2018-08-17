import React, { Component } from 'react';
import { scrappageContract } from "./setup";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
export class AddScrappageForm extends Component{

	constructor(props) {
	    super(props);
	    this.state = {carid: '',scrapDate: ''};

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
			var targetName = 'scrapDate';
			this.setState({[targetName]: event});

		}
  }

	handleClick(event) {
		window.location = window.location.origin;
		event.preventDefault();
	}
  	handleSubmit(event) {
		// alert('A name was submitted: '+ this.state.country+ this.state.id);
		var date = (new Date(this.state.scrapDate)).getTime()/1000;
		scrappageContract.setScraps(this.state.carid,date,{gas: 1000000});
		let value = scrappageContract.getScrap(this.state.carid,{gas: 1000000});
		//web3.toAscii(value[1])
		// event.preventDefault();
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
		            	<h3> Scappage Details</h3>
		            	<hr />
			            <form onSubmit={this.handleSubmit}>
			            	<div class="form-group">
			            		<label for="carId">ID</label>
							    <input type="number" name = "carid" value={this.state.carid} onChange={this.handleChange} class="form-control" placeholder="Enter VehileID" required/>
			            	</div>
			            	<div class="form-group">
			            		<label for="ScrappageDate">ScappageDate</label>
											<input type="date" name = "scrapDate" value={this.state.scrapDate} onChange={this.handleChange} class="form-control" placeholder="Enter Date" />
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

export default AddScrappageForm;
