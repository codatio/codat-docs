import React, { useState } from 'react';

import {
  ConnectionCallbackArgs,
  ErrorCallbackArgs,
} from "@codat/sdk-link-types"
import { CodatLink } from "@components/CodatLink";

import styles from "./styles.module.scss";

export const AuthFlow = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const onConnection = (connection) => 
    alert(`On connection callback - ${connection.connectionId}`);
  const onClose = () => setModalOpen(false);
  const onFinish = () => alert("On finish callback");
  const onError = (error) => 
    alert(`On error callback - ${error.message}`);

  return (
    <div>
      <p>Click the button below to start authing.</p>

      <button onClick={() => setModalOpen(true)}>
        Connect
      </button>
    
      {modalOpen && (
        <div className={styles.modal}>
          <CodatLink
            {...props}
            onConnection={onConnection}
            onError={onError}
            onClose={onClose}
            onFinish={onFinish}
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
  AuthFlow,
};

export default ReactLiveScope;