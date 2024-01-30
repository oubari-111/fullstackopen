


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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
    <Header
     courseProp={course}
    />

    <Content
        part1Prop = {part1.name} 
        exercises1Prop = {part1.exercises} 
            
        part2Prop = {part2.name}
        exercises2Prop = {part2.exercises}
          
        part3Prop = {part3.name} 
        exercises3Prop = {part3.exercises} 

    />


    <Total
    exercises1Prop = {part1.exercises}
    exercises2Prop = {part2.exercises}
    exercises3Prop = {part3.exercises}
     />
  </div>
  )
}

export default App