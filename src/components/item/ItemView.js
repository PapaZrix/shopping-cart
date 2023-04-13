import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styledComponents from "styled-components";
import db from "../../db/db";

const ItemView = ({ handleAddToCart }) => {
    const { id } = useParams()

    const item = db.find(item => item.id === id)

    return (
        <main>
            <Item>
                <ItemLeft>
                    <ItemImg src={`https://cdn.shopify.com/s/files/1/0567/0567/9555/products/IASIP-${item.endpoint}`} alt={item.name}></ItemImg>
                </ItemLeft>
                <ItemRight>
                    <p style={{fontSize: '3rem'}}>{item.name}</p>                   
                    <p>${item.price}</p>
                    <AddToCartBtn onClick={handleAddToCart} value={item.id}>Add to cart</AddToCartBtn>
                    <GoBack to='/shop'>
                        <FontAwesomeIcon icon={faArrowLeft} />
                        Go Back
                    </GoBack>
                </ItemRight>
            </Item>
        </main>
    )
}

const Item = styledComponents.div `
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    margin-top: 4rem;
    margin-bottom: 15rem;
`

const ItemLeft = styledComponents.div `
    border: 1px solid #e5e7eb;
`

const ItemImg = styledComponents.img `
    width: 50rem;
`

const ItemRight = styledComponents.div `
    width: 60rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    font-size: 2rem;
`

const AddToCartBtn = styledComponents.button `
    margin: 1.5rem 0;
    width: 35%;
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

const GoBack = styledComponents(Link) `
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    color: black;
`

export default ItemView