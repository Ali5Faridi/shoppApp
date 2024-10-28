import Button from "../components/Button"
import CartItem from "../components/cartItem/CartItem"
import Container from "../container/Container"



function Cart() {
  return (
    <div>
      <Container>
        <div className="">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        </div>

       
       <div className="bg-gray-300 rounded p-4">
            <p>total price: 230$</p>
            <p>discount: 30$</p>
            <p>final price: 200$</p>
       </div>
       <Button className="mt-2 p-2" variant="success">
       Zur Kasse gehen
       </Button>
    
      </Container>
    </div>
  )
}

export default Cart
