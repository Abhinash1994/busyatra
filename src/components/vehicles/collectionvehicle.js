import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DatePicker from "react-datepicker";
 import Button from '@material-ui/core/Button';
import "react-datepicker/dist/react-datepicker.css";
class Collectionvehicle extends Component {

	 constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date

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
	      	  		


	      	  		 <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
								      	  	<Button variant="contained" color="secondary">
												View Seat
											</Button>
										</div>
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