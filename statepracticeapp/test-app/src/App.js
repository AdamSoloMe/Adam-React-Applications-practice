import React, { useState } from 'react';



export default function App() {
  //here we are storing the applications default value which is 100 within the price variable which a special variable with the useState function attached it
  //this allows us to use the setPrice function to set new data for this variable which will trigger react to re-evaulate/re-render the component function to reflect the new data
  //when the eventhandler on click is pressed
  const [price, setPrice] = useState(100);

  function clickHandler() {
    setPrice(75);
  }

  return (
    <div>
      <p>${price}</p>
      <button onClick={clickHandler}>Apply Discount</button>
  </div>
  );
}