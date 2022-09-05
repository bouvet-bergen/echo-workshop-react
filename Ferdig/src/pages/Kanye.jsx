import {useEffect, useState} from "react";
import {fetchData} from "../fetchData";
import Button from "../components/Button";

const Kanye = () => {
    const [quote, setQuote] = useState(null);
    const [bounce, setBounce] = useState(false);

    function fetchQuote() {
        fetchData().then((value) => setQuote(value.quote));
    }

    useEffect(() => {
        fetchQuote()
    }, [])


    useEffect(() => {
        setBounce(quote?.length > 50);
    }, [quote])

    return (
        <div className={"App"}>
            <div className='Content'>
                <div className={"kanye"}>
                    <img className={`kanye__image ${bounce ? 'Bounce' : ''}`} src={'kanye.png'}/>
                </div>
                <Button text='Click me!' onClick={fetchQuote}/>
                {quote && <span>{quote}</span>}
            </div>
        </div>
    )
}

export default Kanye;