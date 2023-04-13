import styledComponents from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main>
            <HomeDiv>
                <Hero>
                    <HeroTop>No 1 It's Always Sunny Merchandise Shop</HeroTop>
                    <HeroBottom>All your favorite meme material</HeroBottom>
                    <ShopNow to='/shop'>Shop now</ShopNow>
                </Hero>
                <HomeImg src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/05/Its-Always-Sunny-Feature.jpg" alt="always sunny cast"></HomeImg>
            </HomeDiv>
        </main>
    )
}

const HomeDiv = styledComponents.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 7rem;
    margin-bottom: 20rem;
`
const Hero = styledComponents.div `
    display: flex;
    flex-direction: column;
    width: 50rem;
    font-weight: bold;
`

const HeroTop = styledComponents.p `
    color: rgb(123, 123, 123);
    font-size: 2.2rem;
    text-transform: uppercase;
`

const HeroBottom = styledComponents.h1 `
    font-size: 6.2rem;
    line-height: 1.3;
`

const HomeImg = styledComponents.img `
    width: 75rem;
    border-radius: 1.25rem;
`

const ShopNow = styledComponents(Link) `
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 39rem;
    font-size: 4rem;
    padding: 2rem;
    border-radius: 50px;
    background-color: black;
    color: white;
    transition: transform 0.15s ease-in-out 0s;
    
    &:hover {
        transform: scale(1.1)
    }
`

export default Home 