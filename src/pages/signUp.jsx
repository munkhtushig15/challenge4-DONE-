import { useLocation } from "react-router-dom";
import '../App.css';

const SignUp = () => {
    const location = useLocation();
    return <div className="pos">Contact page location {location.pathname}</div>
}

export default SignUp;
