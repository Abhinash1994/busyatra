import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DatePicker from "react-datepicker";
import Button from '@material-ui/core/Button';
import "react-datepicker/dist/react-datepicker.css";
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Seatdetails from '../seat-management/seat' 
import axios from 'axios';

class Collectionvehicle extends Component {
	constructor(props) {
		super(props);
		const { showdata } = this.props.location.state;
		this.state = {
			startDate: showdata.date,
			arrival_from: showdata.from,
			departure_to: showdata.to,
			visible: false,
			searchData: [],
			seatA: [],
			seatB: [],
			id: null,
			seatnumber: [],
			width: window.innerWidth
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleArrival = this.handleArrival.bind(this);
		this.handleDeparture = this.handleDeparture.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getSeat = this.getSeat.bind(this);
	}
	handleArrival(e) {
		this.setState({ arrival_from: e.target.value });
	}
	handleDeparture(e) {
		this.setState({ departure_to: e.target.value });
	}
	handleChange(e) {
		this.setState({
			startDate: e.target.value
		});
	}
	toggleMenu= id=> {
		this.setState({ visible: !this.state.visible });
		window.scroll({
			// top: 200,
			// left: 100,
			behavior: 'smooth'
		});
	}

	getSeat = data => event => {
		var reserve = [...this.state.seatnumber];
		reserve.push(data.seat);
		this.setState(() => {
			return {
				seatnumber: reserve,
			};
		});
	}
	async componentDidMount() {
		this.handleSubmit();
	}

	async handleSubmit(e) {
		const { showdata } = this.props.location.state;
		let params = { fromcity: showdata.from, tocity: showdata.to, busid: showdata.busid };

		await axios.get('http://localhost:5000/search', { params: params }).then(res => {
			if (res.status === 200 && res != null) {
				this.setState({
					searchData: res.data,
				});
			}
			else {
				alert("not found data ")
			}
			console.log("all data", this.state.searchData)

		})
		.catch(function (error) {
			console.log("error");
			alert('not Submitted, error');
		});
	}
	componentWillMount() {
		window.addEventListener('resize', this.handleWindowSizeChange);
	}

	// make sure to remove the listener
	// when the component is not mounted anymore
	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	handleWindowSizeChange = () => {
		this.setState({ width: window.innerWidth });
	};

	render() {
		const { width } = this.state;
		const isMobile = width <= 1000;
		if (isMobile) {
			return (

				<Grid container>
					<Grid className="header_going_to_mobile" item xs={12} sm={12}>
						<div className="address_info">
							<i class="fa fa-arrow-left" style={{ fontSize: '24px' }}></i>
							<h4>Kathmandu to Janakpur</h4>

						</div>
						<div className="modify_info">
							<Button variant="outlined" color="inherit">
								Modify
					</Button>
						</div>
					</Grid>


					<Grid item xs={12} sm={12}>
						<Card className="abhi_bus_info_mobile" onClick={this.toggleMenu}>
							<Grid container>
								<Grid item xs={8} sm={8}>
									<div className="left_side_details">
										<i className="fa fa-bus abhi_bus_icon_mobile"></i>
										<h6>20:30 - 01:30</h6><br />
									</div>
									<h6 className="name"> Dhanusha Delux</h6>
									<h6 className="facility"> LCD,Music,air suspension </h6>
								</Grid>
								<Grid item xs={4} sm={4}>
									<div className="right_side_details">
										<h6 className="price-mobile">from &#8377;1000</h6>
										<h6 className="seat-available">20 Seats</h6>
										<h6 className="rating_mobile"><span>3.4 / 5</span></h6>
									</div>

								</Grid>
							</Grid>


							<div className="container">
								<Grid className="main_seat_manage_mobile" item xs={12} sm={12} style={this.state.visible ? { display: 'block' } : { display: 'none' }}>
									<h6 className="title"> Seats selected </h6>
									<Grid container className="inner_container">
										<Grid className="pa_info" item xs={12} sm={12}>
											<img src="https://res.cloudinary.com/ddkyepakx/image/upload/v1563902752/abhi-operator.svg" alt="abhi-operator" />
										</Grid>
										<Grid className="A_side" item xs={6} sm={6}>
											<h5 className="a_name"> A</h5>

											<Grid container spacing={2} style={{ paddingTop: '3rem' }}>
												<Grid item xs={6} sm={6}>
													<div className="seat-select-info">
														A1
      								 				</div>
													<div className="seat-select-info">
														A3
      								 				</div>
													<div className="seat-select-info">
														A5
      								 				</div>
													<div className="seat-select-info">
														A7
      								 				</div>
													<div className="seat-select-info">
														A9
      								 				</div>
													<div className="seat-select-info">
														A11
      								 				</div>
												</Grid>
												<Grid item xs={6} sm={6}>
													<div className="seat-select-info">
														A2
      								 				</div>
													<div className="seat-select-info">
														A4
      								 				</div>
													<div className="seat-select-info">
														A6
      								 				</div>
													<div className="seat-select-info">
														A8
      								 				</div>
													<div className="seat-select-info">
														A10
      								 				</div>
													<div className="seat-select-info">
														A12
      								 				</div>
												</Grid>
											</Grid>

										</Grid>
										<Grid className="B_side" item xs={6} sm={6}>
											<h5 className="b_name"> B</h5>

											<Grid container spacing={2} style={{ paddingTop: '5px' }}>
												<Grid item xs={6} sm={6}>
													<div className="seat-select-info">
														B1
      								 				</div>
													<div className="seat-select-info">
														B3
      								 				</div>
													<div className="seat-select-info">
														B5
      								 				</div>
													<div className="seat-select-info">
														B7
      								 				</div>
													<div className="seat-select-info">
														B9
      								 				</div>
													<div className="seat-select-info">
														B11
      								 				</div>
													<div className="seat-select-info">
														B13
      								 				</div>
												</Grid>
												<Grid item xs={6} sm={6}>
													<div className="seat-select-info">
														B2
      								 				</div>
													<div className="seat-select-info">
														B4
      								 				</div>
													<div className="seat-select-info">
														B6
      								 				</div>
													<div className="seat-select-info">
														B8
      								 				</div>
													<div className="seat-select-info">
														B10
      								 				</div>
													<div className="seat-select-info">
														B12
      								 				</div>
													<div className="seat-select-info">
														B14
      								 				</div>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
									<div className="abhi_selecting_seats_info">
										<h5> Seat(s) : B5</h5>
										<h5> Total  : Rs.1000</h5>
										<Link to="/details-passagner">
											<Button variant="contained" color="secondary">
												proceed to book
											</Button>
										</Link>
									</div>

								</Grid>
							</div>


						</Card>
					</Grid>

				</Grid>
			);
		} else {
			return (
				<Grid className="total_vehicle_search" item xs={12} sm={12} md={12} lg={12} xl={12}>
					<div className="vehicle_from_text">
						<Grid item md={12} lg={10} xl={7}>
							<Grid container>
								<Grid item sm={4} md={3} lg={3} xl={3}>
									<div className="" style={{ float: 'left' }}>
										<TextField
											id="outlined-dense"
											label="From"
											className="dense"
											margin="dense"
											variant="outlined"
											value={this.state.arrival_from}
											onChange={this.handleArrival}
										/>
									</div>

									<div className="xx_arrow_right">
										<i className="fas fa-arrow-right"></i>
									</div>

								</Grid>

								<Grid item sm={3} md={3} lg={3} xl={3}>
									<div className="" style={{ float: 'left' }}>
										<TextField
											id="outlined-dense"
											label="To"
											className="dense"
											margin="dense"
											variant="outlined"
											value={this.state.departure_to}
											onChange={this.handleDeparture}
										/>
									</div>

									<div className="xx_arrow_right">
										<i className="fas fa-arrow-right"></i>
									</div>
								</Grid>
								<Grid item sm={2} md={3} lg={3} xl={3}>
									<div className="date_selected_vehicle" style={{ position: 'absolute' }}>
										<i className="fa fa-calendar icon-new_collection" aria-hidden="true" ></i>

										<DatePicker
											selected={this.state.startDate}
											onChange={this.handleChange}
											className="date_picker_collection"
										/>
									</div>
								</Grid>
								<Grid item sm={2} md={3} lg={3} xl={3} >
									<div className="search_collection_btn">
										<Button variant="contained" color="secondary" onClick={this.handleSubmit}>
											Search
										</Button>
									</div>
								</Grid>
							</Grid>
						</Grid>
					</div>


					<div className="container">
						<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
							<div className="header_filter_bus">
								<p>You may select any vehicles where we have bus services routes</p>
							</div>
						</Grid>

						{this.state.searchData.map((data, i) => (

							<Grid key={i} item xs={12} sm={12} md={12} lg={12} xl={12} style={{ paddingBottom: '3rem' }}>

								<Grid container className="row_sec">

									<Grid item md={4} lg={4} xl={4} >
										<div className="travels lh-24 f-bold d-color">
											<h6 className="title"> {data.busInfo.busName}</h6>
											<h6 className="l-color">{data.busInfo.facilities}</h6>
											<h6 className="phonenumber"> Phone Number : {data.phoneNumber}</h6>
										</div>

									</Grid>
									<Grid item md={8} lg={8} xl={8}>
										<Grid container>
											<Grid item md={2} lg={2} xl={2}>
												<div className="travels lh-24 f-bold d-color">
													<h6 className="bus_name"> Super Delux</h6>
													<h6 className="bus_number">{data.busInfo.busNumber}</h6>
												</div>
											</Grid>
											<Grid item md={2} lg={2} xl={2}>
												<div className="travels lh-24 f-bold d-color" style={{ textAlign: 'center' }}>
													<h6 className="arrival">{data.arrivalTime} </h6>
													<h6 className="pick_up"> pickup</h6>
												</div>
											</Grid>

											<Grid item md={2} lg={2} xl={2}>
												<div className="bp-time f-19 d-color" style={{ textAlign: 'center' }}>

													<h6 className="title"> {data.departureTime}</h6>
													<h6 className="pick_up"> dropoff</h6>
												</div>

											</Grid>
											<Grid item md={2} lg={2} xl={2} style={{ textAlign: 'center' }}>
												<h6> Rating </h6>
												<div className="rating_desktop">
													<h6>{data.rating}/5</h6>
												</div>
											</Grid>
											<Grid item md={2} lg={2} xl={2}>
												<div className="starts_fare">
													<h6 className="starts_price"> Starts from </h6>
													<h6 className="fare_price"> &#8377;{data.price}</h6>
												</div>
											</Grid>
											<Grid item md={2} lg={2} xl={2} style={{ textAlign: 'center' }}>
												<div className="starts_fare">
													<h6 className="starts_price"> Seats Available </h6>
													<h6 className="seats_availbale">{data.totalSeat}</h6>
												</div>

												<div className="show_bus_collection_btn" >

													<Button variant="contained" color="secondary" onClick={()=>this.toggleMenu(data._id)}>
														View Seat
												</Button>


												</div>
											</Grid>
										</Grid>
									</Grid>



									<Grid className="selection_seat_from_bus" item xs={12} sm={12} md={12} lg={12} xl={12} style={this.state.visible ? { display: 'block' } : { display: 'none' }}>
										<Grid container spacing={3}>
											<Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
												<Card className="seatchart">
													<Grid container>
														<Grid className="main_cart_seat_available" item xs={1} sm={1} md={1} lg={1} xl={1} >
															<div className="seat-wrap">
																<img src="https://res.cloudinary.com/ddkyepakx/image/upload/v1563902752/abhi-operator.svg" alt="abhi-operator" />

															</div>
														</Grid>
														<Grid className="seat_style_for_table" item xs={7} sm={7} md={7} lg={7} xl={7}>
															<h6 className="select_seat_block"> Select Seat</h6>
															
																	{/* // <Grid container>
																	// 	<Grid item md={1} lg={1} xl={1} style={{ display: 'contents' }}>

																	// 		<div key={i} className="seat-management-info" onClick={this.getSeat(data)}>{data.seatNumber}</div>

																	// 	</Grid>
																	// </Grid> */}
																	<Seatdetails seatdata = {data}/>
															


															{/* {
																data.seat.map((a, i) => (
																	<Grid container style={{ marginTop: '1rem' }}>
																		<Grid item md={1} lg={1} xl={1} style={{ display: 'contents' }}>

																			{
																				a.side_B.map((data, i) => (

																					<div className="seat-management-info">{data.seat}</div>

																				))
																			}

																		</Grid>
																	</Grid>

																))
															} */}


														</Grid>
														<Grid item xs={4} sm={4} md={4} lg={4} xl={4} style={{ borderLeft: '1px solid #e0e0e0' }}>
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
														<h6>Boarding point : {this.state.arrival_from} </h6>
														<h6>Dropping point : {this.state.departure_to}</h6>
													</div>
													<div className="detail_amount">
														<h6 >Seat(s) : {'B' + this.state.seatnumber}</h6>
														<h6 >Amount : &#x20B9;{data.price}</h6>
													</div>

													<div className="proceed_book">
														<Link to="/details-passagner">
															<Button variant="contained" color="secondary">
																proceed to book
														</Button>
														</Link>
													</div>

												</Card>
											</Grid>
										</Grid>
									</Grid>





								</Grid>
							</Grid>
						))}


					</div>
				</Grid>

			);
		}
	}

}

const mapStateToProps = (state) => {
	return {
		data: state.name,
	}
}


export default connect(mapStateToProps)(Collectionvehicle);