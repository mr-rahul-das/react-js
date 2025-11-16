import React from 'react'
import { useState } from 'react'

function ColorDiv() {
    let [bg, setBg] = useState('white')


    function randomBg() {

        let hexCode = "0123456789ABCDEF";
        let color = '#';
        for (let i = 0; i < 6; i++) {
            let randomNum = Math.trunc(Math.random() * 16);
            color += hexCode[randomNum];
        }
        return color;
    }

    function handleColor() {
        setBg(randomBg())

    }




    return (
        <> 
            <div className="card w-50 m-auto" style={{height:'500px', width:'200px'}}>
                <div className="card-header bg-dark text-center text-white">
                    <h3>Colour Box</h3>
                </div>
                <div className="card-body" style={{backgroundColor: bg}} >
                    <h3>Color</h3>

                </div>
                <div className="card-footer text-center" >
                    <button className="btn btn-primary" onClick={handleColor}>Chnage</button>
                </div>
            </div>

        </>
    )
}

export default ColorDiv