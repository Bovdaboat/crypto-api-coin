"use client"
import React from "react";
import { Fragment } from "react";
import { useState, useEffect } from "react";

const Hero = () => {
    return(
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold text-blue-500">Hello there</h1>
                    <p className="py-6 text-blue-500">Discover the current value of cryptocurrencies
                        and unlock the potential of the digital market.</p>
                    <div>
                    <Fragment>
                    <input
                        className="textarea text-blue-500"
                    type="text"
                    placeholder="Search Here"
                    />
                    </Fragment>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero