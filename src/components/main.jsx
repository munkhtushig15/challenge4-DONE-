import { Link } from "react-router-dom";
import "../App.css"; 

const Main = () => {
    return (
        <div className="mainContainer">
            <div>
                <h1 className="mainTitle mainColor">Instant collaborations for remote teams</h1>
                <span className="mainColor mainText">All in one for your remote team chats, 
                collaboration and track projects</span>
            </div>
            <div className="srchContainer">
                <input type="text" name="search" id="srchInpt" placeholder="Email" />
                <button className="mainBtn">Get early access</button>
            </div>
        </div>
    )
}

export default Main