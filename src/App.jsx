import {useState} from 'react';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';


//two-way binding & initial states (default values):
//these have been lifted from UserInput.jsx in order to pass input to Results component
function App() {
  const[userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
});

//error handling/validity check
//duration should always be positive
const inputIsValid = userInput.duration >= 1;

//function that updates the default state:
//properties are dynamically set depending on the value of inputIdentifier
function handleChange(inputIdentifier, newValue){
  setUserInput(prevUserInput => {
      return{
          ...prevUserInput,
          [inputIdentifier]: +newValue
      };
  });
}

//userInput results are shared to 2 different components below:
  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange} />
    {!inputIsValid && <p className="center">Error: Please enter a duration greater than zero.</p>}
    {inputIsValid && <Results input={userInput} />} {/*  Results are only shown if input is valid */}
    </>
  );
}

export default App
