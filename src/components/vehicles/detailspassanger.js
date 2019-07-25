import React from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

export default function Detailspassanger() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

    	<div className="proceed_book">
		      	 <Button variant="contained" color="secondary" onClick={handleOpen}>
					proceed to book
				</Button>
			</div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        className="pay_now_popup"
      >
        
      	<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      			<Grid container justify="center">
			      	
			      		<Grid className="bus_passanger_detail" item xs={12} sm={8} md={6} lg={5} xl={5}>
			      			<Card>
			      				<h2 className="passenger-maintitle">Passanger Details</h2>
			      				
			      				<div className="container passenger_info_title" >
			      					<i className="fa fa-user-circle-o"></i>
			      					<span className="inner_title">Passenger Information</span>
			      				</div>	
			      				<div className="passenger_info_content_block">
			      					<span className="passenger_priority">Passenger 1</span>
			      					<span className="passenger_seat"><span className="passenger_seatno f-bold ">Seat 7</span></span>
			      					<h6 className="name_passanger">Name *</h6>
			      					<input className="input_box" type="text" placeholder="Name" name="Name_0" maxlength="300" id="seatno-04" />
			      					<h6 className="name_passanger">Email Id </h6>
			      					<input className="input_box" type="text" placeholder="Email" name="Name_0" maxlength="300" id="seatno-04"/>
			      					<h6 className="name_passanger">Phone *</h6>
			      					<input className="input_box" type="number" placeholder="phone"  maxlength="300" id="seatno-04"  autocomplete="off"/>

			      					<Grid container style={{padding:'1rem'}}>
			      						<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
			      							<h5 className="bp_total_price">Total: &#8377;1000</h5>
			      						</Grid>
			      						<Grid className="proceed_pay_btn" item xs={12} sm={6} md={6} lg={6} xl={6}>
			      							<Link to="/details-payment">
			      								<Button variant="contained" color="secondary">
													proceed to Pay
												</Button>
			      							</Link>
			      						</Grid>
			      					</Grid>	
			      				</div>
			      			</Card>
			      		</Grid>
      					
      			</Grid>
      		</Grid>


      </Modal>
    </div>
  );
}
