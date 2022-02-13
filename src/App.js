import './App.scss';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import {AppProvider} from './context/AppContext';

function App() {
  return (
    <AppProvider>
    <div className="App">
      <div className="container">
        <h1 className="mt-3">My Budget Planner</h1>
        <div className="row mt-4">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        {/* start of Expense List  */}
        <h3 className='mt-3'>Expense List</h3>
          <div className="row mt-3">
            <div className="col-sm">
              <ExpenseList />
            </div>
          </div>
        {/* start of Add Expense */}
        <h3 className="mt-3">Add Expense</h3>
          <div className="row mt-3">
            <div className="col-sm">
              <AddExpenseForm />
            </div>
          </div>
      </div>  
    </div>   
    </AppProvider>
  );
};

export default App;
