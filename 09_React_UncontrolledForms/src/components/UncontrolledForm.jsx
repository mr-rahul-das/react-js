import { useRef } from "react";

function UncontrolledForm() { 
    
    let inputRef = useRef("");
    let paraRef = useRef("");

    function handleInput(){
        console.log(inputRef.current.value);

    }

    function handlePara(){
        paraRef.current.textContent="Paragraph changed!!!";

    }


    return(
        <>
        <form className="form-control w-50">
            Enter something:
            <input type="text" placeholder="enter something here...." className="form-control" ref={inputRef} onChange={handleInput}/>
            <p ref={paraRef} onClick={handlePara}>This is paragraph</p>
        </form>
        </>
    );
}
export default UncontrolledForm;