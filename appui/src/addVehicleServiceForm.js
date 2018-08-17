import React, { Component } from 'react';
import { vehileServiceContract } from "./setup";
import { serviceCenterContract } from "./setup";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
export class AddVehicleService extends Component{

	constructor(props) {
	    super(props);
	    this.state = {Sid: '',Sdate: '', SCid:'', carid:'', Smileage:'', SrepairType:'', SrepairDetails:'', Scost:''};
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
			var targetName = 'Sdate';
			this.setState({[targetName]: event});

		}
  }

	handleClick(event) {
		window.location = window.location.origin;
		event.preventDefault();
	}

  	handleSubmit(event) {
		// alert('A name was submitted: '+ this.state.country+ this.state.id);
		var isAServiceCenter = serviceCenterContract.isAServiceCenter(this.state.SCid);
		if(isAServiceCenter){
			var date = (new Date(this.state.Sdate)).getTime()/1000;
			vehileServiceContract.setServicebyID(this.state.Sid,date,this.state.SCid,this.state.carid,this.state.Smileage,this.state.SrepairType,this.state.SrepairDetails,this.state.Scost,{gas: 1000000});
			alert("Service Created");
		} else {
			event.preventDefault();
			alert('Enter Service Center ID is invalid')
		}
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
	            	<h3> Vehicle Service Details</h3>
	            	<hr />
		            <form onSubmit={this.handleSubmit}>

		            	<div class="form-group">
		            		<label for="Servicedate">ServiceDate</label>
										<input type="date" name = "Sdate" value={this.state.Sdate} onChange={this.handleChange} class="form-control" placeholder="Enter Date" />
		            	</div>
		            	<div class="form-group">
		            		<label for="ServiceCenterid">Service CenterID</label>
						    		<input type="number" name = "SCid" value={this.state.SCid} onChange={this.handleChange} class="form-control" placeholder="Enter ServiceCenter ID" />
		            	</div>
		            	<div class="form-group">
		            		<label for="CarID">CarID</label>
						    		<input type="number" name = "carid" value={this.state.carid} onChange={this.handleChange} class="form-control" placeholder="Enter Car ID" />
		            	</div>
		            	<div class="form-group">
		            		<label for="Servicemileage">Service Center Mileage</label>
						    		<input type="number" name = "Smileage" value={this.state.Smileage} onChange={this.handleChange} class="form-control" placeholder="Enter Mileage" />
		            	</div>
									<div class="form-group">
										<label for="SrepairType">Repair Type</label>
											<select class="form-control" id="SrepairType" name="SrepairType" value={this.state.SrepairType} onChange={this.handleChange}>
												<option>Full Service</option>
												<option>Oil and filter change</option>
												<option>New spark plugs</option>
												<option>New fuel filter</option>
												<option>Extensive checks for leaks, wear and damage</option>
												<option>Wheels and brakes checked</option>
												<option>Wheel bearings checked for excessive play (wear)</option>
												<option>Brake cylinders, pipes and hoses checked for leaks or damage</option>
												<option>Suspension checked for wear or damage</option>
												<option>Clutch operation checked (manuals)</option>
												<option>Handbrake operation checked and adjusted if necessary</option>
												<option>Brake fluid tested and replaced if necessary</option>
												<option>Reset service light</option>
												<option>Tyres checked for wear, damage and signs of misalignment</option>
												<option>Exhaust system checked for corrosion, damage or leaks</option>
												<option>AC repair</option>
												<option>Timing Belts</option>
												<option>Battery Changed</option>
												<option>Body Damage</option>
												<option>OTHERS</option>
											</select>
		            	</div>
		            	<div class="form-group">
		            		<label for="SrepairDetails">Repair Details</label>
						    		<input type="text" name = "SrepairDetails" value={this.state.SrepairDetails} onChange={this.handleChange} class="form-control" placeholder="Enter Repair Details" />
		            	</div>
                  <div class="form-group">
		            		<label for="Scost">Repair Cost</label>
						    		<input type="number" name = "Scost" value={this.state.Scost} onChange={this.handleChange} class="form-control" placeholder="Enter Repair Cost" />
		            	</div>
		            	<div class="form-group">
						    		<input type="text" type="Submit" class="form-control form-control-button"  />
										<input type="Button" value="Back" class="form-control form-control-homeButton" onClick={this.props.history.goBack} />
		            	</div>
		            </form>
		        </div>
          	</div>
        )
    }
}

export default AddVehicleService;
