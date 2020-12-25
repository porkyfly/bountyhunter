import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome, Bounty Hunter</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="shopping-list">
          <h1>Active bounties, 1mi radius:</h1>
          <ul>
            <li>Take a pic of the light show line</li>
            <li>Write down "Bob" on the waitlist</li>
            <li>Find out if Pho75 (cashonly) takes venmo</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
