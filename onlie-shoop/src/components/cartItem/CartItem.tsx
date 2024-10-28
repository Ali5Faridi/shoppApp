import Button from "../Button";

function CartItem() {
  return (
    <div className="flex mt-4 border-b pb-2">
      <img className="rounded , " src="https://picsum.photos/200/200" alt="" />
      <div className="m-4">
        <h3>titel</h3>
        <p>price: 130$</p>
        <p>quantity: 1</p>
        <div className="mt-2">
          <Button className="px-2" variant="primary">
            +
          </Button>
          <span className="p-3">{2}</span>
          <Button className="mx-2 px-3" variant="primary">
            -
          </Button>
          <Button
            className=" rounded mr-2"
            variant="warning"
          >
            Remove
          </Button>
        </div>

        {/* <Button className="bg-red-500 text-white p-2 rounded" variant="warning">Remove</Button>
            <span className="p-3">{2}</span>
            <Button className="bg-blue-500 text-white px-6 py-2 rounded" variant="primary">Add</Button> 
            <Button className="bg-blue-500 text-white px-6 py-2 rounded" variant="danger">Remove</Button>  */}
      </div>
    </div>
  );
}

export default CartItem;
