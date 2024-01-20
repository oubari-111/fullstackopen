


const Header = (props) =>{
  return (
  <div>
    <h1>  {props.courseProp}</h1>
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
      <Part partProp={props.part1Prop} exercisesProp={props.exercises1Prop} />
      <Part partProp={props.part2Prop} exercisesProp={props.exercises2Prop} />
      <Part partProp={props.part3Prop} exercisesProp={props.exercises3Prop} />
    </div>)
}

const Total = (props) =>{
  return(
    <div>
    <p> Number of exercises {props.exercises1Prop + props.exercises2Prop + props.exercises3Prop}  </p>
  </div>
  )
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
    <Header
     courseProp={course}
    />

    <Content
        part1Prop = {part1} 
        exercises1Prop = {exercises1} 
            
        part2Prop = {part2}
        exercises2Prop = {exercises2}
          
        part3Prop = {part3} 
        exercises3Prop = {exercises3} 

    />


    <Total
    exercises1Prop = {exercises1}
    exercises2Prop = {exercises2}
    exercises3Prop = {exercises3}
     />
  </div>
  )
}

export default App