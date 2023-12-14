
import './App.css'
import Header from './Components/Header/Header'
import Products from './Components/Products/Products'

import Provider from './context/Provider'

function App() {


  return (
    <Provider>
      <Header />
      <Products />
    </Provider>
  )
}

export default App
