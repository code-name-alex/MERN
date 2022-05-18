import './App.css';
import Form from './components/Form';
import Result from './components/Result';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Luke API Walker</h1>
        <Form></Form>
        <Switch>
          <Route exact path="/:category/:id">
            <Result></Result>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
