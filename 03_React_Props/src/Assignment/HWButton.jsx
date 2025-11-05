function HWButton({name,color}) { 

    return(
        <button className={`btn ${color}`}>{name}</button>
    );
}
export default HWButton;
