import React from 'react';
import {
    Link
  } from "react-router-dom";

class Header extends React.Component {
    constructor(props){
        super();
    }
    render(){
        return (
            <div>
            <h3><Link to="/">DIMITRIS VASILIADIS</Link></h3>
            <input onChange={this.props.callback} /><br/>
            <Link to="/search"><button>Search</button></Link>
            </div>
       )
    }
}

export default Header;