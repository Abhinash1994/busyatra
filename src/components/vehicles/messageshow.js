import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

class Messageshow extends Component {
  render() {

    return (
    	
      			<Grid container justify="center">
			      	
			      		<Grid className="message_successful" item xs={12} sm={8} md={6} lg={6} xl={5}>
			      			<Card>
			      				<div className="icon_ok">
			      					<span><i className="fa fa-check-circle"/></span>	
			      					<h4 className="booked">Booking Successful</h4>
			      				</div>
			      				<Grid className="abhi_main_message" container justify="center">
			      					<Grid className="booking_details" item xs={4} sm={6} md={6} lg={6} xl={6}>
			      						
					      					<h5>Journey :  </h5>
					      					<h5>Date :  </h5>
					      					<h5>Service  :  </h5>
					      					<h5>PNR : </h5>
			      						
			      					</Grid>
			      					<Grid className="booking_details_right" item xs={8} sm={6} md={6} lg={6} xl={6}>
				      					<div >
					      					<h5>Kathmandu to Janakpur </h5>
					      					<h5> 2019 - 01 -12 </h5>
					      					<h5>Dhanush Delux </h5>
					      					<h5>232323</h5>
			      						</div>
			      					</Grid>

			      					<div className="print_tickt_for_query">
			      						<Button variant="outlined" color="secondary">
													Print Tickets
										</Button>
			      					</div>
			      				</Grid>

			      			</Card>
			      		</Grid>
      			</Grid>
      		
    );
  }
}

export default Messageshow;