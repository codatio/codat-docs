import React, { useState, useEffect, useContext, createContext, } from "react";
import styles from './styles.module.scss';
import { marked } from 'marked';

const QuestionContext = createContext();

const Questions = (props) => {
  const { children } = props;

  const [ query, setQuery ] = useState('');

  const handleOnChange = event => {
    const { value } = event.target;
    setQuery(value);
  };

  console.log(children)

  return (
    <>
      <input className={styles.search} value={query} onChange={handleOnChange} type="text" placeholder="What's your question?" />

      <QuestionContext.Provider value={{ query, setQuery }}>
        {children}
      </QuestionContext.Provider>
    </>
  );
};

export const Question = (props) => {
  const { question, answer } = props;
  const { query } = useContext(QuestionContext);

  console.log(question, query)

  if(
    question.toLowerCase().includes(query) ||
    answer.toLowerCase().includes(query)
  ) {
    return <details className={styles.question}>
      <summary className={styles.header}>
        <b>{question}</b>
      </summary>

      <div className={styles.answer} dangerouslySetInnerHTML={{__html: marked.parse(answer)}}/>
    </details>
  }

  return null
}

export default Questions;