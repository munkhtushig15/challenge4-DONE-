import { useLocation } from "react-router-dom";

const SignUp = () => {
    const location = useLocation();
    return <div>SignUp page location {location.pathname}</div>
}

export default SignUp;
