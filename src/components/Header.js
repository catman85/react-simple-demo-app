import React from 'react';

class Header extends React.Component {
    constructor(props){
        super();
    }
    render(){
        return (
            <div>
            <h3>DIMITRIS VASILIADIS</h3>
            <input/><br/>
            <button>Search</button>
            </div>
       )
    }
}

export default Header;