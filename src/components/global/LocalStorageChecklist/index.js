import React, { useState, useEffect } from 'react'

const camalize = (str) =>
  str
    .toLowerCase()
    .replace(/^([a-zA-Z0-9])/g, (m, chr) => chr.toUpperCase());

const genStorageKey = (prefix, item) => `${prefix}${camalize(item)}`

const LocalStorageChecklist = ({items, prefix='list'}) => {
  const [ itemKeys ] = useState(items.map(item => [item, genStorageKey(prefix, item)]))
  const [ checkedKeys, setCheckedKeys ] = useState(typeof window !== 'undefined' && localStorage.getItem(prefix)?.split(',') || [])

  const toggleItem = (key) => {
    if(checkedKeys?.length <= 0) { // no array
      setCheckedKeys([key])
    } else if(checkedKeys.indexOf(key) < 0) { // item not present
      setCheckedKeys([...checkedKeys, key])
    } else { // remove item
      setCheckedKeys(checkedKeys.filter(x=> x!==key))
    }
  }

  const saveChecked = () => {
    localStorage.setItem(prefix, checkedKeys.join(","));
  };

  useEffect(saveChecked, [checkedKeys])

  return (
    <ul className="contains-task-list containsTaskList_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Ul-styles-module">
      {
        itemKeys.map(item => {
          return (
            <li key={item[1]} className="task-list-item">
              <input 
                className="task-checkbox" 
                type="checkbox" 
                onClick={() => toggleItem(item[1])} 
                defaultChecked={checkedKeys.indexOf(item[1]) >= 0}
              />

              <label>{item[0]}</label>
            </li>
          )
        }
      )}
    </ul>
  )
}

export default LocalStorageChecklist