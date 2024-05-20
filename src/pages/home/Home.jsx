import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Banner from "./Banner";
import FeaturedFoods from "./FeaturedFoods";

const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <Banner></Banner>
            <FeaturedFoods></FeaturedFoods>
        </div>
    );
};

export default Home;