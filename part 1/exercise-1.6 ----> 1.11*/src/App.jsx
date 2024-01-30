import { useState } from 'react'



const Statistics = (props) =>{
  return( 
    <table>
      <tbody>
      <StatisticLine text = "good " value = {props.goodProp}/>
      <StatisticLine text = "neutral " value = {props.goodProp}/>
      <StatisticLine text = "bad " value = {props.goodProp}/>
      <StatisticLine text = "average " value = {props.averageProp}/>
      <StatisticLine text = "positive " value = {props.positiveProp}/>
      </tbody>
    </table>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
}


const Button = (props) => {

  
  const buttonClicked1 = () => {
    props.setGoodProp((good)=>good + 1)
    props.setAllProp((all)=> all +1)
    props.setFeedbackGivenProp(true)
  }

  const buttonClicked2 = () => {
    props.setNeutralProp((neutral) => neutral + 1)
    props.setAllProp((all) => all +1)
    props.setFeedbackGivenProp(true)
  }

  const buttonClicked3 = () => {
    props.setBadProp((bad) => bad + 1)
    props.setAllProp((all) => all + 1)
    props.setFeedbackGivenProp(true)
  }

  return(
    <div>
      <button onClick={buttonClicked1}>good</button>
      <button onClick={buttonClicked2}>neutral</button>
      <button onClick={buttonClicked3}>bad</button>
    </div>
  )

}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const [feedbackGiven, setFeedbackGiven] = useState(false)

  let average = (bad * (-1) + neutral *(0) + good * (1)) /all
  let positive = good/all

  return (
    <div>
      <h1>give feedback</h1>

      <Button
        setGoodProp={setGood}
        setNeutralProp={setNeutral}
        setBadProp={setBad}
        setAllProp={setAll}
        setFeedbackGivenProp={setFeedbackGiven}
       />



      <h1>statistics</h1>
      {feedbackGiven ? (
        <>
          <Statistics 
          goodProp = {good}
          neutralProp = {neutral}
          badProp = {bad}
          allProp = {all}
          averageProp={average}
          positiveProp = {positive} />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
}



export default App