const Header = props => {
  console.log('Header is running')
  return (<h1>{props.course}</h1>)
}

const Content = ({ props }) => {
  console.log('Content is running')
  console.log(props)
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Total = props => {
  console.log(props)
  console.log('Total is running')
  return (<p>
    Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}
  </p>)
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content props={{ part: part1, exercises: exercises1 }} />
      <Content props={{ part: part2, exercises: exercises2 }} />
      <Content props={{ part: part3, exercises: exercises3 }} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}


export default App;
