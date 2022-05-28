import './App.css';
import Page from './components/Exercise1';
import FunFact from './components/Exercise2';

function App() {
  return (
    <div className="App">
      <h1>This is my new React App</h1>
      {/* <Page /> */}
      {/* Exercise 2 is displayed as FunFact Element */}
      <FunFact />
    </div>
  );
}

export default App;
