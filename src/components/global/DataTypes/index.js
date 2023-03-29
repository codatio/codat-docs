import React, { useState, Suspense } from "react";
import styles from "./styles.module.scss";
import { dataTypes } from "./dataTypes";

const DataType = ({dataType}) => {
  return (
    <div className={styles.dataType}>
      <div className={styles.row}>
        <a href={dataType.schema}>{dataType.name}</a>
        <p>· {dataType.key}</p>
      </div>
      <p>{dataType.description}</p>
    </div>
  )
}

const DataTypesList = ({dataTypes}) => {
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

const DataTypesLists = ({dataTypes}) => {
  return (
    <div className={styles.columns}>
      <div className={styles.column}>
        <h2 className={styles.header}>Accounting API</h2>

        <DataTypesList dataTypes={dataTypes.filter(dataType => dataType.product === "accounting")}/>
      </div>

      <div className={styles.column}>
        <h2 className={styles.header}>Commerce API</h2>

        <DataTypesList dataTypes={dataTypes.filter(dataType => dataType.product === "commerce")}/>
      </div>

      <div className={styles.column}>
        <h2 className={styles.header}>Banking API</h2>

        <DataTypesList dataTypes={dataTypes.filter(dataType => dataType.product === "banking")}/>
      </div>

      <div className={styles.column}>
        <h2 className={styles.header}>Bank Feeds API</h2>

        <DataTypesList dataTypes={dataTypes.filter(dataType => dataType.product === "bank-feeds")}/>
      </div>
    </div>
  )
}

const DataTypes = ({category, search=true}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = event => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const filteredDataTypes = searchValue === ""
    ? dataTypes
    : dataTypes.filter(dataTypes => {
        return dataTypes.name.toLowerCase().includes(searchValue.toLowerCase()) || 
          dataTypes.key.toLowerCase().includes(searchValue.toLowerCase()) || 
          dataTypes.description.toLowerCase().includes(searchValue.toLowerCase())
      })

  return (
    <div>
      {
        search && <input className={styles.search} value={searchValue} onChange={handleOnChange} type="text" placeholder="Enter a data type name..." />
      }

      { category 
        ? <><br/><br/><DataTypesList dataTypes={filteredDataTypes.filter(dataType => dataType.product === category)}/></>
        : <DataTypesLists dataTypes={filteredDataTypes}/>
      }
    </div>
  );
};

export default DataTypes;
