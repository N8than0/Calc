import logo from './logo.svg';
import './';
import NumberPad from './components/numbers'
import { KeyPad } from './components/keypad';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='output' id='output'>
          0
        </div>
        <div className='flex-container'> 
         <KeyPad />
        </div>
      </header>
    </div>
  );
}


export default App;
