import { useState } from "react";

function ConditionalRendering() { 


    let [isClosed,setIsClosed] = useState(false);
    function handleClosed(){
        setIsClosed(!isClosed);
    }
    let isDataLoaded = true;
    
    return(
        <>
        <h1>{isClosed ? "Card is closed" : "card is open"}</h1>
        <button className="btn btn-dark" onClick={handleClosed}>{isClosed ? "Open":"closed"}</button>
        <br />
        {
            isDataLoaded && <h3>Data is loaded...</h3>
        }
        </>
    );
}
export default ConditionalRendering;