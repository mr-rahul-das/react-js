import { useRef } from "react";

function ColorChangeDiv() { 
    
    let inputRef = useRef("");
    let divRef = useRef("");

    function handleColor(e){
        e.preventDefault();
        if(divRef.current && inputRef.current){
            divRef.current.style.backgroundColor = inputRef.current.value;
            inputRef.current.value="";
        }
    }



    return(
        <>
        <form className="w-50">
            <input type="text" placeholder="Enter color name" className="form-control" ref={inputRef} />
            <button className="btn btn-primary m-3" onClick={handleColor}>Chnage color</button>
            <div style={{height: 200, width:200}} className="shadow m-3 border border-2" ref={divRef}>

            </div>
        </form>
        </>
    );
}
export default ColorChangeDiv;