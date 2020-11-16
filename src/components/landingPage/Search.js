import React, { Component } from 'react'
import '../../style/landingPAge/search.scss';

export default class Search extends Component {
    render() {
        return (
       <div className="search">
            <div className="search-input">
                <select name="from" className="origin_input">
                    <option value="Your Location" selected>Your Location</option>
                    <option >Kacyiru</option>
                    <option >Kanombe</option>
                    <option >Downtown</option>
                    <option >Remera</option>
                    <option >Nyabugogo</option>
                </select>
                <select name="destination" className="destination_input" selected>
                    <option value="Your Destination" selected>Your Destination</option>
                    <option >Kacyiru</option>
                    <option >Kanombe</option>
                    <option >Downtown</option>
                    <option >Remera</option>
                    <option >Nyabugogo</option>
                </select>
                <button value="search" ><i className="fa fa-search"></i> Search</button>
            </div>
        </div>
        )
    }
}