import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import web3 from 'web3';
import { customerContract } from "./setup";
import { vehicleContract } from "./setup";
import { transactionContract } from "./setup";
import { manufacturerContract } from "./setup";
import {FormControl} from 'react-bootstrap'
import { Tabs, Tab } from 'react-bootstrap';
export class ViewCustomerDetails extends Component{

	  constructor(props) {
	    super(props);
      // console.log(match.params)
      this.customer = customerContract.getClient(props.match.params.id);
      this.customerInfo = {};
      this.customerInfo.cId = parseInt(props.match.params.id);
      //this.customerInfo.manufacturerId = parseInt(this.vehicle[5])
      // this.customerInfo.manufacturerName = manufacturerContract.getManufacturerById(this.vehicleInfo.manufacturerId)[1].match(/.{1,2}/g).map(function(v){
      //   return String.fromCharCode(parseInt(v, 16));
      // }).join('');
      this.customerInfo.cname = this.customer[1].match(/.{1,2}/g).map(function(v){
        return String.fromCharCode(parseInt(v, 16));
      }).join('');

			let date = (new Date(parseInt(this.customer[2])*1000));
			this.customerInfo.cdob = date.getDate().toString() + "-" + (date.getMonth()+1).toString() + "-" + date.getFullYear().toString();
      this.customerInfo.clicencenum = parseInt(this.customer[3])
      this.customerInfo.ccounty = this.customer[6].match(/.{1,2}/g).map(function(v){
        return String.fromCharCode(parseInt(v, 16));
      }).join('');
			this.currCarIDs = transactionContract.getCurrentCarForCust(this.customerInfo.cId);
			this.prevCarIDs = transactionContract.getPrevousCarForCust(this.customerInfo.cId);
			var self = this;
			var count = 0;
			self.currCars = [];
			this.currCarIDs.forEach(function(carID){
				if(parseInt(carID) != 0){
					self.currCars[count] = {};
					var CurrentCar = vehicleContract.getCar(parseInt(carID));
					self.currCars[count].currcarid = carID;
					self.currCars[count].carname = convertBytes32ToString(CurrentCar[1]);
					count++;
				}
			})

			count = 0;
			self.prevCars = [];
			this.prevCarIDs.forEach(function(carID){
				if(parseInt(carID) != 0){
					self.prevCars[count] = {};
					var PreviousCar = vehicleContract.getCar(parseInt(carID));
					var Manufacturer = manufacturerContract.getManufacturerById(parseInt(PreviousCar[5]))
					self.prevCars[count].prevcarid = carID;
					self.prevCars[count].carname = convertBytes32ToString(PreviousCar[1]);
					self.prevCars[count].carmanufacturer = convertBytes32ToString(Manufacturer[1]);
					self.prevCars[count].caryear = parseInt(PreviousCar[2]);
					count++;
				}
			})

			function convertBytes32ToString(value){
				var stringValue = value.match(/.{1,2}/g).map(function(v){
					return String.fromCharCode(parseInt(v, 16));
				}).join('');
				return stringValue;
			}
      //this.customerInfo.ccounty = this.vehicle[4]

      // this.vehicleTrans = transactionContract.getTransactionDetail(props.match.params.id);
      // this.vehicleTransInfo = {};
      // this.vehicleTransInfo.TransactionId = parseInt(props.match.params.id);
      // this.vehicleTransInfo.TransactionAmount = parseInt(this.vehicle[6])
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
  	        	<div class="col-md-4 divbox">
  	            	<h3> Customer Information</h3>
  	            	<hr />
  		            <form>
  		            	<div class="form-group">
  		            		<label for="cid">Customer ID: </label>
  						        <label for="cID">{this.customerInfo.cId}</label>
  		            	</div>
                    <div class="form-group">
  		            		<label for="cname">Customer Name: </label>
  						        <label for="cname">{this.customerInfo.cname}</label>
  		            	</div>
										<div class="form-group">
                      <label for="cdob">Date of Birth: </label>
                      <label for="cdob">{this.customerInfo.cdob}</label>
                    </div>
                    <div class="form-group">
  		            		<label for="clicencenum">LicenceNumber: </label>
  						        <label for="clicencenum">{this.customerInfo.clicencenum}</label>
  		            	</div>
                    <div class="form-group">
                      <label for="ccounty">Customer County: </label>
                      <label for="ccounty">{this.customerInfo.ccounty}</label>
                    </div>
                    <hr />
                    <Tabs className="myTabs" defaultActiveKey={2} id="uncontrolled-tab-example">
										<br />
                      <Tab eventKey={1} title="Current Vehcile">
												{this.currCars.map((r , i) =>
													<div key={i}>
														<Link to={`/viewVehicleDetails/${r.currcarid}`} class="btn btn-info" activeClassName="current">{r.carname}</Link>
														<hr />
													</div>

												)}
                      </Tab>
                      <Tab eventKey={2} title="Previous Vehicle">
												{this.prevCars.map((r , i) =>
													<div key={i}>
													<a class="btn btn-info" data-toggle="modal" data-target={'#'+i+'dealer'}>{r.carname}</a>


													<div class="modal fade" id={i+'dealer'} role="dialog">
														<div class="modal-dialog">

															<div class="modal-content">
																<div class="modal-header">
																	<button type="button" class="close" data-dismiss="modal">&times;</button>
																	<h4 class="modal-title"><b>{r.carname}</b></h4>
																</div>
																<div class="modal-body">
																	<form>
																		<div class="form-group">
																			<label>Manufacturer Name: </label>
																			<label>{r.carmanufacturer}</label>
																		</div>
																		<div class="form-group">
																			<label>Model: </label>
																			<label>{r.carname}</label>
																		</div>
																		<div class="form-group">
																			<label>Production Year: </label>
																			<label>{r.caryear}</label>
																		</div>
																	</form>
																</div>
																<div class="modal-footer">
																	<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
																</div>
															</div>

														</div>
													</div>
													</div>
												)}
                      </Tab>
                    </Tabs>
										<br />
  		            </form>
  		        </div>
          	</div>
        )
    }
}

export default ViewCustomerDetails;
