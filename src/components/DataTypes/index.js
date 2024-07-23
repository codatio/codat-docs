import React, { useState, Suspense } from "react";

import { dataTypes } from "./dataTypes";
import { productDataTypes } from "./productDataTypes";

import styles from "./styles.module.scss";

const DataType = ({dataType}) => {
  return (
    <div className={styles.dataType}>
      <div className={styles.title}>
        <p>
          <a href={dataType.schema}>{dataType.name}</a>
           · 
        </p>
        <p>{dataType.key}</p>
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
  const accountingDataTypes = dataTypes.filter(dataType => dataType.category === "accounting")
  const commerceDataTypes = dataTypes.filter(dataType => dataType.category === "commerce")
  const bankingDataTypes = dataTypes.filter(dataType => dataType.category === "banking")
  const bankFeedsDataTypes = dataTypes.filter(dataType => dataType.category === "bank-feeds")

  return (
    <div className={styles.columns}>
      <div className={styles.column}>
        { accountingDataTypes.length > 0 && 
          <>
            <h2 className={styles.header}>Accounting</h2>
            <DataTypesList dataTypes={accountingDataTypes}/> 
          </>
        }
      </div>

      <div className={styles.column}>
        { commerceDataTypes.length > 0 && 
          <>
            <h2 className={styles.header}>Commerce</h2>
            <DataTypesList dataTypes={commerceDataTypes}/> 
          </>
        }
      </div>

      <div className={styles.column}>
        { bankingDataTypes.length > 0 && 
          <>
            <h2 className={styles.header}>Banking</h2>
            <DataTypesList dataTypes={bankingDataTypes}/> 
          </>
        }
      </div>

      <div className={styles.column}>
        { bankFeedsDataTypes.length > 0 && 
          <>
            <h2 className={styles.header}>Bank Feeds</h2>
            <DataTypesList dataTypes={bankFeedsDataTypes}/> 
          </>
        }
      </div>
    </div>
  )
}

const DataTypes = ({ urlPrefix, product, search=true }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = event => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const normalizedDataTypes = dataTypes
    .filter(dataType => productDataTypes[product].findIndex(dataTypeKey => dataType.key === dataTypeKey) !== -1)
    .map(dataType => {
      return {
        ...dataType,
        schema: urlPrefix + dataType.schema,
      }
    })

  const filteredDataTypes = searchValue === ""
    ? normalizedDataTypes
    : normalizedDataTypes.filter(dataTypes => {
        return dataTypes.name.toLowerCase().includes(searchValue.toLowerCase()) || 
          dataTypes.key.toLowerCase().includes(searchValue.toLowerCase()) || 
          dataTypes.description.toLowerCase().includes(searchValue.toLowerCase())
      })

  return (
    <div>
      {
        search && <input className={styles.search} value={searchValue} onChange={handleOnChange} type="text" placeholder="Enter a data type name..." />
      }

      <DataTypesLists dataTypes={filteredDataTypes}/>
    </div>
  );
};

export default DataTypes;
