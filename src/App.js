import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Books from './components/book-list';
import Knjiga from './components/book-details';
import AddBook from './components/book-add';
import TpnProducts from './components/tpn-products';
import MyNavBar from './components/my-nav-bar';
import MyFooter from './components/my-footer';
import ProductList from './components/product-list';


class App extends Component {
  render() {
    return (
      <div className="App">
      <MyNavBar></MyNavBar>
      <TpnProducts></TpnProducts>
      
      <MyFooter></MyFooter>
      </div>
    );
  }
}
 // react + redux!!
 //<Books></Books>
 //<Knjiga></Knjiga>
 //<AddBook></AddBook>
export default App;
