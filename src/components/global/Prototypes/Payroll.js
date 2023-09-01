import React from 'react'

import { ModalController } from "@components/global/Modal";

const categories = [
  {
    name: "Bonuses",
    components: [
      {
        id: "bonus-perf",
        name: "Performance bonus",
      }
    ],
  },
  {
    name: "Benefits",
    components: [
      {
        id: "insurance-health",
        name: "Health insurance",
      },
      {
        id: "pension",
        name: "Pension",
      }
    ],
  },
  {
    name: "Allowances",
    components: [
      {
        id: "learning",
        name: "Learning & development",
      }
    ],
  },
]

const PrototypePayroll = () => {
  return <div className="prototype">
    <h4>Example mapping UI</h4>
    <p>Map your payroll components to a relevant account.</p>

    {
      categories.map(category => {
        return <div class="input-group">
          <h5>{category.name}</h5>
          {category.components.map(component => {
            return  <div class="input-row">
              <label for={`account-${component.id}`}>{component.name}</label>
              <input list="accounts" id={`account-${component.id}`} name={`account-${component.id}`} />
            </div>
          })}
        </div>
      })
    }

    <datalist id="accounts">
      <option value="Checking">35</option>
      <option value="Payroll Wage Expenses">92</option>
      <option value="Payroll Tax Payable">96</option>
      <option value="Payroll Expenses 401k">97</option>
    </datalist>
    
    <br/>
    <br/>

    <ModalController text="See underlying accounts data" variant="dark">
      <code>
      <pre>
        {
          `
    {
      "id": "1b6266d1-1e44-46c5-8eb5-a8f98e03124e",
      "nominalCode": "35",
      "name": "Checking",
      "description": "Some description",
      ...
    },
    {
      "id": "c7e42905-330a-4e4d-b318-0831258bfe10",
      "nominalCode": "35",
      "name": "Payroll Wage Expenses",
      "description": "Some description",
      ...
    },
    {
      "id": "997552f0-7f9e-4e0d-94a8-3ea20de98c4f",
      "nominalCode": "35",
      "name": "Payroll Tax Payable",
      "description": "Some description",
      ...
    },
    {
      "id": "6d01fb8f-899c-4e5a-b2c3-8b7e93102da1",
      "nominalCode": "35",
      "name": "Payroll Expenses 401k",
      "description": "Some description",
      ...
    },
          `
        }</pre>
      </code>
    </ModalController>
  </div>
}

export default PrototypePayroll