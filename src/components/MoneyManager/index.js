import {Component} from 'react'
import {v4} from 'uuid'
// eslint-disable-next-line import/no-named-as-default-member
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    optionId: transactionTypeOptions[0].optionId,
    transactions: [],
  }

  getAmount = event => {
    this.setState({amount: event.target.value})
  }

  getTitle = event => {
    this.setState({title: event.target.value})
  }

  addTransaction = () => {
    const {amount, title, optionId} = this.state
    const transactionObj = {
      total: parseInt(amount),
      id: v4(),
      head: title,
      type: optionId,
    }

    this.setState(prev => ({
      transactions: [...prev.transactions, transactionObj],
      amount: '',
      title: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getType = event => {
    this.setState({optionId: event.target.value})
  }

  income = () => {
    const {transactions} = this.state
    let total = 0

    transactions.forEach(each => {
      if (each.type === 'INCOME') {
        total += each.total
      }
    })

    return total
  }

  expenses = () => {
    const {transactions} = this.state
    let expense = 0

    transactions.forEach(each => {
      if (each.type === 'EXPENSES') {
        expense += each.total
      }
    })
    return expense
  }

  balance = () => {
    const {transactions} = this.state
    let blnc = 0
    let total = 0
    let expense = 0

    transactions.forEach(each => {
      if (each.type === 'INCOME') {
        total += each.total
      } else {
        expense += each.total
      }
    })

    blnc = total - expense

    return blnc
  }

  deleteTransaction = id => {
    const {transactions} = this.state
    const updatedList = transactions.filter(each => each.id !== id)

    this.setState({transactions: updatedList})
  }

  render() {
    const {transactions, optionId, title, amount} = this.state

    const balance = transactions.length !== 0 ? this.balance() : 0
    const income = transactions.length !== 0 ? this.income() : 0
    const expenses = transactions.length !== 0 ? this.expenses() : 0

    return (
      <div className="bg-container">
        <div className="title-container">
          <h1>Hi, Richard</h1>
          <p>Welcome back to your Money Manager</p>
        </div>
        <div className="money-details">
          <MoneyDetails balance={balance} income={income} expenses={expenses} />
        </div>
        <div className="transactions-container">
          <div className="transactions-input">
            <h1>Add Transaction</h1>
            <label htmlFor="title">Title</label>
            <input
              className="input"
              id="title"
              type="text"
              value={title}
              placeholder="Title"
              onChange={this.getTitle}
            />
            <label htmlFor="amount">Amount</label>
            <input
              className="input"
              id="amount"
              type="text"
              value={amount}
              placeholder="Amount"
              onChange={this.getAmount}
            />
            <label htmlFor="type">Type</label>
            <select
              name="type"
              className="input"
              id="type"
              value={optionId}
              onChange={this.getType}
            >
              {transactionTypeOptions.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button onClick={this.addTransaction} type="button">
              Add
            </button>
          </div>
          <div className="transactions">
            <h1>History</h1>
            <div className="title">
              <p className="title-para">Title</p>
              <p className="amount-para">Amount</p>
              <p className="type-para">Type</p>
            </div>
            <ul>
              {transactions.map(each => (
                <TransactionItem
                  transaction={each}
                  key={each.id}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
