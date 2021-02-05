import React from 'react'

const Coin = ({ image, name, symbol, price, volume, priceChange, marketcap }) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="currency" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">CAD {price}</p>
                    <p className="coin-volume">CAD {volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                    ) :
                        (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                        )}
                    <p className="market-cap"> Mkt Cap: CAD {marketcap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Coin;
