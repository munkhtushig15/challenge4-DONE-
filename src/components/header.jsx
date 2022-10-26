import { Link } from "react-router-dom";
import "../App.css"; 

const Header = () => {
    return  (
        <div className='App'>

            <div className="headerContainer">
                <img src={require('../images/team.png')} />
                <div className="rightSide">
                    <Link className="color" to="/products">Products</Link>
                    {/* <br /> */}
                    <Link className="color" to="/services">Services</Link>
                    {/* <br /> */}
                    <Link className="color" to="/contact">Contact</Link>
                    {/* <br /> */}
                    <Link className="color" to="/login">Log in</Link>
                    <p className="">
                        <Link className="spclOne" to="/getAccess">Get Access</Link>
                    </p>
                </div>
                
            </div>

        </div>
    )
}

export default Header;