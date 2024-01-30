


const Header = (props) => {
  return (
  <div>
    <h1> {props.course.name}</h1>
  </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.partProp} {props.exercisesProp}</p>
    </div>
  )
}

const Content = (props) =>{
  return(
    <div>
      <Part partProp={props.parts[0].name} exercisesProp={props.parts[0].exercises} />
      <Part partProp={props.parts[1].name} exercisesProp={props.parts[1].exercises} />
      <Part partProp={props.parts[2].name} exercisesProp={props.parts[2].exercises} />
    </div>)
}

const Total = (props) =>{
  return(
    <div>
    <p> Number of exercises {props.parts[0].exercises + props.parts[1].exercises +props.parts[2].exercises}  </p>
  </div>
  )
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
    <Header course = {course}/>

    <Content parts = {course.parts}/>

    <Total parts = {course.parts}/>
  </div>
  )
}

export default App