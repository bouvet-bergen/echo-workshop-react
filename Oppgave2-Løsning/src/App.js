import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
          <div className='Content' >
              <div className={"kanye"}>
                  <img src={'kanye.png'} />
              </div>
              <button onClick={() => alert('Click!')}>Click me!</button>
          </div>
      </div>
  );
}

export default App;
