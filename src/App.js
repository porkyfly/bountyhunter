import logo from './logo.svg';
import './App.css';
import CreateBounty from './components/CreateBounty/CreateBounty';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome, Bounty Hunter</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="bounties-list">
          <CreateBounty />
        </div>
      </header>
    </div>
  );
}

export default App;
