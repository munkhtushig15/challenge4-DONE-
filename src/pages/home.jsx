import { useLocation } from "react-router-dom";
import '../App.css';

const Home = () => {
    const location = useLocation();
    return <div className="pos">Products page location {location.pathname} </div>
};

export default Home;