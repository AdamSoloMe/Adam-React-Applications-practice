
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card';
function Expenses(Propsdata) {
    //each ExpenseItem component has it's own state even though they are being create multiple times
    return (
        <Card className='expenses'>

            <ExpenseItem //props can also be set statically with hard coded data 
                title={Propsdata.items[0].title}
                amount={Propsdata.items[0].amount}
                date={Propsdata.items[0].date}
            ></ExpenseItem>
            
            <ExpenseItem
                title={Propsdata.items[1].title}
                amount={Propsdata.items[1].amount}
                date={Propsdata.items[1].date}
            ></ExpenseItem>
            <ExpenseItem
                title={Propsdata.items[2].title}
                amount={Propsdata.items[2].amount}
                date={Propsdata.items[2].date}
            ></ExpenseItem>
            <ExpenseItem
                title={Propsdata.items[3].title}
                amount={Propsdata.items[3].amount}
                date={Propsdata.items[3].date}
            ></ExpenseItem>
           
            
        </Card>
       

    );
}
export default Expenses;