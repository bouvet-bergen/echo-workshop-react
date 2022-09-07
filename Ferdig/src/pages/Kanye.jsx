import {useEffect, useState} from "react";
import {fetchData} from "../fetchData";
import Button from "../components/Button";

const Kanye = () => {
    const [quotes, setQuotes] = useState([]);
    const [bounce, setBounce] = useState(false);

    function fetchQuote() {
        fetchData().then((value) => setQuotes([value.quote, ...quotes]));
    }

    useEffect(() => {
        fetchQuote()
    }, [])


    useEffect(() => {
        setBounce(quotes[quotes.length - 1]?.length > 50);
    }, [quotes])

    return (
        <div className={"App"}>
            <div className='Content'>
                <div className={"kanye"}>
                    <img className={`kanye__image ${bounce ? 'Bounce' : ''}`} src={'kanye.png'}/>
                </div>
                <Button text='Click me!' onClick={fetchQuote}/>
                {quotes?.map(quote => <span>{quote}</span>)}
            </div>
        </div>
    )
}

export default Kanye;