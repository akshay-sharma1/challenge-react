import React, { useState } from 'react';
import './App.css';
import data from './data.json'

import NavBar from './components/NavBar'
import Header from './components/header'
import Question from './components/Core/Question'
import {Button } from '@material-ui/core'
import Result from './components/Core/Result'



function App() {

  // main question state
  const [answers, setAnswers] = useState({})

  const [result, setResults] = useState('')

  const [showQuestions, setShowQuestions] = useState(true)

  const handleChange = (event) => {
    setAnswers({...answers, [event.target.name] : event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // determine majority choice
    let count = {}

    for (var key in answers) {
      if (answers[key] in count) {
        count[answers[key]] += 1
      } else {
        count[answers[key]] = 1
      }
    }
    
    // determine majority result
    const max = Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);

    // correlate majority result with array index
    const index = {
      'A' : 0,
      'B' : 1,
      'C' : 2, 
      'D' : 3
    }
    
    // set state
    setResults(index[max])
    setShowQuestions(false)
  }

  const goBack = () => {
    setShowQuestions(true)
  }


  return (
      <div className="App">
          <NavBar />
              { showQuestions ? <Header /> : <span></span>}
              { showQuestions ? 
              <form onSubmit={handleSubmit}>
                {data.questions.map((question, index) => {
                  return <Question key={index} 
                  number={index} 
                  question={question} 
                  onChange={handleChange}/>
                 })}
                <Button type="submit" color="primary" variant="contained" style={{marginLeft: 875, marginBottom: 10}} >
                  Submit
                </Button>
              </form>
              : <Result description={data.results[result]} goBack={goBack}/>} 
      </div>
  );
}

export default App;
