import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar} from './components'
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  Products,
 
} from './pages'
function App() {
  return (
   
      <Router>
        <Navbar />
      
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route exact path='/products'>
            <Products />
          </Route>
          <Route path='/products/:id' children={<SingleProduct />} />
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
   
  )
}

export default App
