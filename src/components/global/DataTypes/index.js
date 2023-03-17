import React, { useState, Suspense } from "react";
import styles from "./styles.module.scss";
import { dataTypes } from "./dataTypes";

const getRoute = (dataType) => {
  return `/${dataType.product}-api#/schemas/${dataType.name.split(' ').join()}`
}

const DataType = ({dataType}) => {
  return (
    <div className={styles.dataType}>
      <a href={getRoute(dataType)}>{dataType.name}</a>
      <p>{dataType.key}</p>
    </div>
  )
}

export const DataTypesList = ({dataTypes}) => {
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

const DataTypes = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = event => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const filteredDataTypes = searchValue === ""
    ? dataTypes
    : dataTypes.filter(dataTypes => dataTypes.name.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <div>
      <input className={styles.search} value={searchValue} onChange={handleOnChange} type="text" placeholder="Enter a data type name..." />

      <div className={styles.columns}>
        <div className={styles.column}>
          <h2 className={styles.header}>Accounting API</h2>

          <DataTypesList dataTypes={filteredDataTypes.filter(dataType => dataType.product === "accounting")}/>
        </div>

        <div className={styles.column}>
          <h2 className={styles.header}>Commerce API</h2>

          <DataTypesList dataTypes={filteredDataTypes.filter(dataType => dataType.product === "commerce")}/>
        </div>

        <div className={styles.column}>
          <h2 className={styles.header}>Banking API</h2>

          <DataTypesList dataTypes={filteredDataTypes.filter(dataType => dataType.product === "banking")}/>
        </div>

        <div className={styles.column}>
          <h2 className={styles.header}>Bank Feeds API</h2>

          <DataTypesList dataTypes={filteredDataTypes.filter(dataType => dataType.product === "bank-feeds")}/>
        </div>
      </div>
    </div>
  );
};

export default DataTypes;
