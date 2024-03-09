const Header = () => <h1>Web development curriculum</h1>

const Total = ({ sum }) => {
  const totalExercises = sum.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.exercises;
  }, 0)
  return(
    <p>Total of {totalExercises} exercises</p>
  )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ courses }) => {
  const courseNames = courses.map(course => course.name);
  return (
    <div>
      {courseNames.map((name, index) => (
        <div key={index}>
          <h2>{name}</h2>
          <div>
            {courses[index].parts.map(part => (
              <Part key={part.id} part={part} />
            ))}
          </div>
          <Total sum={courses[index].parts}/>
        </div>
      ))}
    </div>
  );
};


const Course = ({ courses }) => {
  return (
    <div>
      <Header/>
      <Content courses = {courses}/>
    </div>
  );
};


export default Course