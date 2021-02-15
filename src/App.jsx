import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/index.jsx';
import Header from './components/header/index.jsx';
import ItemListContainer from './containers/ItemListContainer';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/index'
import Aperitivos from './components/Shop/Aperitivos'
import Cerveza from './components/Shop/Cerveza'
import Destilados from './components/Shop/Destilados'
import Espumantes from './components/Shop/Espumantes'
import sinAlcool from './components/Shop/Sin Alcool'
import Vinos from './components/Shop/Vinos'

const App = ()  => {
  return (
    <BrowserRouter>
    <header>
    <Header />
    <NavbarComponent />
    </header>
    
    <Switch>
    <Route exact path="/"> 
    <ItemListContainer greeting = {"Bienvenidos al Delivery mas Rapido de la Argentina!"}/>
    </Route>
    <Route exact component={ItemDetailContainer} path="/product/:id" />

    <Route path="/Shop/:Aperitivos">
    <Aperitivos></Aperitivos>
    </Route>

    <Route path="/Shop/:Cerveza">
    <Cerveza></Cerveza>
    </Route>

    <Route path="/Shop/:Destilados">
    <Destilados></Destilados>
    </Route>

    <Route path="/Shop/:Espumantes">
    <Espumantes></Espumantes>
    </Route>

    <Route path="/Shop/:Sin Alcool">
    <sinAlcool></sinAlcool>
    </Route>

    <Route path="/Shop/:Vinos">
    <Vinos></Vinos>
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