import { useLocation} from "react-router-dom";
// import { useParams } from "react-router-dom";
import '../App.css';

const GetAccess = () => {
    const location = useLocation();
    return <div className="pos">GetAccess page location {location.pathname}</div>
}

export default GetAccess;