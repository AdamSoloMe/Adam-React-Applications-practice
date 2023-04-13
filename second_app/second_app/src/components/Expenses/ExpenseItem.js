import React,{useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


function ExpenseItem(props) {//here within the Propsdata parameter React is sending data from the main App.js file 
    //to each dynamic arribute with curly braces we have defined in JSX 
    /*
       const month = Propsdata.date.toLocaleString('en-US', { month: 'long' });
       //here we are extracting the month data from the date object we are getting 
       //from the props parameter
       const day=Propsdata.date.toLocaleString('en-US',{day:'2-digit'})
       const year = Propsdata.date.getFullYear();
       */
      
    const [title,setTitle]=useState(props.title);//use State returns an array where the first value is the variabele being updatad and the seconf value is the updating function for that first value
    //this use State function is a special method called a react hook 
    //which will update the props title when the cilck handler is pressed
    //the React app will then render all of the JSX for the component function where the state updating function was called to reflect the update within the click handler method
        //
    console.log(`the state for This item's title is currently ${props.title}`)
       function clickHandler(){
           
               setTitle("walter")
               //alert(`the title has been changed from ${props.title}`)
               
               window.open("https://www.youtube.com/watch?v=-9MkJUlYZAM", "_blank");
    
       }
    console.log(`the state has been re-initialzied to ${title} `)
   // alert(`the state has been re-initialzied to ${title} `)

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            {/* the alternative Syntax is a self closing tag of
                <ExpenseDate/>
             */}
            <div className="expense-item__description">
                <h2>
                    {title}
                </h2>
                <div className='expense-item__price'>
                    {props.amount}
                    
                </div>
            </div>
            &nbsp;
            <button onClick={clickHandler}> change title</button>
        </Card>
    );
}

export default ExpenseItem;