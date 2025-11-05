
import Burger from "../../assetes/Items/Food/Burger.jpg";
import Kabab from "../../assetes/Items/Food/Chicken Kabab.jpg";
import ClassicCombo from "../../assetes/Items/Food/Classic Combo.jpg";
import CrispyOnionRings from "../../assetes/Items/Food/Crispy Onion Rings.jpg";
import Pizza from "../../assetes/Items/Food/Delicious Pizza.jpg";
import Noodles from "../../assetes/Items/Food/Hot and Spicy Noodles.jpg";
import Briyani from "../../assetes/Items/Food/HYDERABADI BRIYANI.jpg";
import Sushi from "../../assetes/Items/Food/Sushi.jpg";

import HWTableRow from './HWTableRow';



function HWTable() { 

     let itemArr = [
        { name: "Burger", id: 101, price: 69, img: Burger },
        { name: "Chicken Kabab", id: 102, price: 129, img: Kabab },
        { name: "Classic Combo", id: 103, price: 299, img: ClassicCombo },
        { name: "Crispy Onion Rings", id: 104, price: 59, img: CrispyOnionRings },
        { name: "Delicious Pizza", id: 105, price: 159, img: Pizza },
        { name: "Hot and Spicy Noodles", id: 106, price: 99, img: Noodles },
        { name: "Hyderabadi Briyani", id: 107, price: 599, img: Briyani },
        { name: "Sushi", id: 108, price: 699, img: Sushi },
    ];

    
    return(
        
         <table className='table table-striped shadow rounded text-center'>
            <thead className=" table-danger">
                <tr>
                    <th>Item Id</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                    <th>Item Image</th>
                    <th>Item Quantity</th>
                </tr>
            </thead>
            <tbody className="">

                {
                    itemArr.map(ele => <HWTableRow data={ele} />)

                }

            </tbody>
        </table>
        
    );
}
export default HWTable;