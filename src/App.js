import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopNav from './components/common/TopNav';
import Layout from './components/common/Layout';
import Footer from './components/common/Footer';
import Home from "./components/Home";
import Category from "./components/category/Category";
import Product from "./components/products/Product";

import Login from "./components/auth/Login";

function App() {
  return (
    <Router>
      <div>
       <TopNav />
        <Layout>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/login">
             <Login />
            </Route>

            <Route path="/category">
              <Category />
            </Route>

            <Route path="/product">
              <Product />
            </Route>
          
          </Switch>
        </Layout>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
