
import Button from './Button';

function Dashboard({children}) {
    return (
        <>
                <h3 className='m-3'>Dashboard:</h3>
            <div className="container-fluid shadow d-flex justify-content-evenly p-3">
                {
                    children
                }
            </div>
        </>
    )
}

export default Dashboard;