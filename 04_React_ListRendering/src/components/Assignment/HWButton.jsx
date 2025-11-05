
function HWButton({color,name}) { 
    
    return(
        <>
        <button className={`btn ${color}`}>{name}</button>
        </>
    );
}
export default HWButton;