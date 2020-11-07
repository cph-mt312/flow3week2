import Header from "./components/header";
import Home from "./components/home";
import Company from "./components/company";
import Products from "./components/products";
import NoMatch from "./components/noMatch";
import {
  Switch,
  Route
} from "react-router-dom";

function App({ bookFacade }) {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products bookFacade={bookFacade} />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
