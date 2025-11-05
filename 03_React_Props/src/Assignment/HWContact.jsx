
import HWButton from './HWButton';
import HWCard from './HWCard';
import MyPic from '../assetes/MyPic.jpg';
import Spiderman from '../assetes/Spiderman.jpg';
import Vijay from '../assetes/Vijay.jpg';

function HWContact() { 
    
    return(
        <section className="container-fluid">
            <div className="row">
                <div className="col">
                    <HWCard developer={{img:MyPic, name: "Rahul Das", skill:"JAVA-FullStack with REACT"}}/>
                </div>
                <div className="col">
                    <HWCard developer={{img:Spiderman, name: "Spider Man", skill:"MERN-FullStack with REACT"}}/>
                </div>
                <div className="col">
                    <HWCard developer={{img:Vijay, name: "Vijay Thalapathy", skill:"Python-FullStack with REACT"}}/>
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-center gap-5">
                    <HWButton name={"Contact Us"} color={"btn-success"}/>
                    <HWButton name={"Subscribe Us"} color={"btn-success"} />
                    
                </div>
            </div>

        </section>
    );
}
export default HWContact;