import ShopItem from "./ShopItem";
import styledComponents from "styled-components";

const Shop = ({ items, handleAddToCart }) => {
    return (
        <main>
            <ShopDiv>
                {items.map(item => <ShopItem key={item.id} item={item} handleAddToCart={handleAddToCart} />)}
            </ShopDiv>
        </main>
    )
}

const ShopDiv = styledComponents.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
    margin-top: 7rem;
    margin-bottom: 20rem;

    @media (max-width: 450px) {
        display: flex;
        flex-direction: column;
    }
`

export default Shop