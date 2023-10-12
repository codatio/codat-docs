import React from 'react';

import styles from './styles.module.scss';

const Client = (props) => {
  const { path, name } = props;

  return <div className={styles.client}>
    <img src={path} alt={`${name} logo`}/>
  </div>
}

const Clients = (props) => {
  const { clients } = props;

  return <div className={styles.clients}>
    <p className={styles.header}>Trusted by leading fintechs and financial institutions</p>
    
    <div className={styles.clientsList}>
      {
        clients.map(client => {
          return <Client {...client}/>
        })
      }
    </div>
  </div>
}

export default Clients