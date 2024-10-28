import React from "react";
import { useParams } from "react-router-dom";
import Container from "../../container/Container";
import Button from "../../components/Button";

export default function Product() {
  const params = useParams();
  return (
    <div>
      <Container>
        <div className="h-90 shadow mt-4 grid grid-cols-12">
          <div className="bg-neutral-500 col-span-2 p-4">
            <img
              className="rounded"
              src="https://picsum.photos/200/200"
              alt=""
            />
            <Button className="mt-2 w-full py-2" variant="primary">Add To Cart</Button>
          </div>

          <div className="bg-amber-300 col-span-10 p-4">
            <h1>Iphon14 pro</h1>
            <div>
              <p>price: 130$</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora, est necessitatibus! Odit officiis magnam non tenetur id
                sunt delectus velit?
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
