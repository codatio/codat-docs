import React from "react";

import styles from "./styles.module.scss";

const DataType = (props) => {
  const { dataType } = props;

  return (
    <div className={styles.dataType}>
      <div className={styles.title}>
        <p>
          <a href={dataType.path}>{dataType.title}</a>
          {" · "}
        </p>
        <p>{dataType.key}</p>
      </div>
    </div>
  );
};

export default DataType;
