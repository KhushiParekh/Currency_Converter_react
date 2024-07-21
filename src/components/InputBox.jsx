import React , {useId} from 'react'


function InputBox({
    label,//from/to
    amount, //conversion part
    onAmountChange, // to change the state if the amount is changing
    onCurrencyChange, //same for curr
    CurrencyOptions =[] , // currency opt list default passing the empty obj so that it doesnt get crash
    selectCurrency ="usd",
    amountDisabled= false,
    currencyDisabled=false,
    className = "",
    
}) {
   const amtInputId = useId();
    return (
        //this syntax is used when we have to combine static CSS classes with dynamic ones based on props or state.
         <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
              <div className="w-1/2">
                <label htmlFor={amtInputId} className="inline-block mb-2 text-black/40">
                    {label}
                </label>
                <input id={amtInputId} className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled= {amountDisabled} value={amount}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} //if we want to change amt
                />
            </div>
            <div className="flex flex-wrap justify-end w-1/2 text-right">
                <p className="w-full mb-2 text-black/40">Currency Type</p>
                <select className="px-1 py-1 bg-gray-100 rounded-lg outline-none cursor-pointer"
                        value={selectCurrency} disabled= {currencyDisabled}
                        onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    //loop for all the opt of currencies 
                       {CurrencyOptions.map((currency)=>
                       (
                         <option key={currency} value={currency}>
                            {currency}
                         </option>))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;

