import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import History from './History';

// class App {

//   componentDidMount() {

//   }

//   componentDidUpdate() {
    
//   }

//   render() {
//     return (
//       <div className="App">
//         ...
//       </div>
//     );
//   }
// }

function App() {

  const [history, setHistory] = React.useState<number[]>([]);
  const [showHistory, setShowHistory] = React.useState(false);

  const onCounterChangeCallback = (count: number) => {
    console.log(`count = ${count}`);
    setHistory([...history, count]);
  };

  const onToggleHistoryClick = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Counter
        label={'Chairs'}
        onCounterChange={onCounterChangeCallback}
        size="large"
      />

      <br/><br/>

      <button onClick={onToggleHistoryClick}>Toggle History</button>

      {
        showHistory &&
        <History entries={history} isEnabled={true} />
      }
      
    </div>
  );
}

export default App;
