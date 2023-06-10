import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Details from "./Components/Details";
import Cart from "./Components/Cart/Cart";
import Default from "./Components/Default";
import Modal from "./Components/Modal";
import CompanyPresentation from "./Components/CompanyPresentation"; // Import the CompanyPresentation component

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={ProductList}/>
            <Route path="/details" component={Details}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/company-presentation" component={CompanyPresentation} /> {/* Add the CompanyPresentation route */}
            <Route component={Default}/>
          </Switch>
          <Modal />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
