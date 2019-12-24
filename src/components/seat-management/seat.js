import React, { Component } from 'react'
import { Grid  } from '@material-ui/core/';
// import axios from 'axios';

export default class Seat extends Component {
    constructor() {
        super();
        this.state = {
            selectedItem:0,
            toggle:false
        }
    }
    changeColor = index => {
        this.setState({  toggle:!this.state.toggle, selectedItem: index})
    };
    render() {
        let self = this.props.seatdata;
        return (
            <Grid container>
                <Grid item md={1} lg={1} xl={1} style={{ display: 'contents' }}>
                {
                    self.seat.map((data,index)=>(
                        <div  key={index} className="seat-management-info" style={this.state.toggle && this.state.selectedItem === index ? {background:'green',color:'#fff'}:null} onClick={() => this.changeColor(index)}><span>{data.seatNumber}</span></div>    
                    ))
                }
                </Grid>
            </Grid>
        )
    }
}
