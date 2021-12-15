import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';

import Films from './views/Films/Films';
import Characters from './views/Characters/Characters';
import Books from './views/Books/Books';
import Main from './views/Main/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink className="navLink" to="/">
            Home
          </NavLink>
          <NavLink className="navLink" to="/films">
            Films
          </NavLink>
          <NavLink className="navLink" to="/characters">
            Characters
          </NavLink>
          <NavLink className="navLink" to="/books">
            Books
          </NavLink>
        </header>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/films">
            <Films />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
