


import { IoMdCart } from "react-icons/io";

import './Cart.css'

function Cart () {
    return (
        <button className='btn__cart'>
            <IoMdCart />
            <span className="cart-status">1</span>
        </button>
    )
}

export default Cart