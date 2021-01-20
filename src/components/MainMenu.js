import React from 'react';
import Product from './Product';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.tags = {};
    this.state = {
      order: "",
    };
    this.extractTags = this.extractTags.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.handleOrderChange = this.handleOrderChange.bind(this);
    this.tagCheck = this.tagCheck.bind(this);
    this.allIsFalse = this.allIsFalse.bind(this);
  }

  handleOrderChange(event) {
    this.setState({ order: event.target.value });
  }

  toggleCheckbox(el) {
    this.tags[el] = !this.tags[el];
    this.forceUpdate(); // bad practise sorry
  }

  extractTags() {
    let temp = [];
    this.props.products.forEach((element) => {
      temp = [...temp, ...element.tags];
    });

    //unique elements only
    temp = [...new Set(temp)];

    for (const key of temp) {
      if(this.tags[key] === undefined){
        this.tags[key] = false;
      }
    }

    return this.tags;
  }

  allIsFalse(){
    for (var i in this.tags) {
        if (this.tags[i] === true) return false;
    }
    return true;
  }

  tagCheck(currTags) {
    if(this.allIsFalse()){
        return true;
    }
    // We have checked something

    // product has no tag
    if(currTags.length === 0){
        return false;
    }

    //making sure all currTags are checked before showing
    for(let t in this.tags){
        if(this.tags[t]){
            if(!currTags.includes(t)){
                return false;
            }
        }
    }

    return true;
  }

  render() {
    return (
      <div>
        <select value={this.state.order} onChange={this.handleOrderChange}>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
        {Object.keys(this.extractTags()).map((el) => (
          <div key={el}>
            <input
              type="checkbox"
              id={el}
              checked={this.tags[el]}
              onClick={() => this.toggleCheckbox(el)}
            />
            <label htmlFor={el}>{el}</label>
          </div>
        ))}

        <br/>

        {this.props.products
          .sort((a, b) => {
            if (this.state.order === "asc" || this.state.order === "") {
              return a.price - b.price;
            } else {
              return b.price - a.price;
            }
          })
          .filter(
            (p) =>
              p.categoryId === this.props.category || this.props.category === ""
          )
          .filter((p) => this.tagCheck(p.tags))
          .map((el) => (
            <Product key={el.id} prod={el} />
          ))}
      </div>
    );
  }
}

export default MainMenu;