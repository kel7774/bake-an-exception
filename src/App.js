import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './static/Header';
import Landing from './static/Landing';
import Order from './static/Order';
import About from './static/About';
import Gallery from './static/Gallery';
import Contact from './static/Contact';
import Footer from './static/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <main>
              <Route exact path="/" component={Landing} />
              <Route path="/order" component={Order} />
              <Route path="/about" component={About} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/contact" component={Contact} />
          </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
