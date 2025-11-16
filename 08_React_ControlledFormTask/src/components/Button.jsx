

function Button({name,color,handleClicked}) { 
    
    return(
        <>
            <button onClick={handleClicked} className={`btn ${color}`}>{name}</button>
        </>
    );
}
export default Button;