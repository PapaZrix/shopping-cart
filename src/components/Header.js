import styledComponents from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = ({ cartQty }) => {
    return (
        <HeaderTag>
            <Container>
                <Link to='/shop'>
                    <ShopName>SunnyLand</ShopName>
                </Link>
                <Nav>
                    <NavbarLink to='/'>Home</NavbarLink>
                    <NavbarLink to='/shop'>Shop</NavbarLink>
                    <CartContainer>
                        <NavLinkCart to='/cart'>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </NavLinkCart>
                        {cartQty > 0 && 
                            <CartQty>{cartQty}</CartQty>
                        }
                    </CartContainer>
                </Nav>
            </Container>
        </HeaderTag>
    )
}

const HeaderTag = styledComponents.header `
    background-color: black;
    position: sticky;
    top: 0;
`

const Container = styledComponents.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 140rem;
    margin: 0 auto;
    padding: 3rem;
`

const ShopName = styledComponents.h1 `
    font-size: 6rem;
    color: #f7c315;
    cursor: pointer;
`

const Nav = styledComponents.nav `
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 7rem;
    font-size: 2.4rem;
`

const NavbarLink = styledComponents(Link) `
    padding: 1rem;
    transition: transform 0.15s ease-in-out 0s;
    color: white;

    &:hover {
        transform: scale(1.1);
        color: #f7c315;
    }
`

const CartContainer = styledComponents.div `
    position: relative;
    cursor: pointer;
    transition: transform 0.15s ease-in-out 0s;

    &:hover {
        transform: scale(1.1);
    }

`

const NavLinkCart = styledComponents(Link) `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border-radius: 50px;
    background-color: white;
    color: black;
`

const CartQty = styledComponents.span `
    position: absolute;
    top: 3.5rem;
    right: 4rem;
    background-color: #f7c315;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
    font-weight: bold
`

export default Header