import { useState, useEffect } from "react"

function useCurrencyinfo(currency){
    const [data, setData] = useState({}); // passing an empty obj so that iff fetch call is not coming then atleat it wont cras(a contingrncy plan)
    useEffect(()=>{
        
        fetch( `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json()) //now we need to store this json data somewhere so we need a var
        .then((res)=> setData(res[currency])) // why currency : observe the response that we get from the api and analyse
        .catch((err) => console.error('Error fetching currency data:', err)); // Handle errors
    },  [currency]) //why currency is a dependency: we need to call this fetch in useEffect whenever we change the currency that is the parameter so..
    return data
}

 export default useCurrencyinfo;