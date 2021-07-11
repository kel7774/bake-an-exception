import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Landing from './pages/Landing'
import Shop from './pages/Shop'
import OrderCake from './pages/OrderCake'
import OrderCheesecake from './pages/OrderCheesecake'
import OrderCupcakes from './pages/OrderCupcakes'
import OrderCookies from './pages/OrderCookies'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import './App.css'

function App () {
  return (
    <div className='App'>
      <Router>
        <Header />
        <main>
          <Route exact path='/' component={Landing} />
          <Route path='/shop' component={Shop} />
          <Route path='/cake' component={OrderCake} />
          <Route path='/cheesecake' component={OrderCheesecake} />
          <Route path='/cookies' component={OrderCookies} />
          <Route path='/cupcakes' component={OrderCupcakes} />
          <Route path='/about' component={About} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/contact' component={Contact} />
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
