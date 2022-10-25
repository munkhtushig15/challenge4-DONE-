import { useLocation } from "react-router-dom";



const Home = () => {
    const location = useLocation();
    return <div>Home page location {location.pathname} </div>
};

export default Home;