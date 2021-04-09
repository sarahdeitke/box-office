import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Box office is a monthly subscription box service from Netfl*x bringing everything you love about your favorite shows into your home. Build your box below!
        </p>
      </header>

      <main className="App-main">
        <p>1. Select Show</p>
        <p>2. Select Small Merch</p>
        <p>3. Select Big Merch</p>
        <p>4. Select Snack Sweet</p>
        <p>5. Select Snack Salty</p>
        <button>pre-order May</button>
      </main>
    </div>
  );
}

export default App;
