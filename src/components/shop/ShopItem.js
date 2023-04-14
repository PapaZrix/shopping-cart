import styledComponents from "styled-components";
import { Link } from "react-router-dom";

const ShopItem = ({ item, handleAddToCart }) => {
    return (
        <Item>
            <ItemTop>
                <Link to={`/shop/${item.id}`}>
                    <ItemImg src={`https://cdn.shopify.com/s/files/1/0567/0567/9555/products/IASIP-${item.endpoint}`} alt={item.name}></ItemImg>
                </Link>
            </ItemTop>
            <ItemBottom>
                <ItemName>{item.name}</ItemName>
                <p>${item.price}</p>
                <AddToCartBtn value={item.id} onClick={handleAddToCart}>Add to cart</AddToCartBtn>
            </ItemBottom>
        </Item>
    )
}

const Item = styledComponents.div `
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-width: 40rem;
    margin: 0 auto;
    text-align: center;
    color: black;
    border: 1px solid #e5e7eb;
    box-shadow: 0px 0px 10px 1px rgba(0 0 0 / 10%);
    border-radius: 0.75rem;

    @media (max-width: 1024px) {
        width: 35rem;
    }

    @media (max-width: 450px) {
        width: 45rem;
    }
`

const ItemTop = styledComponents.div `
    padding: 2rem;
    border-bottom: 1px solid #e5e7eb;
`

const ItemBottom = styledComponents.div `
    padding: 1.5rem;
    font-size: 1.8rem;
`

const ItemName = styledComponents(Link) `
    font-size: 2rem;
    font-weight: bold;
    color: black;
`

const AddToCartBtn = styledComponents.button `
    margin: 1.5rem 0;
    width: 90%;
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

const ItemImg = styledComponents.img `
    max-width: 20rem;
    margin: 0 auto;
`

export default ShopItem