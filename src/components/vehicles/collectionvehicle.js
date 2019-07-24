import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DatePicker from "react-datepicker";
 import Button from '@material-ui/core/Button';
import "react-datepicker/dist/react-datepicker.css";

import Card from '@material-ui/core/Card';
import Detailspassanger from '../vehicles/detailspassanger'

class Collectionvehicle extends Component {

	 constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      visible: false 
      
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);

  }
 	
  handleChange(date) {
    this.setState({
      startDate: date

    });
  }
   toggleMenu() {
        this.setState({visible: !this.state.visible});
        window.scroll({
		  top: 200,
		  left: 100,
		  behavior: 'smooth'
		});
    }

  

  render() {

    return (
      
      	  <Grid className="total_vehicle_search" item xs={12} sm={12} md={12}  lg={12}	xl={12}>
	      	  	<div className="vehicle_from_text">
	      	  		<Grid container>
	      	  			<Grid item sm={12} md={12} lg={10} xl={10}>

	      	  					<Grid container>
	      	  						<Grid item  sm={3} md={3} lg={3} xl={3}>
										  <div className="" style={{float:'left'}}>
										  		<TextField
										        id="outlined-dense"
										        label="from"
										        className="dense"
										        margin="dense"
										        variant="outlined"
				      							/>
										  </div>
										  
			      							<div className="xx_arrow_right">
			      								<i className="fas fa-arrow-right"></i>
			      							</div>
												
	      	  						</Grid>

				      	  			<Grid item  sm={3} md={3} lg={3} xl={3}>
				      	  				 <div className="" style={{float:'left'}}>
										  		<TextField
										        id="outlined-dense"
										        label="To"
										        className="dense"
										        margin="dense"
										        variant="outlined"
				      							/>
										  </div>
										  
			      							<div className="xx_arrow_right">
			      								<i className="fas fa-arrow-right"></i>
			      							</div>
				      	  			</Grid>
				      	  			<Grid item sm={3} md={3} lg={3} xl={3}>
				      	  				<div className="date_selected_vehicle" style={{position:'absolute'}}>
					                  		<i className="fa fa-calendar icon-new_collection" aria-hidden="true" ></i>
					                  		
									   		<DatePicker
											    selected={this.state.startDate}
											    onChange={this.handleChange}
											    className="date_picker_collection"
											/>
					                  	</div>
				      	  			</Grid>
				      	  			<Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
				      	  				<div className="search_collection_btn">
					      	  				<Button variant="contained" color="secondary">
											     Search
											  </Button>
										  </div>
				      	  			</Grid>
	      	  					</Grid>
	      	  			</Grid>
	      	  			
	      	  		</Grid>
	      	  	</div>


	      	  	<div className="container">
	      	  		<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
	      	  			<div className="header_filter_bus">
	      	  				<p>You may select other nearby routes where we have bus services</p>
	      	  			</div>
	      	  		</Grid>
	      	  		


	      	  		 <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{paddingBottom:'3rem'}}>
	      	  		 	<Grid container className="row_sec">
	      	  		 		<Grid item xs={4} sm={3} md={2} lg={4} xl={4}>
	      	  		 			<div className="travels lh-24 f-bold d-color">
	      	  		 				<h6 className="title"> Ashok travels mandsaur group</h6>
	      	  		 				<h6 className="l-color"> A/C Seater / Sleeper (2+1)</h6>
	      	  		 			</div>
	      	  		 			
	      	  		 		</Grid>
	      	  		 		 <Grid item xs={8} sm={9} md={10} lg={8} xl={8}>
	      	  		 		 	<Grid container>
	      	  		 		 		<Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
			      	  		 			<div className="travels lh-24 f-bold d-color">
			      	  		 				<h6 className="title"> 18:00 </h6>
			      	  		 				<h6 className="pick_up"> pick up</h6>
	      	  		 					</div>
	      	  		 				</Grid>
	      	  		 				<Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
			      	  		 			<h6 className="dur l-color lh-24"> 35h 45m </h6>
	      	  		 				</Grid>
	      	  		 				<Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
			      	  		 			<div className="bp-time f-19 d-color ">
			      	  		 				<h6 className="arrival"> 05:45 </h6>
			      	  		 				<h6 className="pick_up"> dropoff</h6>
			      	  		 			</div>
			      	  		 			
	      	  		 				</Grid>
	      	  		 				<Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
			      	  		 			<h6> Rating </h6>
			      	  		 			<h6> 5</h6>
	      	  		 				</Grid>
	      	  		 				<Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
			      	  		 			<div className="starts_fare">
			      	  		 				<h6 className="starts_price"> Starts from </h6>
			      	  		 				<h6 className="fare_price"> &#8377;200</h6>
			      	  		 			</div>
	      	  		 				</Grid>
	      	  		 				<Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
			      	  		 			<div className="starts_fare">
			      	  		 				<h6 className="starts_price"> Seats Available </h6>
			      	  		 				<h6 className="seats_availbale"> 6</h6>
			      	  		 			</div>	
			      	  		 			
			      	  		 			<div className="show_bus_collection_btn">
								      	  	<Button variant="contained" color="secondary" onClick={this.toggleMenu}>
												View Seat
											</Button>
										</div>
	      	  		 				</Grid>
	      	  		 		 	</Grid>
	      	  		 		 </Grid>
	      	  		 		 


	      	  		 		 <Grid className="selection_seat_from_bus" items xs={12} sm={12} md={12} lg={12} xl={12} style={this.state.visible ? {display:'block'}:{display:'none'}}>
	      	  		 		 	<Grid container spacing={3}>
	      	  		 		 		<Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
	      	  		 		 			<Card className="seatchart">
	      	  		 		 				<Grid container>
	      	  		 		 					<Grid items xs={2} sm={2} md={2} lg={2} xl={2} style={{borderRight: '1px solid #e0e0e0'}}>
	      	  		 		 						<div className="seat-wrap">
	      	  		 		 							<img src="https://res.cloudinary.com/ddkyepakx/image/upload/v1563902752/abhi-operator.svg" alt="driver"/>
	      	  		 		 					
	      	  		 		 						</div>
	      	  		 		 					</Grid>
	      	  		 		 					<Grid className="seat_style_for_table" items xs={7} sm={7} md={7} lg={7} xl={7}>
	      	  		 		 							<table >
															  <tbody>
															    <tr>
															      <td>
															      	<h6 className="seat-management-info">
															      		B2
															      	</h6>
															      </td>
															      <td>
															      	<div className="seat-management-info">B4</div>
															      </td>
															      <td><div className="seat-management-info">B6</div></td>
															      <td>
															      	<div className="seat-management-info">B8</div>
															      </td>
															      <td><div className="seat-management-info">B10</div></td>
															      
															      <td><div className="seat-management-info">B12</div>
															      </td>
															      
															    </tr>
															    <tr>
															      <td>
															      	<h6 className="seat-management-info">
															      		B1
															      	</h6>
															      </td>
															      <td>
															      	<div className="seat-management-info">B3</div>
															      </td>
															      <td><div className="seat-management-info">B5</div></td>
															      <td>
															      	<div className="seat-management-info">B7</div>
															      </td>
															      <td><div className="seat-management-info">B9</div></td>
															      <td>
															      	<div className="seat-management-info">B11</div>
															      </td>
															      
															      
															    </tr>
															  	</tbody>
														</table>

														<table className="seat_style_for_table">
															  <tbody>
															    <tr>
															      <td></td>
															      	
															      <td>
															      	<div className="seat-management-info">A2</div>
															      </td>
															      <td><div className="seat-management-info">
															      			B4
															      		</div>
															      </td>
															      <td>
															      	<div className="seat-management-info">A6</div>
															      </td>
															      <td><div className="seat-management-info">A8</div></td>
															      <td>
															      	<div className="seat-management-info">A10</div>
															      </td>
															      
															    </tr>
															    <tr>
															      <td>
															      	<h6 className="seat-management_null">
															      		
															      	</h6>
															      </td>
															      <td>
															      	<div className="seat-management-info">A1</div>
															      </td>
															      <td><div className="seat-management-info">A3</div></td>
															      <td>
															      	<div className="seat-management-info">A5</div>
															      </td>
															      <td><div className="seat-management-info">A7</div></td>
															      <td>
															      	<div className="seat-management-info">A9</div>
															      </td>
															      
															    </tr>
															  	</tbody>

														</table>
														
	      	  		 		 					</Grid>
	      	  		 		 					<Grid items xs={3} sm={3} md={3} lg={3} xl={3} style={{borderLeft: '1px solid #e0e0e0'}}>
	      	  		 		 						<div className="seat-wrap_availablity">
	      	  		 		 							<h6> Check Seat </h6>
	      	  		 		 							<ul>
	      	  		 		 								<li>
	      	  		 		 									<span className="available"></span>
	      	  		 		 								</li>
	      	  		 		 								<li>Available</li>
	      	  		 		 							</ul>
	      	  		 		 							<ul>
	      	  		 		 								<li>
	      	  		 		 									<span className="unavailable"></span>
	      	  		 		 								</li>
	      	  		 		 								<li>Unavailable</li>
	      	  		 		 							</ul>
	      	  		 		 						</div>
	      	  		 		 					</Grid>
	      	  		 		 				</Grid>	
	      	  		 		 			</Card>
	      	  		 		 		</Grid>
	      	  		 		 		<Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
	      	  		 		 			<Card className="payment_bus_detail_info">
	      	  		 		 					<h5 className="title">Details Your Ticket</h5>
	      	  		 		 					<div className="inner_details">
	      	  		 		 						<h6>Boarding point : Janakpur</h6>
	      	  		 		 						<h6>Dropping point : Kathmandu</h6>
	      	  		 		 					</div>
	      	  		 		 					<div className="detail_amount">
	      	  		 		 						<h6>Seat(s) : B-24</h6>
	      	  		 		 						<h6>Amount : &#x20B9;1000</h6>
	      	  		 		 					</div>
	      	  		 		 					
	      	  		 		 					<Detailspassanger />

	      	  		 		 			</Card>
	      	  		 		 		</Grid>
	      	  		 		 	</Grid>	
	      	  		 		 </Grid>	




	      	  		 		 
	      	  		 	</Grid> 	
	      	  		 </Grid>





	      	  		 
	      	  	</div>
      	  </Grid>
     
    );
  }
}

export default Collectionvehicle;