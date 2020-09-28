import React from 'react'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Views/Home"
import About from "./Views/About"
import Product from "./Views/Product"


function App() {
  return (
    <div className='relative pb-10 min-h-screen'>
      <Router>
        <div className='p-3'>
          <Header/>
          <div >
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/products/:id">
                <Product />
              </Route>
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    </div>
  )
}

export default App
