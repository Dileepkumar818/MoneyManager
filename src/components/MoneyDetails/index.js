// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <div className="bg-container">
      <div className="balance-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="image"
          />
        </div>
        <div>
          <p>Your Balance</p>
          <p data-testId="balanceAmount">{balance}</p>
        </div>
      </div>
      <div className="income-container">
        <div className="incomeAmount">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="image"
          />
        </div>
        <div>
          <p>Your Income</p>
          <p data-testId="incomeAmount">{income}</p>
        </div>
      </div>
      <div className="expenses-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="image"
          />
        </div>
        <div>
          <p>Your Expenses</p>
          <p data-testId="expensesAmount">{expenses}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
