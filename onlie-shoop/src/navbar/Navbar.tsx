import React from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";

function Navbar() {
  return (
    <div className="h-14 border-b shadow flex items-center bg-gray-500">
      <Container>
        <div className="flex justify-between">
          <ul className="flex">
            <li className="ml-4">
              <Link to="/">Home</Link>
            </li>
            <li className="ml-4">
              <Link to="/store">Store</Link>
            </li>
          </ul>

          <div>
            <Link to= "/cart">
            <button>Basket</button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
