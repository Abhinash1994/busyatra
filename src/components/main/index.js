import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../header/home'
import Busticket from '../header/busticket'
export default class Main extends Component {
  render() { 
    return (
    	<main>
		    <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/bus-ticket' component={Busticket}/>
		    </Switch>
  		</main>
    );
  }
}