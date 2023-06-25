import { useState } from 'react'


const Button = ({ handler, text }) => {
  return (
    <button onClick={handler}>{text}</button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (<tr>
    <td>{text}</td><
      td>{value}</td>
  </tr>)
}

const Statistics = ({ good, bad, neutral, average, positive }) => {
  if (!(good || bad || neutral)) {
    return (<div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>)
  }
  return (<div>
    <h1>statistics</h1>
    <table>
      <tbody>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={good + bad + neutral} />
        <StatisticLine text='average' value={average} />
        <StatisticLine text='positive' value={positive + '%'} />
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
      <Button handler={handleGood} text='good' />
      <Button handler={handleNeutral} text='neutral' />
      <Button handler={handleBad} text='bad' />
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