import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../header/home';
import Busticket from '../header/busticket';
import Collectionvehicle from '../vehicles/collectionvehicle'
import CartPayment from '../vehicles/cartpayment';
import MessageShow from '../vehicles/messageshow';
import Detailspassanger from '../vehicles/detailspassanger'

export default class Main extends Component {
  render() { 
    return (
    	<main>
		    <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/bus-ticket' component={Busticket}/>
              <Route exact path='/search' component={Collectionvehicle}/>
              <Route exact path='/details-payment' component={CartPayment}/>
              <Route exact path='/details-passagner' component={Detailspassanger}/>
              <Route exact path='/successfull' component={MessageShow}/>
		    </Switch>
  		</main>
    );
  }
}