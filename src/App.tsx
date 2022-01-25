import './App.css';
import { OreId } from 'oreid-js';

function test() {
  // alert('test')
  let oreId = new OreId({
    appName: 'ORE ID Sample App',
    appId: "xx",
    oreIdUrl: "sss"
    // apiKey: process.env.REACT_APP_OREID_API_KEY,
    // authCallbackUrl: this.authCallbackUrl
  });
}

function App() {
  return (
    <div className="App">
      <button onClick={test}>Click Me</button>
    </div>
  );
}

export default App;
