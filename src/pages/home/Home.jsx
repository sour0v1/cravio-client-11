import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Banner from "./Banner";

const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;