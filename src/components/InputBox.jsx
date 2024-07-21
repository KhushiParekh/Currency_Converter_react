import React, { useId } from 'react';

function InputBox(props){
//   const {
//     label,
//     amount,
//     onAmountChange,
//     onCurrencyChange,
//     currencyOptions,
//     selectCurrency,
//     amountDisable,
//   } = props;

  const label=props.label;
  const amount=props.amount;
  const onAmountChange=props.onAmountChange;
  const onCurrencyChange=props.onCurrencyChange;
  const currencyOptions=props.currencyOptions;
  const selectCurrency=props.selectCurrency;
  const amountDisable=props.amountDisable;


  const amtInputId = useId();
  return (
    <div className="flex p-3 text-sm bg-white rounded-lg">
      <div className="w-1/2">
        <label htmlFor={amtInputId} className="inline-block mb-2 text-black/40">
          {label}
        </label>
        <input
          id={amtInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="0"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="flex flex-wrap justify-end w-1/2 text-right">
        <p className="w-full mb-2 text-black/40">Currency Type</p>
        <select
          className="px-1 py-1 bg-gray-100 rounded-lg outline-none cursor-pointer"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;