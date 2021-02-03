import React,  {useState} from 'react';

const ItemCount = (props) => {

const [contador, setContador] = useState(props.stock);
    return (
        <>
            <div>
            <ul className="ul-contador">
            <li className="li-contador li-button-menos" >
                <button className="button-li-1" onClick={(contador) =>{
                if (contador > 1) {
                    return (setContador(contador -1))                 
                 
                } else (contador < 0) {
                    return (setContador(alert("No hay stock")))
                }
                
            }}>
                    <p><strong>-</strong></p>
                </button>
            </li>
            <li className="li-contador">
            <p>{contador}</p>
            </li>
            <li className="li-contador li-button-mas">
                <button className="button-li-2" onClick={(contador) => {
                     
                        if (contador = 0) {
                            return (setContador(contador + 1))
                            
                        } else (contador > 15 ) {
                            return (alert("No Hay stock"))                            
                        }
                }                   
                    }>
                    <p><strong>+</strong></p>
                </button>
            </li>
            </ul>           
            </div>
        </>
    );
}

export default ItemCount;

