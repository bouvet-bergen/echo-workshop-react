import './App.css';
import Button from "./Button";
import {useEffect, useState} from "react";

function App() {
    const fetchData = () => {
        fetch("https://api.kanye.rest/")
            .then(res => res.json())
            .then(({quote}) => setQuote(quote));
    }
    
    const [quote, setQuote] = useState("");
    const [bounce, setBounce] = useState(false);
    
    useEffect(() => fetchData(), []);
    
    useEffect(() => {
        setBounce(quote.length > 50);
    }, [quote])
    
  return (
      <div className="App">
          <div className='Content' >
              <div className={"kanye"}>
                  <img className={bounce ? "Bounce" : ""} src={'kanye.png'} />
              </div>
              <Button onClick={() => fetchData()} title={"Click me!"} />
              {quote && <span>{quote}</span>}
          </div>
      </div>
  );
}

export default App;
