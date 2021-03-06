import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Coin from './components/Coin';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=CAD&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(res => {
      setCoins(res.data)
    }).catch(error => {
      console.log(error)
    })
  }, []);

  const handlChange = e => {
    setSearch(e.target.value)
  };

  const filtteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="coins-app">
      <div className="coins-search">
        <h1 className="coins-text">Search a Currency</h1>
        <form>
          <input className="coins-input" type="text" placeholder="Search" onChange={handlChange} />
        </form>
      </div>
      {filtteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        )
      })}
    </div>
  );
}

export default App;
