import styledComponents from "styled-components";
import { Link } from "react-router-dom";

const CartItem = ({ item, changeQty, removeFromCart }) => {

    const decreaseQty = () => changeQty(item.id, -1)
    const increaseQty = () => changeQty(item.id, 1)

    return (
        <Item>
            <Link to={`shop/${item.id}`}>
                <ItemImg src={`https://cdn.shopify.com/s/files/1/0567/0567/9555/products/IASIP-${item.endpoint}`} alt={item.name}></ItemImg>
            </Link>
            <ItemRight>
                <ItemRightTop>
                    <Link style={{fontSize: '3rem'}} to={`/shop/${item.id}`}>{item.name}</Link>
                    <p>
                        ${item.qty > 1 ? (item.price * item.qty).toFixed(2) : (item.price).toFixed(2) }
                    </p>
                </ItemRightTop>
                <ItemRightBottom>
                    <CartBtns>
                        <QtyBtns>
                            <ChangeQty disabled={item.qty === 1} value={item.id} onClick={decreaseQty}>-</ChangeQty>
                            <Qty>{item.qty}</Qty>
                            <ChangeQty value={item.id} onClick={increaseQty}>+</ChangeQty>
                        </QtyBtns>
                        <RemoveItemBtn value={item.id} onClick={(e) => removeFromCart(e.target.value)}>Remove</RemoveItemBtn>
                    </CartBtns>
                </ItemRightBottom>
            </ItemRight>
        </Item>        
    )
}

const Item = styledComponents.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    border-bottom: 1px solid #e5e7eb;
    padding: 1rem;

    &:last-child {
        border-bottom: none;
    }
`

const ItemImg = styledComponents.img `
    width: 20rem;
`

const ItemRight = styledComponents.div `
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 40rem;
`

const ItemRightTop = styledComponents.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const ItemRightBottom = styledComponents.div `
    display: flex;
    justify-content: center;
`

const CartBtns = styledComponents.div `
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const QtyBtns = styledComponents.div `
    display: flex;
    align-items: center;
    gap: 2rem;
`

const Qty = styledComponents.p `
    text-align: center;
    margin: auto;
    padding: 0.5rem;
    width: 10rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    font-weight: bold;
`

const ChangeQty = styledComponents.button `
    padding: 0.5rem;
    width: 5rem;
    border: none;
    border-radius: 50px;
    background-color: black;
    color: white;
    font-size: 2rem;
    cursor: pointer;
`

const RemoveItemBtn = styledComponents.button `
    background-color: #f87171;
    border: none;
    padding: 0.5rem;
    font-weight: bold;
    color: white;
    border-radius: 0.5rem;
    width: 65%;
    margin: 0 auto;
    margin-top: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #ef4444;
    }
`

export default CartItem