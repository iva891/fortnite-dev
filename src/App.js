import Header from './components/header';
import Footer from './components/footer';
import Shop from './components/shop';
import Cart from './components/cart';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <Header />
      <Switch>
      <Route path="/" exact >
        <Shop />
      </Route>
      <Route path="/cart" exact >
        <Cart />
      </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
