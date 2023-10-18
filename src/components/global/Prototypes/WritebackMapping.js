import React, { useState, useEffect } from "react";
import styles from './styles.module.scss';

const getBankAccountsResponse = [
  {
    id: "83a6bc48-4adf-4088-b075-032d0676c167",
    name: "Business savings account",
    value: "Lloyds",
  },
  {
    id: "c163f200-b671-470d-9af9-f1b968ff3d4f",
    name: "Business expenses card",
    value: "Capital on Tap",
  },
  {
    id: "d3b94f5f-8629-4360-9583-9a9a44ec6970",
    name: "Business current account",
    value: "Virgin Money",
  },
]

const getAccountsResponse = [
  {
    id: "1b7c3fdd-82c1-4780-b31f-6ec979d1e92b",
    name: "Advertising",
    value: "Costs",
  },
  {
    id: "664cb0b3-15ac-4a8b-bd67-5dfd59389365",
    name: "Cost of labor",
    value: "Costs",
  },
  {
    id: "664cb0b3-15ac-4a8b-bd67-5dfd59389365",
    name: "Borrowing",
    value: "Costs",
  },
  {
    id: "b85181b5-c9eb-4cc7-8e06-0507aa0d4222",
    name: "Create new account",
    value: "+",
  },
]

const ComponentInput = ({component, onClick}) => {
  console.log(component)
  if (!component) return <div/>

  if (component?.mappedAccount) {
    return <div className={styles.confirmed}>✅ {component.name} → {component.mappedAccount}</div>
  }

  return (
    <div className="input-row" key={component.id}>
      <label for={`account-${component.id}`}>
        {component.name}
      </label>

      <input
        list={component.id}
        id={`account-${component.id}`}
        name={`account-${component.id}`}
        onChange={onClick}
      />
    </div>
  );
}

const ComponentMapper = ({children, initialComponent, arr}) => {
  const [ component, setComponent ] = useState(initialComponent)

  const setComponentMapping = value => {
    setComponent({
      ...component,
      mappedAccount: value,
    })
  }

  return <div className={`input-group ${styles.card}`}>
    {children}

    <ComponentInput component={component} onClick={e => setComponentMapping(e.target.value)}/>

    <datalist id={component.id}>
      {
        arr.map((account, i) => <option key={i} value={account.name}>{account.value}</option>)
      }
    </datalist>
  </div>
}

const PrototypeWritebackMapping = () => {
// Select bank account: Select the business bank account the funds will be deposited.
// Select/create expense account: Select or create the expense account you want any fees or interest tracked against.
// A comment that a new bank account will be created in your accounting platform. This account acts as the lenders virtual account and is used for double-entry accounting purposes.

  return (
    <div className="prototype">
      <h4>Example mapping UI</h4>


      <p>Map your loan writeback components to a relevant account.</p>

      <ComponentMapper 
        arr={getBankAccountsResponse}
        initialComponent={{
          id: "deposit",
          name: "Deposit account",
        }}
      >
        <h5 className={styles.category}>Deposit account</h5>

        <p>Select the business bank account where the funds will be deposited.</p>
      </ComponentMapper>

      <ComponentMapper
        arr={getAccountsResponse}
        initialComponent={  {
          id: "expense",
          name: "Expense account",
        }}
      >
        <h5 className={styles.category}>Expense account</h5>

        <p>Select or create the expense account you want any fees or interest tracked against.</p>
      </ComponentMapper>

      <div className={`input-group ${styles.card}`}>
        <h5 className={styles.category}>Lender account</h5>
        
        <p><b>We'll also create a new bank account in your accounting platform</b></p>

        <p>This account acts as the lender's virtual account and is used for double-entry accounting purposes.</p>
      </div>
    </div>
  );
};
export default PrototypeWritebackMapping;