
import './ProductCard.css'
import { FaCartPlus } from "react-icons/fa";
import propTypes from 'prop-types'
import formatCurrency from '../../utilities/formatCurrency';


function ProductCard ({data}){

    const {title, thumbnail, price} = data;
    return (
       
        <section className='product-card'>
            <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} 
            alt="product"
             className="card__image" 
             />
            <div className="card__infos">
                <h2 className='card__price'>{formatCurrency(price, 'BRL')}</h2>
                <h2 className='card__title'> {title} </h2>
            </div>
            <button className='button__add-cart'><FaCartPlus /></button>
        </section>
    )
}

export default ProductCard

ProductCard.prototype = {
    data: propTypes.shape({}),
}.isRequired;