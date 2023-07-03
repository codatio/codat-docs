import React, { useState, useEffect } from 'react';

import styles from './styles.module.css';

const ApiStatus = () => {
  const [status, setStatus] = useState()

  useEffect(async () => {
    const foo = await fetch('https://status.codat.io/api/v2/status.json')
      .then((res) => { return res.json()})
    setStatus(foo)
  }, [])

  if(status?.status?.indicator !== "none") {
    return <div className={styles.apiStatusWrapper}><a href={status?.page?.url} target="_blank">{status?.status?.description}</a></div>
  }

  return null
}

export default ApiStatus