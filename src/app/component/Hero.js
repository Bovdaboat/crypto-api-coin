"use client"
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"
import Coin from "@/app/component/Coin";

const Hero = () => {

    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/' +
            'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
            .then(res => {
                setCoins(res.data)
                console.log(res.data)
            })
            .catch(error => console.log(error))
    }, [])


    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coins =>
    coins.name.toLowerCase().includes(search.toLowerCase())
    )


    return(
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold text-blue-500">Hello there!</h1>
                    <p className="py-6 text-blue-500">Discover the current value of cryptocurrencies
                        and unlock the potential of the digital market.</p>
                    <div>


                        <div className="flex justify-center">
                            <div className="flex space-x-1">
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    className="block w-full px-4 py-2 text-blue-700
                                    bg-white border rounded-full focus:border-blue-400 focus:ring-blue-300
                                    focus:outline-none focus:ring focus:ring-opacity-40 justify-center"
                                    placeholder="Search..."
                                />
                                <button className="px-4 text-white bg-blue-500 rounded-full ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    <div className="m-5 flex bg-base-300 w-full">
                        <div className="p-8">
                            {filteredCoins.map(coin => {
                            return <Coin
                                key={coin.id}
                                name={coin.name}
                                image={coin.image}
                                symbol={coin.symbol}
                                marketcap={coin.market_cap}
                                price={coin.current_price}
                                priceChange={coin.price_change_percentage_24}
                                value={coin.total_valume}
                            />
                        })}</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero