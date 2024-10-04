import React, { useState } from 'react';

import {
  ConnectionCallbackArgs,
  ErrorCallbackArgs,
} from "@codat/sdk-link-types"
import { CodatLink as Wrapper } from "@components/CodatLink";

import styles from "./styles.module.scss";

export const CodatLink = (props) => {
  const {
    onConnection,
    onClose,
    onError,
    onFinish,
  } = props

  const [modalOpen, setModalOpen] = useState(false);

  const defaultOnConnection = (connection) => 
    alert(`On connection callback - ${connection.connectionId}`);
  const defaultOnClose = () => setModalOpen(false);
  const defaultOnFinish = () => alert("On finish callback");
  const defaultOnError = (error) => 
    alert(`On error callback - ${error.message}`);

  return (
    <div>
      <button className={styles.button} onClick={() => setModalOpen(true)}>
        Connect
      </button>
    
      {modalOpen && (
        <div className={styles.modal} onClick={onClose}>
          <Wrapper
            {...props}
            onConnection={onConnection || defaultOnConnection}
            onError={onError || defaultOnError}
            onClose={onClose || defaultOnClose}
            onFinish={onFinish || defaultOnFinish}
          />
        </div>
      )}
    </div>
  );
};

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  CodatLink,
};

export default ReactLiveScope;