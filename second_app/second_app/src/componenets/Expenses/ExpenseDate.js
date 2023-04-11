
import './ExpenseDate.css';

function ExpenseDate(Propsdata){
    const month = Propsdata.date.toLocaleString('en-US', { month: 'long' });
    //here we are extracting the month data from the date object we are getting 
    //from the props parameter
    const day = Propsdata.date.toLocaleString('en-US', { day: '2-digit' })
    const year = Propsdata.date.getFullYear();


return(
<div className="expense-date">
    <div className="expense-date__month">{month}</div>
     <div className="expense-date__day">{day}</div>
    <div className="expense-date__year">{year}</div>

</div>
);

} 
export default ExpenseDate;