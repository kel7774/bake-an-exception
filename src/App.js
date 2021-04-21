import './App.css';
import Header from './static/Header';
import Landing from './static/Landing';
import About from './static/About';
import Gallery from './static/Gallery';
import Footer from './static/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <main>
              <Route exact path="/" component={Landing} />
              <Route path="/about" component={About} />
              <Route path="/gallery" component={Gallery} />
          </main>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
