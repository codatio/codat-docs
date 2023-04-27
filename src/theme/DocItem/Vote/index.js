import React, { useState } from "react";

import styles from "./styles.module.scss";

const Vote = (props) => {
  const [vote, setVote] = useState()

  const doVote = (vote) => {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({ 
          vote: vote,
          page: props.page 
        })
    };

    setVote(vote)

    fetch("https://hooks.zapier.com/hooks/catch/659124/34o4z3s/", requestOptions)
  }

  const feedbackOptions = [
    '👍',
    '🤔',
    '👎',
  ]

  return <>
    <hr/>
    <div className={styles.voteContainer}>
      <div className={styles.voteHeader}>Was this page useful?</div>
      
      <div className={styles.feedbackOptions}>
        { feedbackOptions.map(option => <div className={!vote || option === vote ? styles.validVote : styles.vote} onClick={() => doVote(option)}>{option}</div>) }
      </div>
    </div>
  </>
}

export default Vote