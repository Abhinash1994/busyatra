import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import DatePicker from "react-datepicker";
 import "react-datepicker/dist/react-datepicker.css";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import axios from 'axios';

class Home extends Component {
	 constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      arrival_from:'',
      departure_to:'',
	  vehicle_select:'',
	  searchData:[]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleArrival = this.handleArrival.bind(this);
    this.handleDeparture = this.handleDeparture.bind(this);
    this.handleVehicle = this.handleVehicle.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date

    });
  }
  handleArrival(e){
  	this.setState({arrival_from:e.target.value});
  }
  handleDeparture(e){
  	this.setState({departure_to:e.target.value});
  }
  handleVehicle(e){
  	this.setState({vehicle_select:e.target.value});
  }	

  async handleSubmit(e) {
		e.preventDefault();	
		let params = {fromcity:this.state.arrival_from,tocity:this.state.departure_to,busid:this.state.vehicle_select};

			await axios.get('http://localhost:5000/search',{params:params}).then(res=>{
					
			this.setState({
				searchData: res.data,
			  });

				   console.log("data",this.state.searchData)
			   
			 })
			.catch(function (error) {
			   console.log("error");
				alert('not Submitted, error');
			 });
		
  }
  render() {
	let data=this.state.searchData;
    return (
      		<Grid container> 
      			<Grid className="banner_img_info" item xs={12} sm={12} md={12} lg={12} xl={12}>
      				<Grid container>
      					<Grid item xs={1} sm={3} md={4} lg={4} xl={4}></Grid>
      					<Grid className="section_form" item xs={10} sm={6} md={4} lg={3} xl={3} style={{border:'1px solid yellow',marginTop:'4%'}}>
      						<div className="b-filter__inner bg-grey">
              					<h2>Book Your Tickets</h2>
              						
					                  <select className="selectpicker_from" value={this.state.arrival_from} onChange={this.handleArrival}>
					                    <option >From *</option>
					                    <option >Jaleshwar</option>
					                    <option >Janakpur</option>
					                    <option >Kathmandu</option>
					                  </select>

					                  <select className="selectpicker_to" value={this.state.departure_to} onChange={this.handleDeparture}>
					                    <option >To *</option>
					                    <option >Jaleshwar</option>
					                    <option >Janakpur</option>
					                    <option >Kathmandu</option>
					                  </select>	
					                  <select className="selectpicker_to" value={this.state.vehicle_select} onChange={this.handleVehicle}>
					                    <option >Selected Bus/Micro *</option>
					                    <option value="1">Micro</option>
					                    <option value="2">Bus</option>
					                    <option value="3">Car</option>
					                  </select>
					                  <div className="start_date_selected" style={{position:'absolute'}}>
					                  		<i className="fa fa-calendar icon-calendar_icon-new" aria-hidden="true" ></i>
					                  		
									   		<DatePicker
											    selected={this.state.startDate}
											    onChange={this.handleChange}
											    className="startdate_picker"
											/>
					                  </div>

									  <Link to={'/search'}>
						                  <div className="search_bus_button">
							                  	<Button variant="contained" color="secondary" onClick={this.handleSubmit}>
										        	Search Bus
										      	</Button>
											
						                  </div>
									 </Link>
							   
							  </div>
							 
      					</Grid>
      					<Grid item xs={1} sm={3} md={4} lg={4} xl={4}></Grid>
      				</Grid>
      			</Grid>	
    		  		
      			<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      				<section className="py-6 bg-gray-100">
				      <div className="container">
				        <div className="text-center pb-lg-4">
				          <p className="subtitle text-secondary">One-of-a-Best Booking Tickets </p>
				          <h2 className="mb-5">Booking with us is easy</h2>
				        </div>
				        <div className="row">
				          <div className="col-lg-4 mb-3 mb-lg-0 text-center">
				            <div className="px-0 px-lg-3">
				              <div className="icon-rounded bg-primary-light mb-3">
				                <i className="fa fa-bus text-primary_icon"></i>
				              </div>
				              <h3 className="h5">Find the perfect Bus</h3>
				              <p className="text-muted">If you are really looking for your better option for your journey or travel,or trip,then yes you are in right track please go through this site you will really enjoy your journey</p>
				            </div>
				          </div>
				          <div className="col-lg-4 mb-3 mb-lg-0 text-center">
				            <div className="px-0 px-lg-3">
				              <div className="icon-rounded bg-primary-light mb-3">
				                  <i className="fa fa-mobile text-primary_mobile" aria-hidden="true"></i>
				              </div>
				              <h3 className="h5">Book with confidence</h3>
				              <p className="text-muted">Yes, Don't be afraid from Booking . cause  this is a legal website, which are provided lot's of ticket . so many customer are satisfied from our services so please go ahead through this site , & book tickets & enjoy you journey . hope you you will again visit our site .</p>
				            </div>
				          </div>
				          <div className="col-lg-4 mb-3 mb-lg-0 text-center">
				            <div className="px-0 px-lg-3">
				              <div className="icon-rounded bg-primary-light mb-3">
				                <i className="fa fa-heart-o text-primary_icon"></i>
				              </div>
				              <h3 className="h5">Enjoy your Journey</h3>
				              <p className="text-muted">Hope you will absolutely enjoy your journey ,please visit this site again and again and have a joyful journey, you are always welcome here.</p>
				            </div>
				          </div>
				        </div>
				      </div>
				    </section>
      			</Grid>	



      			<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      				<div className="container gurantee_part_vehicle">
      					<Grid container>
	      					<Grid className="banner_gurantee_img" item xs={12} sm={12} md={1} lg={1} xl={1}>
	      						<div className="img2_Hero"></div>
	      					</Grid>
	      					<Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
	      						<div className="Title_abhi">
	      							<h4>Introducing On-Time Guarantee</h4>
	      						</div>
	      						<div className="subtext_abhi">Leave on time, everytime</div>
	      						<Grid container className="main_block_guarantee">
	      							<Grid className="first_block_on_time" item xs={12} sm={12} md={4} lg={4} xl={4}>
	      								<div className="titl_hero"> Bus on time </div>
         								<div className="value_hero">Get 25% refund  </div>
         								<div className="text_hero">If bus departure is delayed by 30 mins from boarding point. </div>
	      							</Grid>
	      							<Grid className="first_block_on_time" item xs={12} sm={12} md={4} lg={4} xl={4}>
	      								 <div className="titl_hero"> No bus cancellation </div>
								         <div className="value_hero">Get 150% refund  </div>
								         <div className="text_hero">Bus is cancelled without an alternate arrangement.</div>
	      							</Grid>
	      							<Grid className="first_block_on_time" item xs={12} sm={12} md={4} lg={4} xl={4}>
	      								 <div className="titl_hero"> Alternate assurance </div>
								         <div className="value_hero">Get 300% refund  </div>
								         <div className="text_hero">Bus breaks down with no alternate arrangement within 6 hours. </div>
	      							</Grid>
	      						</Grid>
	      					</Grid>
      					</Grid>
      				</div>
      			</Grid>	



      			<Grid className="routes_operator_info" item xs={12} sm={12} md={12} lg={12} xl={12}>
      				<div className="container">
      					<Grid container>
      						<Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
      							<h5 className="seo-header">Top Bus Routes</h5>
      							<h6 className="seo-section">Janakpur To Kathmandu Bus or Micro</h6>
      							<h6 className="seo-section">Jaleshwar To Kathmandu Bus or Micro</h6>
      							<h6 className="seo-section">MahendraNagar To Kathmandu Bus or Micro</h6>
      							<h6 className="seo-section">Janakpur to Dharan Bus</h6>
      							<h6 className="seo-section">Janakpur to BiratNagar Bus</h6>
      						</Grid>
      						<Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
      							<h5 className="seo-header">Top Cities</h5>
      							<h6 className="seo-section">Janakpur Bus Tickets</h6>
      							<h6 className="seo-section">Jaleshwar Bus Tickets</h6>
      							<h6 className="seo-section">MahendraNagar Bus Tickets</h6>
      							<h6 className="seo-section">Koteswar Bus Tickets</h6>
      							<h6 className="seo-section">Gaushala Bus Tickets</h6>
      						</Grid>
      						<Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
      							<h5 className="seo-header">Top Operators</h5>
      							<h6 className="seo-section">Sambridhi/Deluxe</h6>
      							<h6 className="seo-section">Jan Jyoti/Deluxe</h6>
      							<h6 className="seo-section">Har Har Mahadev Deluxe/Deluxe</h6>
      							<h6 className="seo-section">Bulet Deluxe/Deluxe</h6>
      							<h6 className="seo-section">Sabitri/Deluxe</h6>
      							<h6 className="seo-section">Bulet Deluxe/Deluxe</h6>
      						</Grid>
						</Grid>
      				</div>
      			</Grid>


      		</Grid>
    );
  }
}

export default Home;