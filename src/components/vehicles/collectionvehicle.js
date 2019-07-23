import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DatePicker from "react-datepicker";
 import Button from '@material-ui/core/Button';
import "react-datepicker/dist/react-datepicker.css";

import Card from '@material-ui/core/Card';

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
        this.setState({visible: !this.state.visible})
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
	      	  		 		 	<Grid container>
	      	  		 		 		<Grid item xs={7} sm={7} md={7} lg={7} xl={7}>
	      	  		 		 			<Card className="seatchart">
	      	  		 		 				<Grid container>
	      	  		 		 					<Grid items xs={2} sm={2} md={2} lg={2} xl={2} style={{borderRight: '1px solid #e0e0e0'}}>
	      	  		 		 						<div className="seat-wrap">
	      	  		 		 							<img src="https://res.cloudinary.com/ddkyepakx/image/upload/v1563902752/abhi-operator.svg" alt="driver"/>
	      	  		 		 					
	      	  		 		 						</div>
	      	  		 		 					</Grid>
	      	  		 		 					<Grid items xs={10} sm={10} md={10} lg={10} xl={10}>
	      	  		 		 							<table className="seat_style_for_table">
															  <tbody>
															    <tr>
															      <td>
															      	<h6 className="seat-management-info">
															      		2
															      	</h6>
															      </td>
															      <td>
															      	<div className="seat-management-info">4</div>
															      </td>
															      <td><div className="seat-management-info">6</div></td>
															      <td>
															      	<div className="seat-management-info">8</div>
															      </td>
															      <td><div className="seat-management-info">10</div></td>
															      
															      <td><div className="seat-management-info">12</div>
															      </td>
															      
															    </tr>
															    <tr>
															      <td>
															      	<h6 className="seat-management-info">
															      		1
															      	</h6>
															      </td>
															      <td>
															      	<div className="seat-management-info">3</div>
															      </td>
															      <td><div className="seat-management-info">5</div></td>
															      <td>
															      	<div className="seat-management-info">7</div>
															      </td>
															      <td><div className="seat-management-info">9</div></td>
															      <td>
															      	<div className="seat-management-info">11</div>
															      </td>
															      
															      
															    </tr>
															  	</tbody>
														</table>

														<table className="seat_style_for_table">
															  <tbody>
															    <tr>
															      <td></td>
															      	
															      <td>
															      	<div className="seat-management-info">2</div>
															      </td>
															      <td><div className="seat-management-info">
															      			4
															      		</div>
															      </td>
															      <td>
															      	<div className="seat-management-info">6</div>
															      </td>
															      <td><div className="seat-management-info">8</div></td>
															      <td>
															      	<div className="seat-management-info">10</div>
															      </td>
															      
															    </tr>
															    <tr>
															      <td>
															      	<h6 className="seat-management_null">
															      		
															      	</h6>
															      </td>
															      <td>
															      	<div className="seat-management-info">1</div>
															      </td>
															      <td><div className="seat-management-info">3</div></td>
															      <td>
															      	<div className="seat-management-info">5</div>
															      </td>
															      <td><div className="seat-management-info">7</div></td>
															      <td>
															      	<div className="seat-management-info">9</div>
															      </td>
															      
															    </tr>
															  	</tbody>

														</table>
														
	      	  		 		 					</Grid>
	      	  		 		 				</Grid>	
	      	  		 		 			</Card>
	      	  		 		 		</Grid>
	      	  		 		 		<Grid item xs={6} sm={6} md={6} lg={6} xl={6}></Grid>
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