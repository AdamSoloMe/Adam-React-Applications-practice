import './App.css';
import ExpenseForm from './components/NewExpensesComponents/ExpenseForm';
import Expenses from './components/Expenses/Expenses';
import FormComponent from './components/NewExpensesComponents/FormComponent';

function App() {
  const expenses = [ //here I am creating a JavaScript Array with a bunch of javaScripit Objects
    {
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]


  return (
    <div>
      <ExpenseForm />
      <Expenses items={expenses}></Expenses>
      
      
    </div>

  );
}

export default App;
