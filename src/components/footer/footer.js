import React, { Component } from "react"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class Footer extends Component {
  render() {

    return (
      <div className="newsletter-row">
        <div className="container">
          <div className="row"> 
            
           
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col1">
              <div className="newsletter-wrap">
                <h5>Subscribe to website via Email</h5>
                <h4>Get Notified Of any Updates!</h4>
                <form action="#" method="post" id="newsletter-validate-detail1">
                  <div id="container_form_news">
                    <div id="container_form_news2">
                      <input type="text" name="email" id="newsletter1" title="Sign up for our newsletter" className="input-text required-entry validate-email" placeholder="Enter your email address"/>
                      
                      <Button  className="button subscribe" variant="contained" color="secondary" >
						<i className="fa fa-envelope" aria-hidden="true"></i><span>Subscribe</span>
					  </Button>
                    </div>

                  </div>
             
                </form>
              </div>
            </div>
          </div>

          <Grid className="footer_info" item xs={12} sm={12} md={12} lg={12} xl={12}>
          		<Grid container>
          			<Grid item xs={12} sm={7} md={7} lg={7} xl={7}>

          					<Grid container>
          						<Grid className="about_us" item xs={12} sm={4} md={4} lg={4} xl={4}>
          							<h6 className="dib">About BusYatra</h6>
          							<h6 className="abs">About Us</h6>
          							<h6 className="abs">Contact Us</h6>
          								
          						</Grid>
          						<Grid className="about_us" item xs={12} sm={4} md={4} lg={4} xl={4}>
          							<h6 className="dib">Info</h6>
          							<h6 className="abs">Terms & Condition</h6>
          							<h6 className="abs">Privacy & Policy</h6>
          							<h6 className="abs">FAQ</h6>
          							<h6 className="abs">Agent Registration</h6>
          						</Grid>
          						<Grid className="about_us" item xs={12} sm={4} md={4} lg={4} xl={4}>
          							<h6 className="dib">Entire Nepal</h6>
          							<h6 className="abs">Janakpur city</h6>
          							<h6 className="abs">JaleswarCity</h6>
          							<h6 className="abs">MahendraNagar city</h6>
          							<h6 className="abs">Kathmandu city</h6>
          						</Grid>
          					</Grid>

          			</Grid>
          			<Grid item sm={1} md={1} lg={1} xl={1}></Grid>
          			<Grid className="about_us" item xs={12} sm={4} md={4} lg={4} xl={4}>
          				<h6 className="dib">BusYatra</h6>
          				<h6 className="promotion">
          						BusYatra is the Nepal's largest online bus ticket booking service trusted by lot's of happy customers entire country. BusYatra offers bus ticket booking through its website for all major routes.
          				</h6>			
          			</Grid>
          		</Grid>
          </Grid>
        </div>
     	   

         <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
       			<div className="bg-gray-800">
       				<p className="text-sm mb-md-0 coppyright">© 2019 BusYatra.  All rights reserved.</p>
       			</div>
         </Grid>

      </div>
    );
  }
}

export default Footer;