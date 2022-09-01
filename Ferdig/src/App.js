import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { fetchData } from './fetchData';
import { useEffect, useState } from 'react';

function App() {
  const [quote, setQuote] = useState(null);
  const [bounce, setBounce] = useState(false);
  
  function fetchQuote(){
    fetchData().then((value) => setQuote(value.quote) );
  }

  useEffect(() => {
    fetchQuote()
  }, [])
  

  useEffect(() => {
      setBounce(quote?.length > 50);
  }, [quote])
  

  return (
    <div className="App">
      <div className='Content' >
        <img className={bounce ? 'Bounce': ''} src={'kanye.png'} />
        <Button text='Click me!' onClick={fetchQuote}/>
        {quote && <span>{quote}</span>}
      </div>
    </div>
  );
}

export default App;
