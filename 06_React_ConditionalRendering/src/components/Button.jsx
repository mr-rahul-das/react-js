function button({name,color}) { 
    
    return(
        <>
            <button className={`btn ${color}`}>{name}</button>
        </>
    );
}
export default button;