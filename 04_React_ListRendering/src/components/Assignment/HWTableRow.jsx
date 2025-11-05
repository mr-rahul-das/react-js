import HWButton from "./HWButton";


function HWTableRow({ data }) {
    let { name, id, price, img } = data;

    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td><i className="bi bi-currency-rupee"></i>{price}</td>
                <td><img style={{height:100 , width: 100}} className="img-fluid" src={img} alt="#" /></td>
                <td>
                    <HWButton name={<i className="bi bi-dash-circle-fill"></i>} color={""} /> 1   
                    <HWButton name={<i className="bi bi-plus-circle-fill"></i>} color={""} /> 
                </td>
            </tr>
        </>
    );
}
export default HWTableRow;