import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/index.jsx';
import ImagenLogo from './components/header/index.jsx';
import ItemListContainer from './containers/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



const App = ()  => {
  return (
    <BrowserRouter>
    <header>
    <ImagenLogo />
    <NavbarComponent />
    </header>
    
    <Switch>
    <Route exact path="/"> 
    <ItemListContainer greeting = {"Bienvenidos al Delivery mas Rapido de la Argentina!"}/>
    </Route>
    
    <Route exact path="/Shop/Cerveza">
    </Route>

    <Route exact path="/Shop/Vinos">
    </Route>

    <Route exact path="/Shop/Espumantes">
    </Route>

    <Route exact path="/Shop/Destilados">
    </Route>
    
    <Route exact path="/Shop/Aperitivos">
    </Route>

    <Route exact path="/Shop/Sin Alcool">
    </Route>

    
    <Route exact path="/Combos">
    </Route>

    <Route exact path="/Promociones">
    </Route>

    <Route exact path="/Marcas">
    </Route>

    </Switch>
    </BrowserRouter>
   
  );
}
export default App;