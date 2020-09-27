import React, { Component } from 'react'

export default class First extends Component {
    nextMove = (e) => {
        e.preventDefault();
        this.props.next()
    }

    render() {
        const { fname, lname, handleChange } = this.props

        return (
            <div>
                <h2>Basic Information</h2>
                <input value={fname} onChange={handleChange("fname")}/>
                <input value={lname} onChange={handleChange("lname")}/>
                <button onClick={this.nextMove}>Next></button>
            </div>
        )
    }
}
