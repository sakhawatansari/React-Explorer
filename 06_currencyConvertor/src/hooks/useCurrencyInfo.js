import {useEffect, useState} from "react"

function useCurrencyInfo (currency) {
    const [data, setData] = useState({})
    useEffect (() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)

        // fetch(`https://api.exchangerate-api.com/v4/latest/${currency}.json`)

        //fetch(`https://v6.exchangerate-api.com/v6/37035d61727fc01d8aa16ed7/latest/${currency}.json`)

        .then((res) => res.json()) // Chaining 
        .then((res) => setData(res[currency]))
    }, [currency])
    return data
}

export default useCurrencyInfo;