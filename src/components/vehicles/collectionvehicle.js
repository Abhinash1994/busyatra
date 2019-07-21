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
	      	  			<Grid item sm={10} md={10} lg={10} xl={10}>

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
	      	  		 		<Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
	      	  		 			<h6> Delhi to Mumbai </h6>
	      	  		 			<h6> Mumbai to Pune (All Locations) is 152 Kms</h6>
	      	  		 		</Grid>
	      	  		 		<Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
	      	  		 			<h6> 38h 23m </h6>
	      	  		 			<h6> Lowest journey duration </h6>
	      	  		 		</Grid>
	      	  		 		<Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
	      	  		 			<h6> 2 buses </h6>
	      	  		 			<h6> Non A/C seater , A/C seater </h6> 
	      	  		 		</Grid>
	      	  		 		<Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
	      	  		 				<div className="show_bus_collection_btn">
					      	  				<Button variant="contained" color="secondary">
											     Show Bus
											  </Button>
									</div>
	      	  		 		</Grid>
	      	  		 	</Grid>
	      	  		 </Grid>


	      	  		 <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
	      	  		 	<Grid container className="row_sec">
	      	  		 		<Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
	      	  		 			<h6> Delhi to Mumbai </h6>
	      	  		 			<h6> Mumbai to Pune (All Locations) is 152 Kms</h6>
	      	  		 		</Grid>
	      	  		 		<Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
	      	  		 			<h6> 38h 23m </h6>
	      	  		 			<h6> Lowest journey duration </h6>
	      	  		 		</Grid>
	      	  		 		<Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
	      	  		 			<h6> 2 buses </h6>
	      	  		 			<h6> Non A/C seater , A/C seater </h6> 
	      	  		 		</Grid>
	      	  		 		<Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
	      	  		 				<div className="show_bus_collection_btn">
					      	  				<Button variant="contained" color="secondary">
											     Show Bus
											  </Button>
									</div>
	      	  		 		</Grid>
	      	  		 	</Grid>
	      	  		 </Grid>

	      	  		 
	      	  	</div>


      	  </Grid>
     
    );
  }
}

export default Collectionvehicle;