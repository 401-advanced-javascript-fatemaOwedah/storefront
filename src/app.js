import React from 'react';
import Products from './component/products';
import Categories from './component/categories';
import Footer from './component/footer';
import Header from './component/header';


function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default App;