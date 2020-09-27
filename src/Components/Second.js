import React, { Component } from 'react'

export default class Second extends Component {
    nextMove = (e) => {
        e.preventDefault();
        this.props.next()
    }

    backMove = (e) => {
        e.preventDefault();
        this.props.prev()
    }

    render() {
        const { companyName, companyLocation, favDish, step, handleChange} = this.props

        return (
            <div>
                <h2>More Information</h2>
                <input value={companyName} onChange={handleChange("companyName")}/>
                <input value={companyLocation} onChange={handleChange("companyLocation")}/>
                <input value={favDish} onChange={handleChange("favDish")}/>
                <button onClick={this.nextMove}>Next</button>
                <button onClick={this.backMove}>Back</button>
            </div>
        )
    }
}
