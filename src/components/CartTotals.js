import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import CurrencyFormat from "react-currency-format";
const CartTotals = () => {
  const { total_amount} = useCartContext()

  return (
    <CurrencyFormat
      renderText={(value) => (
        <Wrapper>
          <h4 style={{ margin: "0px 120px" }}>
            order total :<span>{value}</span>
          </h4>
        </Wrapper>
      )}
      decimalScale={2}
      value={total_amount}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
    />
  );
  
}

const Wrapper = styled.section`

  margin-right: 1rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid black;
    border-radius: var(--radius);
    padding: .2rem 1rem;
    background: gray;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`

export default CartTotals
