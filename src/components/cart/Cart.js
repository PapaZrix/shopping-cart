import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styledComponents from "styled-components";
import CartItem from "./CartItem";

const Cart = ({ items, changeQty, removeFromCart }) => {
    return (
        <main>
            {items && items.length > 0 ? (
                <Container>
                    <div>
                        {items.map(item => <CartItem key={item.id} item={item} changeQty={changeQty} removeFromCart={removeFromCart} /> )}
                    </div>
                    <CheckoutContainer>
                        <CheckOut sum={items} />
                        <ProceedBtn>CHECKOUT</ProceedBtn>
                        <GoBack to='/shop'>
                            <FontAwesomeIcon icon={faArrowLeft} />
                            Go Back
                        </GoBack>
                    </CheckoutContainer>
                </Container>    
            ) : (
                <EmptyContainer>
                    <EmptyCart>YOUR CART IS EMPTY</EmptyCart>
                    <CartIcon className="material-symbols-outlined">shopping_cart</CartIcon>
                    <GoBack to='/shop'>
                            <FontAwesomeIcon icon={faArrowLeft} />
                            Go Back
                    </GoBack>
                </EmptyContainer>
            )}
        </main>
    )
}

const CheckOut = ({ sum }) => {

    const sumItems = (items) => {
        return items.reduce((sum, curr) => sum + (curr.price * curr.qty), 0)
    }
    const checkout = sumItems(sum)

    return (
        <div style={{
            textAlign: 'center',
            marginTop: '5rem',
            fontSize: '2.5rem',
            fontWeight: 'bold'
        }}>
            <p>Your Total : ${(checkout).toFixed(2)}</p>
        </div>
    )
}

const Container = styledComponents.div `
    margin: 0 auto;
    width: 80rem;
    padding: 2rem;
    margin-top: 4rem;
    margin-bottom: 15rem;
    display: flex;
    flex-direction: column;

    @media (max-width: 450px) {
        width: 40rem;
    }
`

const EmptyContainer = styledComponents.div `
    margin: 0 auto;
    width: 60rem;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 55rem;
    margin-top: 4rem;
    margin-bottom: 15rem;
    animation: ease-in-out 0.5s fadeIn;

    @keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

    @media (max-width: 450px) {
        width: 40rem;
    }
`

const CheckoutContainer = styledComponents.div `
    max-width: 50%;
    margin: 0 auto;
    margin-top: 2.5rem;
    display: flex; 
    flex-direction: column;
    justify-content; center;

    @media (max-width: 450px) {
        max-width: 100%;
    }
`

const ProceedBtn = styledComponents.button `
    margin: 1.5rem 0;
    padding: 1rem;
    background-color: black;
    padding: 1rem;
    background-color: black;
    color: white;
    cursor: pointer;
    font-weight: bold;
    border: none;
    transition: transform 0.15s ease-in-out 0s;
    border-radius: 0.5rem;

    &:hover {
        background-color: rgb(0, 0, 0, 0.9);
        transform: scale(1.1)
    }
`

const CartIcon = styledComponents.span `
    font-size: 5.5rem;
    animation: 3s ease-in-out 0s infinite normal none running emptyCart;
    
    @keyframes emptyCart {
        0%,
        100% {
            transform: rotate(10deg);
            color: black;
        }
        50% {
            transform: rotate(-10deg);
            color: #f7c315;
        }
    }
`

const GoBack = styledComponents(Link) `
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    color: black;
    font-size: 2rem;
`

const EmptyCart = styledComponents.p `
    background-color: black;
    color: white;
    font-size: 2rem;
    padding: 1rem;
    margin-top: 0.5rem; 
`

export default Cart