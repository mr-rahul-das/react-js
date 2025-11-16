
import { useState } from "react";
import Burger from "../assetes/Items/Food/Burger.jpg";
import Kabab from "../assetes/Items/Food/Chicken Kabab.jpg";
import ClassicCombo from "../assetes/Items/Food/Classic Combo.jpg";
import CrispyOnionRings from "../assetes/Items/Food/Crispy Onion Rings.jpg";
import Pizza from "../assetes/Items/Food/Delicious Pizza.jpg";
import Noodles from "../assetes/Items/Food/Hot and Spicy Noodles.jpg";
import Briyani from "../assetes/Items/Food/HYDERABADI BRIYANI.jpg";
import Sushi from "../assetes/Items/Food/Sushi.jpg";


function Table() {

    let foodArr = [
        { name: "Burger", id: 101, price: 69, img: Burger, qty: 1 },
        { name: "Chicken Kabab", id: 102, price: 129, img: Kabab, qty: 1 },
        { name: "Classic Combo", id: 103, price: 299, img: ClassicCombo, qty: 1 },
        { name: "Crispy Onion Rings", id: 104, price: 59, img: CrispyOnionRings, qty: 1 },
        { name: "Delicious Pizza", id: 105, price: 159, img: Pizza, qty: 1 },
        { name: "Hot and Spicy Noodles", id: 106, price: 99, img: Noodles, qty: 1 },
        { name: "Hyderabadi Briyani", id: 107, price: 599, img: Briyani, qty: 1 },
        { name: "Sushi", id: 108, price: 699, img: Sushi, qty: 1 },
    ];

    let [foodList, setFoodList] = useState(foodArr);


    let inc = (id) => {
        setFoodList((prev) =>
            prev.map((ele) =>
                ele.id === id ? { ...ele, qty: ele.qty + 1 } : ele

            )
        )
    }
    let dec = (id) => {
        setFoodList((prev) =>
            prev.map((ele) =>
                ele.id === id && ele.qty > 1 ? { ...ele, qty: ele.qty - 1 } : ele

            )
        )

    }



    return (
        <>
            <table className='table table-striped shadow rounded text-center'>
                <thead className=" table-danger">
                    <tr>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Image</th>
                        <th>Product Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody className="">

                    {
                        foodList.map(ele =>
                            <tr key={ele.id}>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td><i className="bi bi-currency-rupee"></i>{ele.price}</td>
                                <td><img style={{ height: 100, width: 100 }} className="img-fluid" src={ele.img} alt="#" /></td>
                                <td>
                                    <button className="btn" onClick={() => dec(ele.id)}><i className="bi bi-dash-circle-fill"></i></button>
                                    {ele.qty}
                                    <button className="btn" onClick={() => inc(ele.id)}><i className="bi bi-plus-circle-fill"></i></button>
                                </td>
                                <td>
                                    <i className="bi bi-currency-rupee"></i>
                                    {ele.price * ele.qty}
                                </td>
                            </tr>)

                    }

                </tbody>
            </table>
        </>
    );
}
export default Table;