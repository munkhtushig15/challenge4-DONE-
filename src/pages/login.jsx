import { useLocation} from "react-router-dom";
// import { useParams } from "react-router-dom";

import '../App.css';

const Login = () => {
    const location = useLocation();
    return <div className="pos">Login page location {location.pathname}</div>
}

export default Login;