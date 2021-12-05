import { Link } from 'react-router-dom';
import dragon from "../assets/angry.png"
import "../styles/Home.css"

const Home = () => {
    return (
        <div className="home">
            <div className="center">
                <h1 className="pink azania py-2">Mage Wars</h1>
                <p className="white">Ready to smoke the Dragon? Mint a Mage to fight the Dragon.</p>
                <Link to="/MintHero"><button className="px-3 border-0 rounded-pill p-2 wallet white">Mint A Mage To Play</button></Link>
             
            </div>
            <img alt="dragon"  src={dragon} className="dragon "/>
        </div>
    )
}

export default Home;