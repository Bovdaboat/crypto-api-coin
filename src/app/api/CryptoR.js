import React from "react";
import { useState, useEffect } from "react";

function CryptoR() {
    const [result, setResult ] = useState('');
        useEffect(() => {
            const fetchData = async () => {
                const url = 'https://crypto-arbitrage.p.rapidapi.com/crypto-arb?pair=BTC%2FUSD&consider_fees=False&selected_exchanges=exmo%20cex%20bitstamp%20hitbtc';
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
                        'X-RapidAPI-Host': 'crypto-arbitrage.p.rapidapi.com'
                    }
                };

                try {
                    const response = await fetch(url, options);
                    const data = await response.text();
                    setResult(data);
                } catch (error) {
                    console.error(error);
                }
            };

            fetchData();
        }, []);

    return (
        <div>
            <h1>how much </h1>
            {result ? (
                <pre>{result}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

