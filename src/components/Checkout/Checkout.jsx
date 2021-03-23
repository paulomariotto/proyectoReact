import { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { getFirestore } from '../Firebase';
import { Link } from 'react-router-dom'
import{Form, Button, Col} from "react-bootstrap";
const Checkout = () => {

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [mailValidate, setMailValidate] = useState('');
  const [phone, setPhone] = useState('');
  const [ordenId, setordenId] = useState('');
  const [errormessage, setErrormessage] = useState(false);
  const [purchaseDone, setPurchaseDone] = useState(false)

  const mailRules = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const isValidMail = mailRules.test(mail)

  const mailValidation = mail === mailValidate
  const shortName = name.length > 6
  const shortPhone = phone.length > 6

  const endPurchase = () => {
    if (shortName && shortPhone && mailValidation && isValidMail) {
      console.log('Compra finalizada')
      const purchaseData = { prod: { ...cart },buyer: { name: name, mail: mail, phone: phone } }
      const dataBase = getFirestore();
      const orderCollection = dataBase.collection('Orders');
      orderCollection.add(purchaseData).then((value) => {
        console.log(value.id)
        setPurchaseDone(true)
        setordenId(value.id)
        removerProducto()
      });
      console.log(purchaseData)
    }
    else {
      setErrormessage(true)
    }
  }

  const { cart, removerProducto } = useContext(CartContext)

  return (
      <div>
    {purchaseDone === false ? <div>
        <h1>Finalice su compra</h1>
        <h2>Sus productos:</h2>
        {cart.map(e => <div key={e.id}>
          <p>Producto: <b>{e.name}</b>, Cantidad: <b>{e.quantity}</b></p>
        </div>)}
        <p>Precio final total: <b>$</b></p>
        <h2>Complete sus datos:</h2>
        
    <Form>    
  <Form.Row>
    <Col>
      <Form.Control placeholder="Nombre y Apellido" onChange={(e) => { setName(e.target.value) }} />
      {shortName === false && errormessage ? <p className="errorMessage">El nombre y apellido debe tener un mínimo de 6 caracteres</p> : ""}
    </Col>   
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Ingrese su email" onChange={(e) => { setMail(e.target.value) }}/>
      {isValidMail === false && errormessage ? <p className="errorMessage">No es un correo válido</p> : ""}
    </Form.Group>
    </Form.Row>

    <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type=" Confirmar email" placeholder="Ingrese su Email novamente" onChange={(e) => { setMailValidate(e.target.value) }}/>
      {isValidMail === false && errormessage ? <p className="errorMessage">No es un correo válido</p> : ""}
    </Form.Group>  
    </Form.Row>  
   
    <Form.Row>
  <Form.Group controlId="formGridCellPhone">
    <Form.Label>Telefono</Form.Label>
    <Form.Control placeholder="Ingrese su Celular" onChange={(e) => { setPhone(e.target.value) }}/>
    {shortPhone === false && errormessage ? <p className="errorMessage">Mínimo de 6 caracteres</p> : ""}
  </Form.Group>
  </Form.Row>

  {cart.length === 0 ? <p>Error! no hay productos en el carrito</p> :
    <Form.Row>
  <Button variant="primary" type="submit" onClick={() => { endPurchase() }}>
    Confirmar Comprar
  </Button>
  </Form.Row>
}
</Form>
</div>
: <div>
            <h1>¡Felicitaciones! su compra ha sido realizada con éxito</h1>
            <p><b>{name}</b> Gracias por su compra. Enviaremos un mail a <b>{mail}</b> con todos los detalles de compra y envío.</p>
            <p>El código de su operación es: <b>{ordenId}</b></p>
            <Link to={'/'}>
              <Button type="primary">Ir al home</Button>
            </Link>
            </div>

}
</div>

)
}

export default Checkout;