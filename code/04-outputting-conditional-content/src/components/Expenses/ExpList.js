import ExpenseItem from './ExpenseItem';


const ExpList = (props) => {
    let expensesContent = []
    if (props.items.length === 0) {
        return <p className='expense-item'> No expenses!</p>;
    }

    if (props.items.length > 0) {
      expensesContent = props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ));
    }
    return expensesContent
}

export default ExpList