import React from 'react';
import './App.css';
import Header from './components/Header';
import MainMenu from './components/MainMenu';
import SideMenu from './components/SideMenu';
import Search from './pages/Search';
import * as api_config from "./api";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
      selectedCategory: "",
      searchQuery: ""
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

  headerCallback(event){
    let query = event.target.value;
    this.setState({searchQuery: query});
    console.debug(this.state.searchQuery, query);
  }

  render() {
    return (
    <Router>
      <div className="App">
        <Header callback={this.headerCallback.bind(this)}/>
        <Switch>
          <Route path="/search">
            <Search products={this.state.products} query={this.state.searchQuery}/>
          </Route>
          <Route path="/">
            <div className="split">
              <SideMenu categories={this.state.categories} callback={this.sideMenuCallback.bind(this)}/>
              <MainMenu products={this.state.products} category={this.state.selectedCategory}/>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
