import React, { Component } from 'react';
import web3 from 'web3';
import { vehicleContract } from "./setup";
import { manufacturerContract } from "./setup";
import { transactionContract } from "./setup";
import {FormControl} from 'react-bootstrap'
export class ViewVehicleDetails extends Component{

	  constructor(props) {
	    super(props);
      // console.log(match.params)
      this.vehicle = vehicleContract.getCar(props.match.params.id);
      this.vehicleInfo = {};
      this.vehicleInfo.vehicleId = parseInt(props.match.params.id);
      this.vehicleInfo.manufacturerId = parseInt(this.vehicle[5])
      this.vehicleInfo.manufacturerName = manufacturerContract.getManufacturerById(this.vehicleInfo.manufacturerId)[1].match(/.{1,2}/g).map(function(v){
        return String.fromCharCode(parseInt(v, 16));
      }).join('');
      this.vehicleInfo.model = this.vehicle[1].match(/.{1,2}/g).map(function(v){
        return String.fromCharCode(parseInt(v, 16));
      }).join('');
      this.vehicleInfo.year = parseInt(this.vehicle[2])
      this.vehicleInfo.scrappage = this.vehicle[4]
      // this.manufacturer = manufacturerContract.getManufacturerById();
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
  	            	<h3> Vehicle Information</h3>
  	            	<hr />
  		            <form>
  		            	<div class="form-group">
  		            		<label for="vehicleID">Vehicle ID: </label>
  						        <label for="vehicleID">{this.vehicleInfo.vehicleId}</label>
  		            	</div>
                    <div class="form-group">
  		            		<label for="vehicleID">Manufacturer Name: </label>
  						        <label for="vehicleID">{this.vehicleInfo.manufacturerName}</label>
  		            	</div>
                    <div class="form-group">
  		            		<label for="vehicleID">Model Name: </label>
  						        <label for="vehicleID">{this.vehicleInfo.model}</label>
  		            	</div>
                    <div class="form-group">
  		            		<label for="vehicleID">Production Year:</label>
  						        <label for="vehicleID">{this.vehicleInfo.year}</label>
  		            	</div>
                    <div class="form-group">
  		            		<label for="vehicleID">Scrapped: </label>
  						        <label for="vehicleID">{this.vehicleInfo.scrappage ? 'Yes' : 'No'}</label>
  		            	</div>
  		            </form>
  		        </div>
          	</div>
        )
    }
}

export default ViewVehicleDetails;
