import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/index.jsx';
import ImagenLogo from './components/header/index.jsx';
import ItemListContainer from './containers/ItemListContainer';



const App = ()  => {
  return (
    <>  
    <header>
    <ImagenLogo />
    <NavbarComponent />
    </header>
    <ItemListContainer greeting = {"Bienvenidos al Delivery mas Rapido de la Argentina!"}/>
    
    
     
      
   </>
  );
}

export default App;
