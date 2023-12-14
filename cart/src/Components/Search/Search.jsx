
import { useState, useContext } from 'react';
import Cart from '../Cart/Cart';
import './Search.css';

import { CiSearch } from 'react-icons/ci';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';


function Search() {

  const [searchValue, setSearchValue] = useState('');

  const {setProducts, setLoading} = useContext(AppContext)

  const handleSearch = async (event) =>{
    event.preventDefault()
    setLoading(true)
    
    const products = await fetchProducts(searchValue)
    setProducts(products)
    setLoading(false)
    setSearchValue("")
  }


  return (
    <form className="search" onSubmit={handleSearch}>
      <div className="search__container">
        <input type="search" placeholder="Search" required value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} />
        <button className='btn__search'> <CiSearch /> </button>
      </div>
      
     <Cart />
     
    </form>
  );
}

export default Search;