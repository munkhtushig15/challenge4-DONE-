import { useLocation } from "react-router-dom";
import '../App.css';

const Services = () => {
    const location = useLocation();
    return <div className="pos">Services page location {location.pathname}</div>
}

export default Services