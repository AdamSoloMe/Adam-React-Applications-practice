import "./Card.css";

function Card(props) {

    const classes = 'card ' + props.className;
    //this gets the className from the value of the props data parameter which is sending data 
    //down from app.js to expenses to expenses item to expenses.data
    //by creating and setting this variable it alsos us to add custom css style classes
    // on to our custom componet
    // the same way we add them to div

    return <div className={classes}>{props.children}</div>;
    //props.children prop, Children is a reserved prop name 
    //and the value of the special children prop
    /// is the content within the opening and closing tags of your special comoponent
    //
    //
    // example
    // <Card className='expense-item'>

    /* ALL OF THE CONTENT IN THIS CARD TAG IS the value within the props.children variable
             <ExpenseDate date={props.date}></ExpenseDate>*/
             /*{ the alternative Syntax is a self closing tag of
                 <ExpenseDate/>
                 }   
              
 <div className="expense-item__description">
     <h2>
         {props.title}
     </h2>
     <div className='expense-item__price'>
         {props.amount}
     </div>
 </div>
 </Card >

*/
}


export default Card;