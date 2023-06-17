const Header = props => {
  console.log('Header is running')
  return (<h1>{props.course}</h1>)
}

const Content = ({ props }) => {
  console.log('Content is running')
  console.log(props)
  return (
    <>
      <Part part={props[0].name} exercises={props[0].exercises} />
      <Part part={props[1].name} exercises={props[1].exercises} />
      <Part part={props[2].name} exercises={props[2].exercises} />
    </>
  )
}

const Part = props => {
  return (<>
    <p>{props.part} {props.exercises}</p>
  </>)
}

const Total = ({ props }) => {
  console.log(props)
  console.log('Total is running')
  return (<p>
    Number of exercises {props[0].exercises + props[1].exercises + props[2].exercises}
  </p>)
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content props={course.parts} />
      <Total props={course.parts} />
    </div>
  )
}


export default App;
