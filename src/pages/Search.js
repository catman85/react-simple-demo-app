import React from 'react';
import Product from '../components/Product';

class Search extends React.Component {
    constructor(props){
        super();
    }
    componentDidUpdate(prevProps) {
    
    } 
    checkValidity(p){
        let q = this.props.query.toLowerCase();
        if(p.name.toLowerCase().includes(q) || p.categoryId.includes(q) || p.id.includes(q)){
            return true;
        }else{
            return false;
        }
    }
    render(){
        return (
            <div>
                {this.props.products
                .filter(p => this.checkValidity(p))
                .map((el)=>
                    <Product prod={el}/>
                )}
            </div>
       )
    }
}

export default Search;