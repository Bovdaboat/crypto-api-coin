"use client"
import React from 'react';
import Image from "next/image";

const Coin = ({
                  name,
                  price,
                  symbol,
                  marketcap,
                  volume,
                  image,
                  priceChange,

              }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-lg shadow-md">
            <div className="flex flex-row items-center">
                <div className="mr-4">
                    <Image src={image} alt="crypto" className="w-12 h-12" />
                </div>
                <div>
                    <h1 className="text-xl font-semibold">{name}</h1>
                    <p className="text-gray-500">{symbol}</p>
                </div>
            </div>
            <div className="flex flex-col items-center mt-4">
                <p className="text-xl">${price}</p>
                <p className="text-gray-500">${volume.toLocaleString()}</p>
                <p
                    className={`text-lg ${
                        priceChange < 0 ? 'text-red-500' : 'text-green-500'
                    }`}
                >
                    {priceChange.toFixed(2)}%
                </p>
                <p className="text-gray-500">Mkt Cap: ${marketcap.toLocaleString()}</p>
            </div>
        </div>
    );
};

export default Coin;