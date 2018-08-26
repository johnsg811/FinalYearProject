import React, { Component } from 'react';
import web3 from 'web3';
import { vehicleContract } from "./setup";
import { manufacturerContract } from "./setup";
import { transactionContract } from "./setup";
import { dealerContract } from "./setup";
import { customerContract } from "./setup";
import { vehileServiceContract } from "./setup";
import { serviceCenterContract } from "./setup";
import { FormControl } from 'react-bootstrap'
import { Tabs, Tab } from 'react-bootstrap';
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

			this.transactionIds = transactionContract.getTransctionsForCar(this.vehicleInfo.vehicleId);
			var count = 0;
			var self = this;
			self.allTransactions = [];
			this.transactionIds.forEach(function(id) {
					self.allTransactions[count] = {};
					var currentTransaction = transactionContract.getTransactionDetail(parseInt(id));
					self.allTransactions[count].tid = parseInt(id);
					let date = (new Date(parseInt(currentTransaction[1])*1000));
					self.allTransactions[count].tdate = date.getDate().toString() + "-" + (date.getMonth()+1).toString() + "-" + date.getFullYear().toString();
					var currTransRel = transactionContract.getTransactionRelations(parseInt(id));
					//Dealer
					var currDealer = dealerContract.getDealer(parseInt(currTransRel[1]));
					self.allTransactions[count].tdealerid = parseInt(currDealer[0]);
					self.allTransactions[count].tdealername = convertBytes32ToString(currDealer[1]);
					self.allTransactions[count].tdealerphone = parseInt(currDealer[2]);
					self.allTransactions[count].tdealerstreet = convertBytes32ToString(currDealer[3]);
					self.allTransactions[count].tdealertown = convertBytes32ToString(currDealer[4]);
					self.allTransactions[count].tdealercounty = convertBytes32ToString(currDealer[5]);
					//Customer
					var currCustomer = customerContract.getClient(parseInt(currTransRel[3]));
					self.allTransactions[count].tcustomer = convertBytes32ToString(currCustomer[1]);
					self.allTransactions[count].ttype = convertBytes32ToString(currentTransaction[2]);
					self.allTransactions[count].tamount = parseInt(currentTransaction[3])
					self.allTransactions[count].tmileage = parseInt(currentTransaction[4])
					count++;
			})
			var test = vehileServiceContract.getServices();
			this.serviceIds = vehileServiceContract.getServiceForCar(this.vehicleInfo.vehicleId);
			var count = 0;
			var self = this;
			self.allServices = [];
			this.serviceIds.forEach(function(id) {
					self.allServices[count] = {};
					var currentService = vehileServiceContract.getService(parseInt(id));
					self.allServices[count].Sid = parseInt(id);
					let date = (new Date(parseInt(currentService[1])*1000));
					self.allServices[count].sdate = date.getDate().toString() + "-" + (date.getMonth()+1).toString() + "-" + date.getFullYear().toString();
					var currServRel = vehileServiceContract.getServiceRelations(parseInt(id));


					//Dealer
					var currServiceCenter = serviceCenterContract.getServiceCent(parseInt(currServRel[1]));
					self.allServices[count].scid = parseInt(currServiceCenter[0]);
					self.allServices[count].scname = convertBytes32ToString(currServiceCenter[1]);
					self.allServices[count].scphone = parseInt(currServiceCenter[2]);
					self.allServices[count].scstreet = convertBytes32ToString(currServiceCenter[3]);
					self.allServices[count].sctown = convertBytes32ToString(currServiceCenter[4]);
					self.allServices[count].scounty = convertBytes32ToString(currServiceCenter[5]);
					//
					var currVehicle = vehicleContract.getCar(parseInt(currServRel[3]));
					self.allServices[count].scar = convertBytes32ToString(currVehicle[1]);
					self.allServices[count].smileage= parseInt(currentService[2])
					self.allServices[count].srepairType = convertBytes32ToString(currentService[3]);
					self.allServices[count].sserviceDetail = convertBytes32ToString(currentService[4])
					self.allServices[count].scost = parseInt(currentService[5])
					count++;
			})

			function convertBytes32ToString(value){
				var stringValue = value.match(/.{1,2}/g).map(function(v){
					return String.fromCharCode(parseInt(v, 16));
				}).join('');
				return stringValue;
			}
			console.log('end');
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
                    <hr />
                    <Tabs className="myTabs" defaultActiveKey={2} id="uncontrolled-tab-example">
										<br />
                      <Tab eventKey={1} title="Vehicle Transaction">
												{this.allTransactions.map((r , i) =>
													<div key={i} >
														<a href={'#transaction'+i} class="btn btn-info" data-toggle="collapse">{r.tdate}</a>
														<div id={'transaction'+i} class="collapse">
															<form>
																<div class="form-group form-group-align">
																	<label for="vehicleID">Transaction ID: </label>
																	<label>{r.tid}</label>
																</div>
																<div class="form-group form-group-align">
																	<label for="vehicleID">Dealer: </label>
																	<a for="vehicleID" data-toggle="modal" data-target={'#'+i+'dealer'}>{r.tdealername}</a>


																  <div class="modal fade" id={i+'dealer'} role="dialog">
																    <div class="modal-dialog">

																      <div class="modal-content">
																        <div class="modal-header">
																          <button type="button" class="close" data-dismiss="modal">&times;</button>
																          <h4 class="modal-title"><b>{r.tdealername}</b></h4>
																        </div>
																        <div class="modal-body">
																					<form>
																						<div class="form-group">
																							<label>Dealer ID: </label>
																							<label>{r.tdealerid}</label>
																						</div>
																						<div class="form-group">
																							<label>Dealer Phone: </label>
																							<label>{r.tdealerphone}</label>
																						</div>
																						<div class="form-group">
																							<label>Street: </label>
																							<label>{r.tdealerstreet}</label>
																						</div>
																						<div class="form-group">
																							<label>Town: </label>
																							<label>{r.tdealertown}</label>
																						</div>
																						<div class="form-group">
																							<label>County: </label>
																							<label>{r.tdealercounty}</label>
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
																<div class="form-group form-group-align">
																	<label for="vehicleID">Customer: </label>
																	<label for="vehicleID">{r.tcustomer}</label>
																</div>
																<div class="form-group form-group-align">
																	<label for="vehicleID">Transaction Type: </label>
																	<label for="vehicleID">{r.ttype}</label>
																</div>
																<div class="form-group form-group-align">
																	<label for="vehicleID">Amount: </label>
																	<label for="vehicleID">{'€' +r.tamount}</label>
																</div>
																<div class="form-group form-group-align">
																	<label for="vehicleID">Mileage: </label>
																	<label for="vehicleID">{r.tmileage+' miles'}</label>
																</div>
															</form>
														</div>
														<hr />
													</div>
												)}
                      </Tab>
                      <Tab eventKey={2} title="Vehicle Repair">
												{this.allServices.map((r , i) =>
													<div key={i}>
														<a href={'#service'+i} class="btn btn-info" data-toggle="collapse">{r.sdate}</a>
														<div id={'service'+i} class="collapse">
															<form>
																<div class="form-group form-group-align">
																	<label for="vehicleID">Service ID: </label>
																	<label>{r.Sid}</label>
																</div>

																<div class="form-group form-group-align">
																	<label for="vehicleID">Service Center: </label>
																	<a for="vehicleID" data-toggle="modal" data-target={'#'+i+'ServiceCenter'}>{r.scname}</a>


																  <div class="modal fade" id={i+'ServiceCenter'} role="dialog">
																    <div class="modal-dialog">

																      <div class="modal-content">
																        <div class="modal-header">
																          <button type="button" class="close" data-dismiss="modal">&times;</button>
																          <h4 class="modal-title"><b>{r.scname}</b></h4>
																        </div>
																        <div class="modal-body">
																					<form>
																						<div class="form-group">
																							<label>ServiceCenter ID: </label>
																							<label>{r.scid}</label>
																						</div>
																						<div class="form-group">
																							<label>Service Center Phone: </label>
																							<label>{r.scphone}</label>
																						</div>
																						<div class="form-group">
																							<label>Street: </label>
																							<label>{r.scstreet}</label>
																						</div>
																						<div class="form-group">
																							<label>Town: </label>
																							<label>{r.sctown}</label>
																						</div>
																						<div class="form-group">
																							<label>County: </label>
																							<label>{r.sccounty}</label>
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
																<div class="form-group form-group-align">
																	<label for="vehicleID">Mileage: </label>
																	<label for="vehicleID">{r.smileage+' miles'}</label>
																</div>
																<div class="form-group form-group-align">
																	<label for="vehicleID">Repair Type: </label>
																	<label for="vehicleID">{r.srepairType}</label>
																</div>
																<div class="form-group form-group-align">
																	<label for="vehicleID">Repair Detail: </label>
																	<label for="vehicleID">{r.sserviceDetail}</label>
																</div>
																<div class="form-group form-group-align">
																	<label for="vehicleID">Repair Cost: </label>
																	<label for="vehicleID">{'€' +r.scost}</label>
																</div>

															</form>
														</div>
														<hr />
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

export default ViewVehicleDetails;
