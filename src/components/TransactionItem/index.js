// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transaction, deleteTransaction} = props
  const {total, head, trans, id} = transaction

  const onDelete = () => {
    deleteTransaction(id)
  }
  return (
    <li className="list">
      <p className="title-para">{head}</p>
      <p className="amount-para">Rs.{total}</p>
      <p className="type-para">{trans}</p>
      <button
        className="button"
        data-testid="delete"
        type="button"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="image"
        />
      </button>
    </li>
  )
}

export default TransactionItem
