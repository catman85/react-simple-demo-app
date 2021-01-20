import React from 'react';

class SideMenu extends React.Component {
    constructor(props){
        super();
    }
    render(){
        return (
            <div>
                {this.props.categories
                .sort((a,b)=>{return a.index-b.index})
                .map((el)=>
                    <li className="clickable" 
                    key={el.index}
                    onClick={() => this.props.callback(el.id)}>
                        {el.name}
                    </li>
                )}
            </div>
       )
    }
}

export default SideMenu;