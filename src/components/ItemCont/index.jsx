import "./style.scss"


const ItemCount = ({stock, onAdd, onSubstract, contador}) => {
    
      
    return (
        <>
            <div>
                <ul className="ul-contador">
                    <li className="li-contador li-button-menos">
                        <button className="button-li-1" onClick={onSubstract}>-</button>
                    </li>
                    <li className="li-contador">
                        <p>{contador}</p>
                    </li>
                    <li className="li-contador li-button-mas">
                        <button className="button-li-2" onClick={() => { onAdd(stock)}}>+</button>
                    </li>
                </ul>
            </div>
        </>
    );
}


export default ItemCount
