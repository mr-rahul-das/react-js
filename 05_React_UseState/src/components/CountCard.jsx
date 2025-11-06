import { useState } from "react";


function CountCard() { 

    // let [count,setCount] = useState(0);
    // let [prop,setObj]=useState({name:"rahul",age:22});
    let defaultName="Jaanu";
    let [obj,setObj]=useState({name:'Rahul',age:23})

    function handleEvent() {
        // setCount(count+1)
        // setObj({...prop,name:'max'})
    }

    function handleDefault(name){
        setObj({...obj,name:defaultName});
    }
    
    return(
        <>
            <section className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="card w-25 m-auto text-center">
                            <div className="card-header">
                                <h3>Event Handling</h3>
                            </div>
                            <div className="card-body">
                                {/* <h3>Count:{count}</h3> */}
                                {/* <h3>{prop.name}</h3>
                                <h3>{prop.age}</h3> */}
                                <h3>{obj.name}</h3>
                            </div>
                            <div className="card-footer">
                                {/* <button className="btn btn-dark" onClick={handleEvent}>Modify</button> */}
                                <button className="btn btn-dark" onClick={()=>handleDefault(defaultName)}>Modify</button>
                                        {/* (prev) */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default CountCard;