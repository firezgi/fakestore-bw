import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { TiShoppingCart } from 'react-icons/ti'
import { useCartContext } from '../context/cart_context'

const Nav = () => {
  return (
    <NavContainer>
      <div className="nav-center"style={{display:"flex",justifyContent:"space-between"}}>
        <div className="nav-header">
          <Link to="/">
            <h2>Habteab's Store</h2>
          </Link>
        </div>
        <CartButtons />
      </div>
    </NavContainer>
  );
}
const CartButtons = () => {
  const { total_items } = useCartContext();
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn">
        <span className="cart-container">
          <TiShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
    </Wrapper>
  );
};




const NavContainer = styled.nav`
  height: auto;
  display: flex;
  margin-bottom:2rem;
  align-items: center;
  justify-content: center;
  /* margin-top:1.2rem; */
  background: black;
 overflow: hidden;
  position: fixed;
  z-index: 100;
  width:100%;
  top: 0;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 60px;
      /* margin-top:1.2rem; */
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: yellow;
        font-size: 1.5rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: #979707;
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: white;
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: blueviolet;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: #0404b8;
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`

export default Nav 
