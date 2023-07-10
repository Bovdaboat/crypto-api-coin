"use client"
import React from "react";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios"

const Hero = () => {

    // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en

    return(
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold text-blue-500">Hello there!</h1>
                    <p className="py-6 text-blue-500">Discover the current value of cryptocurrencies
                        and unlock the potential of the digital market.</p>
                    <div>
                    <Fragment>

                        <div className="flex justify-center">
                            <div className="flex space-x-1">
                                <input
                                    type="text"
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
                    </Fragment>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero