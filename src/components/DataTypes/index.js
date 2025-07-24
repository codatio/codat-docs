import React, { useState, Suspense } from "react";

import DataType from "./DataType";

import Lending from "../../../static/oas/Codat-Lending.json";
import SyncPayroll from "../../../static/oas/Codat-Sync-Payroll.json";
import BankFeeds from "../../../static/oas/Codat-Bank-Feeds.json";
import SyncCommerce from "../../../static/oas/Codat-Sync-Commerce.json";
import SyncExpenses from "../../../static/oas/Codat-Sync-Expenses.json";
import BillPaySync from "../../../static/oas/Codat-Sync-Payables.json";
import BillPayAsync from "../../../static/oas/Codat-Sync-Payables-v1.json";

import styles from "./styles.module.scss";

const objToArr = (obj) =>
  Object.keys(obj).map((key) => {
    return { ...obj[key], key };
  });

const products = {
  lending: {
    name: "Lending",
    spec: Lending,
    path: "/lending-api",
  },
  payroll: {
    name: "Sync for Payroll",
    spec: SyncPayroll,
    path: "/sync-for-payroll-api",
  },
  bankFeeds: {
    name: "Bank Feeds",
    spec: BankFeeds,
    path: "/bank-feeds-api",
  },
  commerce: {
    name: "Sync for Commerce",
    spec: SyncCommerce,
    path: "/sync-for-commerce-api",
  },
  expenses: {
    name: "Expenses",
    spec: SyncExpenses,
    path: "/sync-for-expenses-api",
  },
  billpayasync: {
    name: "Bill Pay (async)",
    spec: BillPayAsync,
    path: "/sync-for-payables-api",
  },
  billpaysync: {
    name: "Bill Pay (sync)",
    spec: BillPaySync,
    path: "/sync-for-payables-v2-api",
  },
};

const generatePath = (dataType, productName) => {
  return `${products[productName].path}#/schemas/${dataType.key}`;
};

const getProductDataTypes = (productName) => {
  const spec = products[productName]?.spec;

  const validDataTypes = objToArr(spec.components.schemas)
    .filter((dataType) => !dataType["x-internal"])
    .map((dataType) => {
      return { ...dataType, path: generatePath(dataType, productName) };
    });

  return validDataTypes;
};

const DataTypesList = (props) => {
  const { dataTypes } = props;

  if (dataTypes.length && dataTypes.length >= 1) {
    return (
      <div className={styles.dataTypesList}>
        {dataTypes.map((dataType, i) => {
          return <DataType key={i} dataType={dataType} />;
        })}
      </div>
    );
  }

  return (
    <div className={styles.zeroState}>
      No matching supported data types found
    </div>
  );
};

const DataTypes = ({ productName, search = true }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleOnChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const normalizedDataTypes = getProductDataTypes(productName);
  normalizedDataTypes.sort((a, b) => (a.title < b.title ? -1 : 1));

  const filteredDataTypes =
    searchValue === ""
      ? normalizedDataTypes
      : normalizedDataTypes.filter((dataType) => {
          const searchLower = searchValue.toLowerCase();
          return [
            dataType.title || "",
            dataType.key || "",
            dataType.description || "",
          ].some((field) => field.toLowerCase().includes(searchLower));
        });

  return (
    <div>
      <h2 className={styles.header}>{products[productName].name} data types</h2>

      {search && (
        <input
          className={styles.search}
          value={searchValue}
          onChange={handleOnChange}
          type="text"
          placeholder="Enter a data type name..."
        />
      )}

      <DataTypesList dataTypes={filteredDataTypes} />
    </div>
  );
};

export default DataTypes;
