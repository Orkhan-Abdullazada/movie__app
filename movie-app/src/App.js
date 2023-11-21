import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import Wishlist from './components/Wishlist';
import { useState } from 'react';



function App() {
  const [search,setSearch]=useState("home alone")
  return (
    <div className="App">
     <Header setSearch={setSearch}/>
     <Cards search={search} setSearch={setSearch}/>
     <Wishlist/>
    </div>
  );
}

export default App;

