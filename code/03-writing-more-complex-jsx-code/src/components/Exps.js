import ExpenseItem from "./ExpenseItem";

function Exps(props) {
    return (
        <div>
        <ExpenseItem expTitle={props.item[0].title} expNum={props.item[0].amount}></ExpenseItem>
        <ExpenseItem expTitle={props.item[1].title} expNum={props.item[1].amount}></ExpenseItem>
      </div>
    );

}
export default Exps;
