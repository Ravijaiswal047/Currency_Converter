import { useEffect, useState } from "react";

// Corrected: Renamed to start with "use"
function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        // Only fetch if a currency is provided
        if (currency) {
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json()) // Corrected: Called .json() as a function
            .then((res) => {
                setData(res[currency]);
            })
            .catch((error) => {
                // Log any errors that occur during the fetch process.
                console.error("Failed to fetch currency info:", error);
            });
        }
    }, [currency]);

    // This log is helpful for seeing the state on each render
    // console.log(`Data for ${currency}:`, data); 
    
    return data;
}

// Corrected: Export the renamed function
export default useCurrencyInfo;