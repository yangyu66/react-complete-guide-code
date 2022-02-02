import ExpenseItem from "./components/ExpenseItem";

function App() {
  var exps = [
    { title: "a", amount: 200 },
    { title: "b", amount: 100 },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        expTitle={exps[0].title}
        expNum={exps[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        expTitle={exps[1].title}
        expNum={exps[1].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
