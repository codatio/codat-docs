import React, { useState, useEffect } from "react";
import styles from './styles.module.scss';

const defaultComponents = [
  {
    id: "bonus-perf",
    name: "Performance bonus",
    category: "bonuses",
  },
  {
    id: "insurance-health",
    name: "Health insurance",
    category: "benefits",
  },
  {
    id: "pension",
    name: "Pension",
    category: "benefits",
  },
  {
    id: "learning",
    name: "Learning & development",
    category: "allowances",
  },
];

const getAccountsResponse = [
  {
    id: "83a6bc48-4adf-4088-b075-032d0676c167",
    name: "Checking",
    nominalCode: "35",
  },
  {
    id: "c163f200-b671-470d-9af9-f1b968ff3d4f",
    name: "Payroll Wage Expenses",
    nominalCode: "92",
  },
  {
    id: "d3b94f5f-8629-4360-9583-9a9a44ec6970",
    name: "Payroll Tax Payable",
    nominalCode: "96",
  },
  {
    id: "402a1cba-b226-4431-9325-9ae2aad62763",
    name: "Payroll Expenses 401k",
    nominalCode: "97",
  },
]

const ComponentInput = ({component, onClick}) => {
  if (component.mappedAccount) {
    return <div className={styles.confirmed}>✅ {component.name} → {component.mappedAccount.name}</div>
  }

  return (
    <div className="input-row" key={component.id}>
      <label for={`account-${component.id}`}>
        {component.name}
      </label>

      <input
        list="accounts"
        id={`account-${component.id}`}
        name={`account-${component.id}`}
        onChange={onClick}
      />
    </div>
  );
}

const PrototypePayroll = () => {
  const [ components, setComponents ] = useState(defaultComponents)

  const setComponentMapping = component => value => {
    const newComponents = components
    const match = getAccountsResponse.find(account => value === account.name)
    if (!match) return 

    const targetIndex = components.findIndex(targetComponent => targetComponent.id === component)
    newComponents[targetIndex].mappedAccount = match

    setComponents([...newComponents])
  }

  const categories = Array.from(new Set(components.map(component => component.category)))

  return (
    <div className="prototype">
      <h4>Example mapping UI</h4>


      <p>Map your payroll components to a relevant account.</p>

      { categories.map(category => {
        return (
          <div className={`input-group ${styles.card}`} key={category}>
            <h5 className={styles.category}>{category}</h5>

            {components
              .filter(component => component.category === category)
              .map((component) => <ComponentInput onClick={e => setComponentMapping(component.id)(e.target.value)} component={component}/>)
            }
          </div>
        )
      })}

      <datalist id="accounts">
        {
          getAccountsResponse.map(account => <option value={account.name}>{account.nominalCode}</option>)
        }
      </datalist>
    </div>
  );
};
export default PrototypePayroll;