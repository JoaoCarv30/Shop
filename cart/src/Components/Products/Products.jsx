import { useState, useEffect, useContext } from 'react'

import './Products.css'
import fetchProducts from '../../api/fetchProducts'
import ProductCard from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading'
import AppContext from '../../context/AppContext'

function Products() {

    const { products, setProducts, loading, setLoading} = useContext(AppContext)
    

    useEffect(() => {
        fetchProducts('Computador').then((response) => {
            setProducts(response)
            setLoading(false)
        })
    }, [])

    return (
        (loading && <div className='products container '><Loading /></div> ) || (
            <section className="products container">
              {products.map((product) => <ProductCard key={product.id} data={product} />)}
            </section>
          )
    )
}

export default Products