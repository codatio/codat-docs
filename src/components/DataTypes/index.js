import React, { useState, Suspense } from "react";

import DataType from "./DataType";

import Lending from "../../../static/oas/Codat-Lending.json"
import SyncPayroll from "../../../static/oas/Codat-Sync-Payroll.json"

import styles from "./styles.module.scss";

const objToArr = obj => Object.keys(obj).map((key) => { 
  return { ...obj[key], key };
});

const products = {
  'lending': {
    name: 'Lending API',
    spec: Lending,
    path: "/lending-api",
  },
  'payroll': {
    name: 'Sync for Payroll',
    spec: SyncPayroll,
    path: "/sync-for-payroll-api",
  },
}

const generatePath = (dataType, productName) => {
  return `${products[productName].path}#/schemas/${dataType.key}`
}

const getProductDataTypes = (productName) => {
  const spec = products[productName]?.spec
  
  const validDataTypes = objToArr(spec.components.schemas)
    .filter(dataType=>!dataType['x-internal'])
    .map(dataType => {
      return { ...dataType, path: generatePath(dataType, productName)}
    })

  return validDataTypes
}

const DataTypesList = (props) => {
  const {dataTypes} = props

  if (dataTypes.length && dataTypes.length >= 1) {
    return (
      <div className={styles.dataTypesList}>
        {
          dataTypes.map((dataType, i) => {
            return <DataType key={i} dataType={dataType}/>
          })
        }
      </div>
    )
  }

  return (
    <div className={styles.zeroState}>No matching supported data types found</div>
  )
}

const DataTypes = ({ productName, search=true }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = event => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const normalizedDataTypes = getProductDataTypes(productName)
  normalizedDataTypes.sort((a,b) => a.title < b.title ? -1 : 1)

  const filteredDataTypes = searchValue === ""
    ? normalizedDataTypes
    : normalizedDataTypes.filter(dataType => {
        return dataType.title.toLowerCase().includes(searchValue.toLowerCase()) || 
          dataType.key.toLowerCase().includes(searchValue.toLowerCase()) || 
          dataType.description.toLowerCase().includes(searchValue.toLowerCase())
      })

  return (
    <div>
      <h2 className={styles.header}>{products[productName].name} data types</h2>

      {
        search && <input className={styles.search} value={searchValue} onChange={handleOnChange} type="text" placeholder="Enter a data type name..." />
      }

      <DataTypesList dataTypes={filteredDataTypes}/> 
    </div>
  );
};

export default DataTypes;
