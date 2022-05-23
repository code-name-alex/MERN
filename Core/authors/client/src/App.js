import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import AllAuthors from './components/AllAuthors';
import NewAuthorForm from './components/NewAuthorForm';
import OneAuthor from './components/OneAuthor';
import EditAuthorForm from './components/EditAuthorForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Authors</h1>
        <Switch>
          <Route exact path="/">
            <NewAuthorForm></NewAuthorForm>
            <hr></hr>
            <AllAuthors></AllAuthors>
          </Route>
          <Route exact path="/authors/:_id">
            <OneAuthor></OneAuthor>
          </Route>
          <Route exact path="/edit/:_id">
            <EditAuthorForm></EditAuthorForm>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
