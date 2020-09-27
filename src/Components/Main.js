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

    render() {
        return (
            <div>
                Main
            </div>
        )
    }
}
