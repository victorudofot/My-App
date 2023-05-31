import Expenses from "./components/Expenses/Expenses";
const App = () => {
  const expenses = [
    {
      id      : 'el',
      title   : 'Toilet Paper',
      amount  :  94.12,
      date    :  new Date (2023, 7, 14)
    },
    {
      id      : 'e2',
      title   : 'New Tv',
      amount  :  799.49,
      date    :  new Date (2023, 2, 12)
    },
    {
      id      : 'e3',
      title   : 'Car Insurance',
      amount  :  294.67,
      date    :  new Date (2023, 2, 28)
    },
    {
      id      : 'e4',
      title   : 'New Desk (wooden)',
      amount  :  450,
      date    :  new Date (2023, 5, 12)
    }
  ]
  return (
    <div>
      <h1>Expense Item</h1> 
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
