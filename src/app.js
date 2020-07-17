import React from 'react';
import Products from './component/products';
import Categories from './component/categories';
import Cart from './component/cart'
import Footer from './component/footer';
import Header from './component/header';
import { Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact>
      <Categories />
      <Products />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Footer />
    </div>
  );
}


export default App;