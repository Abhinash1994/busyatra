import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

class CartPayment extends Component {
  render() {

    return (
      <Grid container>
      	<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      			<Grid container justify="center">
			      	
			      		<Grid className="bus_passanger_detail" item xs={12} sm={8} md={6} lg={6} xl={5}>
			      			<Card>
			      				<div className="select_payment_details">
			      					<h2 className="payment-maintitle">Select Payment Method</h2>
			      				</div>
			      				
			      					
			      				<div className="passenger_info_content_block">
			      					<Grid container>
			      						<Grid className="booked_details" item xs={5} sm={5} md={5} lg={5} xl={4}>
			      							<h6>Journey</h6>
			      							<h6>Departure Date</h6>
			      							<h6>Selected Seats</h6>
			      							<h6>Bus Name</h6>
			      							<h6>Total Seats</h6>
			      							<h6>Total Cost</h6>
			      							<h6>Select payment option</h6>
			      						</Grid>
			      						<Grid className="booked_details-right" item xs={7} sm={7} md={7} lg={7} xl={7}>
			      							<h5>KATHMANDU TO JANAKPUR</h5>
			      							<h5>2019-09-06</h5>
			      							<h5>Har Har Mahadev</h5>
			      							<h5>B-10</h5>
			      							<h5>1</h5>
			      							<h5>&#8377;1000</h5>
			      							<h5>cash on bus</h5>
			      						</Grid>
			      						<Grid className="collection_submit_cancel_btn" item xs={6} sm={6} md={6} lg={6} xl={6}>
			      							<Link to="/search">
			      								<Button className="cancel_btn" variant="contained" color="secondary">
													Cancel
												</Button>
			      							</Link>
			      						</Grid>
			      						<Grid className="collection_submit_cancel_btn" item xs={6} sm={6} md={6} lg={6} xl={6}>
			      							 <Link to="/successfull"><Button className="cancel_btn" variant="contained"
    	 										color="secondary" style={{background:'green'}}>
													Submit
											</Button></Link>
			      							 	
			      						</Grid>
			      					</Grid>
			      				</div>
			      			</Card>
			      		</Grid>
      					
      			</Grid>
      		</Grid>


      </Grid>
    );
  }
}

export default CartPayment;