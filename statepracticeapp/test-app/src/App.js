import React, { useState } from 'react';



export default function App() {
  //here we are storing the applications default value which is 100 within the price variable which a special variable with the useState function attached it
  //this allows us to use the setPrice function to set new data for this variable which will trigger react to re-evaulate/re-render the component function to reflect the new data
  //when the eventhandler on click is pressed
  const [price, setPrice] = useState(100);

 //the purpose of the state hook in react is to make sure the entire componenet function is called again/re-exeuted when the state updateing function (setPrice) is called 
 //by calling this function your telling react that you want to assign a new value to this state and that the component function should re-evaulted and re-exectued to reflect the changes specifed within the state updating fucntion

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