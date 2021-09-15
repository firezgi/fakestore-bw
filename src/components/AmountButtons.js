import React from 'react'
import styled from 'styled-components'
import { GoArrowDown, GoArrowUp } from 'react-icons/go'

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <Wrapper className='amount-btn'>
      <button type='button' className='amount-btn' onClick={decrease}>
        <GoArrowDown />
      </button>
      <h2 className='amount'>{amount}</h2>
      <button type='button' className='amount-btn' onClick={increase}>
        <GoArrowUp />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: white;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 1.4rem;
    height: 1.2rem;
    font-size:1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`

export default AmountButtons
