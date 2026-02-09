import React, { useState } from "react";
import Translate from '@docusaurus/Translate';

import styles from "./styles.module.scss";

const feedbackOptions = [
  '👏',
  '👍',
  '🤔',
  '👎',
  '😭',
]

const isPositive = (vote) => {
  const positiveVotes = [
    '👏',
    '👍',
  ]

  return positiveVotes.indexOf(vote) !== -1
}

const VoteResponse = ({vote}) => {
  if(isPositive(vote)) {
    return <div className={styles.feedback}>
      <Translate id="vote.thanks">Thanks for your feedback!</Translate>
    </div>
  }
  return <div className={styles.feedback}>
    <Translate id="vote.thanksWithLink">Thanks for your feedback.</Translate>{' '}
    <a href="https://github.com/codatio/codat-docs/issues/new" target="_blank">
      <Translate id="vote.raiseIssue">You can raise an issue here</Translate>
    </a>.
  </div>
}

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

  return <>
    <hr/>
    <div className={styles.voteContainer}>
      <div className={styles.voteHeader}>
        <Translate id="vote.question">Was this page useful?</Translate>
      </div>

      <div className={styles.feedbackOptions}>
        { feedbackOptions.map((option, i) => <div key={i} className={!vote || option === vote ? styles.validVote : styles.vote} onClick={() => doVote(option)}>{option}</div>) }
      </div>

      { vote !== undefined && <VoteResponse vote={vote}/> }
    </div>
  </>
}

export default Vote