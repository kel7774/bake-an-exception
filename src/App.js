import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './components/Header'
import Landing from './pages/Landing'
import Shop from './pages/Shop'
import Order from './pages/Order'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App () {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/shop" component={Shop} />
          <Route path="/order" component={Order} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
