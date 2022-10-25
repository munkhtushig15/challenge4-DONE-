import { Link } from "react-router-dom";
import "../App.css"; 

const Header = () => {
    return  (
        <div className='App'>

            <div className="headerContainer">
                <img src={require('../images/team.png')} />
                <div className="rightSide">
                    <Link className="color" to="/home">Products</Link>
                    <br />
                    <Link className="color" to="/login">Services</Link>
                    <br />
                    <Link className="color" to="/signup">Contact</Link>
                    <br />
                    <Link className="color" to="/signup">Log in</Link>
                    <p className="">
                        <Link className="color" to="/signup">Get Access</Link>
                    </p>
                </div>
                
            </div>

        </div>
    )
}

export default Header;