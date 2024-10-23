import React from 'react';
import ProductItem from '../../productItem/ProductItem';
import Container from '../../container/Container';
import { Link } from 'react-router-dom';


function Store() {
  return(
    <div className='bg-slate-200'>
     <Container>
     <h1 className='text-right mt-5'> New product</h1>
    <div className='grid grid-cols-4 gap-3 mt-4 bg-slate-50'>
      <Link to= {`/product/${1}`}>
      <ProductItem />
      </Link>

      <Link to= {`/product/${2}`}>
      <ProductItem />
      </Link>
     
      <Link to= {`/product/${3}`}>
      <ProductItem />
      </Link>
     
      <Link to= {`/product/${4}`}>
      <ProductItem />
      </Link>
     
      <Link to= {`/product/${5}`}>
      <ProductItem />
      </Link>
     
     
    </div>
     </Container>
    </div>
  )
  
}

export default Store;