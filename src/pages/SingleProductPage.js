import React, { useEffect } from 'react'
import { useParams} from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import CurrencyFormat from "react-currency-format";
import {
  Loading,
  Error,
  AddToCart,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const SingleProductPage = () => {
  const { id } = useParams()

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext()

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
  }, [id])
 
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  const {title,price,description,image,} = product
  return (
    <CurrencyFormat
      renderText={(value) => (
        <Wrapper>
          <div className="section section-center page">
            <Link
              to="/products"
              // style={{
              //   backgroundColor: "black",
              //   padding: "10px",
              //   borderRedius: "200%",
              // }}
            >
              back to products
            </Link>
            <div className="product-center">
              <section className="content">
                <h2>{title}</h2>
                <h5 className="price">{value}</h5>
                <p className="desc">{description}</p>
                {<AddToCart product={product} />}
              </section>
              <img src={image} alt="" />
            </div>
          </div>
        </Wrapper>
      )}
      decimalScale={2}
      value={price}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
    />
  );
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  img{
    width:auto;
    height:400px ;
  }
  .price {
    color: #6d07cc;
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
