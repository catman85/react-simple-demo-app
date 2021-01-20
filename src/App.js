import React from 'react';
import './App.css';
import Header from './components/Header';
import MainMenu from './components/MainMenu';
import SideMenu from './components/SideMenu';
import * as api_config from "./api";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
      selectedCategory: ""
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    fetch(api_config.url + "/categories", api_config.settings)
      .then((res) => res.json())
      .then((data) => {
        this.setState({categories: data})
      });

    fetch(api_config.url + "/products", api_config.settings)
      .then((res) => res.json())
      .then((data) => {
        this.setState({products: data});
      });
  }

  componentWillMount() {
    this.fetchData()
  }

  sideMenuCallback(id){
    this.setState({selectedCategory: id});
    console.debug(this.state.selectedCategory, id);
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="split">
          <SideMenu categories={this.state.categories} callback={this.sideMenuCallback.bind(this)}/>
          <MainMenu products={this.state.products} category={this.state.selectedCategory}/>
        </div>
      </div>
    );
  }
}



export default App;
