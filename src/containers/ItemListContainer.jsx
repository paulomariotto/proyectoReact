
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemListContainer = ({greeting}) => {
    return (
        <>
            <div>               
              
                <a href="#home" className="greeting-tester"> {greeting} </a>
                
            </div>
        </>

    );
}
export default ItemListContainer;