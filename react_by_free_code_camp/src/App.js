import './App.css';
// import Page from './components/Exercise1';
// import FunFact from './components/Exercise2';
import { MyElementOne, MyelementTwo } from './components/Exercise3';

function App() {
  return (
    <div className="App">
      <h1>This is my new React App</h1>
      {/* Exercise 1 is displayed as FunFact Element */}
      {/* <Page /> */}
      {/* Exercise 2 is displayed as FunFact Element */}
      {/* <FunFact /> */}
      {/* Exercise 3 add two components instaed of only one*/}
      <MyElementOne />
      <MyelementTwo />
    </div>
  );
}

export default App;
