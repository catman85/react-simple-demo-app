import logo from './logo.svg';
import React from 'react';
import './App.css';
import * as api_config from "./api";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    fetch(api_config.url + "/categories", api_config.settings)
      .then((res) => res.json())
      .then((data) => {
        this.setState(() => ({categories: data}))
      });

    fetch(api_config.url + "/products", api_config.settings)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          products: data,
        });
        console.log(this.state.products)
      });
  }

  componentWillMount() {
    this.fetchData()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}



export default App;
