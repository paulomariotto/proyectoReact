import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/navbar/index.jsx";
import Header from "./components/header/index.jsx";
import ItemListContainer from "./containers/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/index";
import Combos from "./components/Combos";
import Promociones from "./components/Promociones";
import Marcas from "./components/Marcas";
import Cart from "./components/Cart/Cart"
import CartProvider from './Context/CartContext'
import Checkout from './components/Checkout/Checkout'
const App = () => {
  return (   
    
      <BrowserRouter>
      <CartProvider>
    <header>
        <Header />
        <NavbarComponent />
      </header>

      <Switch>
        <Route exact path="/">
         bienennene
        </Route>
        
        <Route exact path="/Shop/:categoriaID">   
        <ItemListContainer/> 
        </Route> 

        <Route exact path="/product/:ID">
        <ItemDetailContainer/>
        </Route>

        

        <Route exact path="/Combos">
          <Combos></Combos>
        </Route>

        <Route exact path="/Promociones">
          <Promociones></Promociones>
        </Route>

        <Route exact path="/Marcas">
          <Marcas></Marcas>
        </Route>

        <Route exact path="/Cart"> 
        <Cart></Cart>
        </Route>
        <Route exact path="/Checkout">  
              <Checkout/>
            </Route>
      </Switch> 
      </CartProvider>   
    </BrowserRouter>   
  );
};
export default App;
