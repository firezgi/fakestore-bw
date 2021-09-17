import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
const GridView = ({ products }) => {
  return (
    
    <Wrapper>
      <div className='products-container'>
        {products.map((product) => {
          const{id,image,title,price}=product
          return (
            <CurrencyFormat
              renderText={(value) => (
                <Link to={`/products/${id}`}>
                  <article key={id}>
                    <img src={image} alt={title} />
                    <div>
                      <h4 style={{ color: "black" }}>{title}</h4>
                      <h5 className="price">{value}</h5>
                    </div>
                  </article>
                </Link>
              )}
              decimalScale={2}
              value={price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          );
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    display: block;
    width: auto;
    height:200px ;
    object-fit: cover;
    margin-bottom: 1rem;
    background-color:black;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView
