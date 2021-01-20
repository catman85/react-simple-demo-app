import React from 'react';

class MainMenu extends React.Component {
    constructor(props){
        super();
    }
    componentDidUpdate(prevProps) {
    
    } 
    render(){
        return (
            <div>
                {this.props.products
                .filter(p => (p.categoryId == this.props.category || this.props.category == ""))
                .map((el)=>
                    <li key={el.id}>
                        {el.name}
                    </li>
                )}
            </div>
       )
    }
}

export default MainMenu;