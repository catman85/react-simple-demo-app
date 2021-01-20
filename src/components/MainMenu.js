import React from 'react';
import Product from './Product';

class MainMenu extends React.Component {
    constructor(props){
        super();
        this.tags= {}
        this.state={
            order:""
        }
        this.extractTags= this.extractTags.bind(this);
        this.handleOrderChange=this.handleOrderChange.bind(this);
    }

    componentDidUpdate(){
        console.debug("updated");
    }

    handleOrderChange(event){
        this.setState({order: event.target.value});
    }

    extractTags(){
        let temp = [] 
        this.props.products.forEach(element => {
            temp = [...temp,...element.tags]
        });

        //unique elements only
        temp = [...new Set(temp)];

        for(const key of temp){
            this.tags[key]=true;
        }

        return this.tags
    }

    render(){
        return (
            <div>
                <select value={this.state.order} onChange={this.handleOrderChange}>
                    <option value="asc">ASC</option>
                    <option value="desc">DESC</option>
                </select>
                {Object.keys(this.extractTags()).map((el)=>
                        <div>
                            <input type="checkbox" id={el} value={this.tags[el]}/>
                            <label for={el}>{el}</label><br/>
                        </div>
                )}

                <br/>

                {this.props.products
                .sort((a,b)=>{
                    if(this.state.order==="asc" || this.state.order===""){
                        return a.price - b.price
                    }else{
                        return b.price - a.price
                    }
                })
                .filter(p => (p.categoryId === this.props.category || this.props.category === ""))
                .map((el)=>
                    <Product prod={el}/>
                )}
            </div>
       )
    }
}

export default MainMenu;