import React, { Component } from 'react'

export default class Show extends Component {
    render() {
        const { fname, lname, companyName, companyLocation, favDish, step} = this.props
        return (
            <div>
                <h2>First Name: {fname}</h2>
                <h2>Last Name: {lname}</h2>
                <h2>Company Name: {companyName}</h2>
                <h2>Company Location: {companyLocation}</h2>
                <h2>Favourite Dish: {favDish}</h2>
            </div>
        )
    }
}
