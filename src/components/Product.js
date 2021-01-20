import React from 'react';

class Product extends React.Component {
    constructor(props){
        super();
    }
    render(){
        let el = this.props.prod;
        return (
            <li key={el.id} style={{marginBottom: "1em"}}>
                {el.name}
                <b>{" "+el.price}</b><br/>
                {el.description}<br/>
                <img src={el.image}/>
            </li>
       )
    }
}

export default Product;