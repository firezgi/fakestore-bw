import React, { useState } from 'react'
import styled from 'styled-components'
const ProductImages = ({ images = [{url:''}] }) => {
  const [main] = useState(images[0])
  return (
    <Wrapper>
      <img src={main.url} alt='' className='main ' />
      
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
     width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover; 
  } 
  
  .active {
    border: 2px solid var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
   
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 275px;
      }
    }
  }
`

export default ProductImages
