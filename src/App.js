import "./Sass/app.css";
import { NavBar } from "./components/General/Navbar";
import { Footer } from "./components/General/Footer";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { Error404 } from "./components/General/Error404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { DataProvider } from "./Context";
import { Cart } from './components/Cart/Cart';
import { Newsletter } from "./components/Newsletter/Newsletter";
import { Form } from './components/Cart/Form';

export const App = () => {

  return (
    <>
      <DataProvider>
        <Router>
          <NavBar title="Drone.Co" />
          <Switch>
            <Route path="/cart">
              <Cart/>
            </Route>
            <Route exact path="/category/:catId">
              <ItemListContainer/>
            </Route>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route path="/cart">
              <Form/>
            </Route>
            <Route component={Error404} />
          </Switch>
          <Newsletter/>
          <Footer autor="Copyright &copy; -Tsutsumi Jose Antonio - Junio 2021." />
        </Router>
      </DataProvider>
    </>
  );
};
