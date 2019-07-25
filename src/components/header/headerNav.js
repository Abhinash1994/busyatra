import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './navigation.css'

import { Link } from 'react-router-dom';
class HeaderNav extends Component {
  render() {
    return (
        <header>
       		<Grid container>
  				<Grid  item xs={12} sm={12} md={12} lg={12} xl={12}>
  					 <div className="header-banner">
			       			<Grid container spacing={3}>
			  						<Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{background:'#e46f15'}}>
			  							<div className="assetBlock">
			                    			<div style={{height: '20px',overflow: 'hidden'}} id="slideshow">
			                    				<p style={{paddingLeft:'4%'}}>Save up to <span>40%</span> Hurry limited offer!</p><p style={{display: 'block', opacity: '0.076161'}}>Hot days! - <span>50%</span> Get ready for summer! </p></div>
			                  				</div>
			  						</Grid>
			  						<Grid className="call-us" item xs={12} sm={6} md={6} lg={6} xl={6}>
			  								Helpline :  <i className="fa fa-phone"> +977 9800879857</i> 
			  						</Grid>
			  					
			  				</Grid>
       				</div>	
  					
  					<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>	
  					 <nav>
				        <div id="logo">MOTOCART</div>

				        <label for="drop" className="toggle_icon"><i className="fa fa-bars"></i></label>
				        <input type="checkbox" id="drop" />
				            <ul className="menu">
				                <li><a href="/">Home</a></li>
				                <li>
				                   
				                    <label for="drop-1" className="toggle">BUS TICKETS </label>
				                     	<Link to="/bus-ticket">BUS TICKETS </Link>
				                    <input type="checkbox" id="drop-1"/>
				                    <ul>
				                        <li><a href="/">Harhar Mahadev</a></li>
				                        <li><a href="/">Indreni delux</a></li>
				                        <li><a href="/">Sabitri Delux</a></li>
				                        <li><a href="/">Agni Delux</a></li>
				                        <li><a href="/">Koshi Delux</a></li>
				                        <li><a href="/">Makalu Delux</a></li>
				                    </ul> 

				                </li>
				                <li>

				       
				                <label for="drop-2" className="toggle">MICRO TICKETS </label>
				                <a href="/">MICRO TICKETS</a>
				                <input type="checkbox" id="drop-2"/>
				                <ul>
				                    <li><a href="/">Nepal Micro</a></li>
				                    <li><a href="/">Indreni </a></li>
				                    <li>
				                       
				                        
				                    <label for="drop-3" className="toggle">Tutorials +</label>
				                    <a href="/">Tutorials</a>         
				                    <input type="checkbox" id="drop-3"/>

				                    <ul>
				                        <li><a href="/">HTML/CSS</a></li>
				                        <li><a href="/">jQuery</a></li>
				                        <li><a href="/">Other</a></li>
				                    </ul>
				                    </li>
				                </ul>
				                </li>
				                
				                <li>

				                	<label for="drop-4" className="toggle">Manage Booking</label>
				                    <a href="/manage-booking">Manage Booking</a>
				                    <input type="checkbox" id="drop-4"/>
				                    <ul>
				                        <li><a href="/">Cancel</a></li>
				                        <li><a href="/">Print/Download</a></li>
				                       <li><a href="/">Email/Sms</a></li>
				                    </ul> 

				                </li>
				                <li><a href="/">Help</a></li>
				                
				            </ul>
        				</nav>
        			</Grid>
  				</Grid>
  				
       		</Grid>






        </header>
       
    );
  }
}

export default HeaderNav;