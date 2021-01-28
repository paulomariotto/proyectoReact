import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/index.jsx';
import ImagenLogo from './components/header/index.jsx';
import CardSimpsons from './components/simpsons/index.jsx';



const App = ()  => {
  return (
    <>  
    
    <ImagenLogo />
    <NavbarComponent />
    <CardSimpsons />
    
     
      
   </>
  );
}

export default App;
