import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
};

export default Home;