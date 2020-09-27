import React, { Component } from 'react';
import First from './First';
import Second from './Second';
import Show from './Show';

export default class Main extends Component {

    state = {
        step: 1,
        fname: "",
        lname: "",
        companyName: "",
        companyLocation: "",
        favDish: ""
    }

    next = (e) => {
        e.preventDefault();
        this.setState({step:step+1})
    }

    prev = (e) => {
        e.preventDefault();
        this.setState({step:step-1})
    }

    handleChange = input=> e=> {
        e.preventDefault();
        this.setState({[input]:e.target.value})
    }

    stepHandler = () => {
        const {fname, lname, companyName, companyLocation, favDish, step} = this.state;
        if (step == 1) {
            return (
                <First fname={fname} lname={lname} next={this.next} handleChange = {this.handleChange} />
            )
        } else if (step == 2) {
            return (
                <Second companyName={companyName} companyLocation={companyLocation} favDish={favDish} next={this.next} prev={this.prev} handleChange={this.handleChange} />
            )
        } else if (step == 3) {
            return (
                <Show fname={fname} lname={lname} companyName={companyName} companyLocation={companyLocation} favDish={favDish} prev={this.prev} />
            )
        }
    }

    render() {
        return (
            <div>
                Main
            </div>
        )
    }
}
