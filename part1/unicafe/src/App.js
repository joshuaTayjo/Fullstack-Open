import { useState } from 'react'

const Statistics = props => {
  if (!(props.good || props.bad || props.neutral)) {
    return (<div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>)
  }
  return (<div>
    <h1>statistics</h1>
    <table>
      <tbody>
        <tr>
          <td>good {props.good}</td>
        </tr>
        <tr>
          <td>neutral {props.neutral}</td>
        </tr>
        <tr>
          <td>bad {props.bad}</td>
        </tr>
        <tr>
          <td>average {props.average}</td>
        </tr>
        <tr>
          <td>positive {props.positive}%</td>
        </tr>
      </tbody>
    </table>
  </div>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1);
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  }
  const handleBad = () => {
    setBad(bad + 1);
  }
  const getAverage = () => {
    return (good - bad) / (good + bad + neutral);
  }
  const getPositive = () => {
    return good / (good + bad + neutral) * 100;
  }
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <Statistics {...{
        good,
        neutral,
        bad,
        average: getAverage() || 0,
        positive: getPositive() || 0
      }}
      />
    </div>
  )
}

export default App