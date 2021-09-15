import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import {CartItems } from '../components'
const CartPage = () => {
  const { cart } = useCartContext()
  if (cart.length < 1) {
    return (
      <Wrapper className='page-100'>
        <div className='empty'>
          <h2>Your cart is empty</h2>
          <Link to='/products' className='btn'>
            Go to products
          </Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <main>
      <Wrapper className="page">
        <CartItems />
      </Wrapper>
      <Link
        style={{
          background: "blueViolet",
          fontSize: "1rem",
          marginBottom: "5rem",
          color: "black",
          letterSpacing: ".25rem",
          marginLeft: "80%",
        }}
        to="/checkout"
        className="btn"
      >
        Check out
      </Link>
    </main>
  );
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
 
`

export default CartPage
