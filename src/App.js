import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=CAD&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(res => {
      setCoins(res.data)
      console.log(res.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])
  return (
    <div className="coins-app">
      <div className="coins-search">
        <h1 className="coins-text">Seach a Currency</h1> 
        <form>
          <input className="coins-input" type="text" placeholder="Search"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
