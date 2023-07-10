import React, { useState, useEffect } from 'react';

import styles from './styles.module.scss';

const ApiStatus = () => {
  const [status, setStatus] = useState()

  useEffect(async () => {
    const apiStatus = await fetch('https://status.codat.io/api/v2/status.json')
      .then((res) => { return res.json()})
    setStatus(apiStatus)
  }, [])

  if(status?.status?.indicator && status?.status?.indicator !== "none") {
    return <div className={styles.apiStatusWrapper}><a href={status?.page?.url} target="_blank">API status: {status?.status?.description}</a></div>
  }

  return null
}

export default ApiStatus
