import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import AllProducts from './components/AllProducts';
import NewProductForm from './components/NewProductForm';
import OneProduct from './components/OneProduct';
import EditProductForm from './components/EditProductForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Product Manager</h1>
        <Switch>
          <Route exact path="/">
            <NewProductForm></NewProductForm>
            <hr></hr>
            <AllProducts></AllProducts>
          </Route>
          <Route exact path="/products/:_id">
            <OneProduct></OneProduct>
          </Route>
          <Route exact path="/edit/:_id">
            <EditProductForm></EditProductForm>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
