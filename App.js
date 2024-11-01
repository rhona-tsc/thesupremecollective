import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The Supreme Collective
        </p>
        <p>Exceptional wedding and event bands for hire</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Discover Your Band</button>
          <button>Put The Word Out</button>
        </a>
      </header>
    </div>
  );
}

export default App;
