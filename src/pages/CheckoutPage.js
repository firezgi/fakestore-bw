import React from 'react'
import styled from 'styled-components'
import {  CheckoutForm } from '../components'
import CartTotals from '../components/CartTotals'
import CheckoutF from "../components/CheckoutF";


const CheckoutPage = () => {


  return (
    <main style={{display:"flex"}}>
      <div style={{width:"75%"}}>
      <Wrapper className="page">
        <CheckoutForm />
      </Wrapper>
      <CartTotals />
      </div>
      <CheckoutF/>
    </main>
  );
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`
export default CheckoutPage
