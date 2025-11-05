 
import "./PrintMsg.css";

function PrintMsg() {

    let msg="Hii, this is Rahul.";
    let styleObj={
        color:"aqua",
        backgroundColor:"blue"
    }
    return(
        <div>
            <h3 style={{color:"magenta"}}>The msg is: {msg} (Inline)</h3>
            <h2 style={styleObj}>Rahul (Internal)</h2>
            <h1 className="h1Tag">REACT.JS (External)</h1>
        </div>
    )
}

export default PrintMsg;