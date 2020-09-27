import React, { Component } from 'react'

export default class Main extends Component {

    state = {
        step: 1,
        fname: "",
        lname: "",
        companyName: "",
        companyLocation: "",
        favDish: ""
    }
    render() {
        return (
            <div>
                Main
            </div>
        )
    }
}
