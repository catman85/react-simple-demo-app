import React from 'react';

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
                    <li key={el.id}>
                        {el.name}
                    </li>
                )}
            </div>
       )
    }
}

export default Search;