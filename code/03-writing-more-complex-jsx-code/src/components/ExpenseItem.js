function ExpenseItem(props) {
  const expTitle = "Car Insurance";
  const expNum = 294.67;

  return (
    <div>
      <div>March 28th 2021</div>
      <div>
        <h2>Car Insurance</h2>
        <h3>{props.expTitle}</h3>
        <div> ${props.expNum} </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
