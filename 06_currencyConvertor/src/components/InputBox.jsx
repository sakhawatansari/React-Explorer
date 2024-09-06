import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [], // use default array to prevent app crash
  selectCurrency = 'usd', // default set to usd
  amountDisable = false,
  currencyDisable = false, // these two disable options are optional
  className = '',
}) {
  const amountInputId = useId(); // give unique id

  return (
    <div className={`bg-gray-800 p-4 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-sky-400 mb-2 inline-block"> 
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5 text-white"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-sky-400 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-2 py-1 bg-gray-700 text-white cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
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
}

export default InputBox;
