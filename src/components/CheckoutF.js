import React from 'react'
import  styled  from 'styled-components'
import { Link } from 'react-router-dom'
const CheckoutF=()=> {
    return (
      <Wrapper>
        <form className="checkout__form">
          <h4 className="checkout__subheading" style={{ display: "block" }}>
            Customer Details:
          </h4>
          <h5 className="checkout__subheading" style={{ display: "block" }}>
            Name
          </h5>
          <input
            className="checkout__input"
            type="text"
            name="firstName"
            placeholder="Pls Enter your First Name"
            required=""
            value=""
          />
          <input
            className="checkout__input"
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            required=""
            value=""
          />
          <input
            className="checkout__input"
            type="text"
            name="email"
            placeholder="Enter your email"
            required=""
            value=""
          />
          <h5 className="checkout__subheading">Shipping Address</h5>
          <input
            className="checkout__input"
            type="text"
            name="shippingName"
            placeholder="Full name"
            required=""
            value=""
          />
          <input
            className="checkout__input"
            type="text"
            name="shippingStreet"
            placeholder="Enter your street address"
            required=""
            value=""
          />
          <input
            className="checkout__input"
            type="text"
            name="city"
            placeholder="City"
            required=""
            value=""
          />

          <input
            className="checkout__input"
            type="text"
            name="shippingPostalZipCode"
            placeholder="Enter your postal/zip code"
            required=""
            value=""
          />
          <h5 className="checkout__subheading">Billing Address</h5>
          <input
            className="checkout__input"
            type="text"
            name="billingName"
            placeholder="Full name"
            required=""
            value=""
          />
          <input
            className="checkout__input"
            type="text"
            name="billingStreet"
            placeholder="Enter your street address"
            required=""
            value=""
          />
          <input
            className="checkout__input"
            type="text"
            name="city"
            placeholder="City"
            required=""
            value=""
          />

          <input
            className="checkout__input"
            type="text"
            name="shippingPostalZipCode"
            placeholder="Enter your postal/zip code"
            required=""
            value=""
          />
          <h5 className="checkout__subheading">Payment info</h5>
          <input
            className="checkout__input"
            type="text"
            name="cardNum"
            placeholder="Enter your card number"
          />
          <input
            className="checkout__input"
            type="text"
            name="expMonth"
            placeholder="Card expiry month"
            value=""
          />
          <input
            className="checkout__input"
            type="text"
            name="expYear"
            placeholder="Card expiry year"
            value=""
          />
          <input
            className="checkout__input"
            type="text"
            name="ccv"
            placeholder="CSV (3 digits)"
            value=""
          />

          <Link to="/products" className="btn">
            SUBMIT ORDER
          </Link>
        </form>
      </Wrapper>
    );
}


const Wrapper=styled.div`
.checkout__form {
background-color:paleturquoise ;
border: 2px solid gray;
width: 80%;
padding: 1.5rem 2rem;
margin: 1.5rem 3rem 3rem;
justify-content:center;
}

form {
display: block;
margin-top: 0em;
}
.btn{
    background: black;
    font-size:.65rem;
    font-weight:300;
    letter-spacing:.03rem;
    margin-left:50px;
    margin-top: 10px;
}
input {
    margin-left:4px;
    background-color:transparent;
}

h5{
  margin-bottom:5px
}
`

export default CheckoutF;
