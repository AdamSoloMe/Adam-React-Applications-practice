import React,{useState} from 'react';

import './ExpenseForm.css';
import './NewExpense.css';


const ExpenseForm = () => {
   
    var formTitle = document.getElementById("title");
    var formAmount = document.getElementById("amount");
    var formDate = document.getElementById("date");
    var formLabel = document.getElementById("bob");

    const [label,setLabel]=useState("");


    //multiple states example

    /*
    const [title,setTitle]=useState(formTitle);
    const [amount,setAmount]=useState(formAmount);
    const [date,setDate]=useState(formDate);
    import React,{useState} from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const[count,setCounter]=useState{
        number:0
    }
    
    function counter(event){
        const pressed=
        
        
    }
    return (
      <div>
        <p id="counter"></p>
        <button onClick={counter}>Increment</button>
      </div>
    );
}
    */

    //oneState example

    const [userInput,setUserInput]=useState({
        enteredTitle: formTitle,
        enteredAmount: formAmount,
        enteredDate: formDate,
    });

    var title;
    function titleChangeHandler(event){
       
         setUserInput((prevState)=>{
            title=enteredTitle
            return{...prevState,enteredTitle: event.target.value}
         })

         formTitle.textContent=title;
         
    
    };

    function amountChangeHandler(event){
        //setAmount(event.target.value);
        ///formAmount.textContent=amount;
    };

    function dateChangeHandler(event){
       // setDate(event.target.value);
      //  formDate.textContent = date;
      
    };


    
    return (
        <div className='new-expense'>
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label id='title'>Title</label>
                        <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label id='amount'>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label id="bob"> state Test</label>
                    <label id="date"> Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
        </div>
    );
};


export default ExpenseForm;