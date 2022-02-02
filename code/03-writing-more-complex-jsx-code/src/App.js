import Exps from "./components/Exps";

function App() {
  var exps = [
    { title: "a", amount: 200 },
    { title: "b", amount: 100 },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Exps item={exps}></Exps>
    </div>
  );
}

export default App;
