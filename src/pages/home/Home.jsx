import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Banner from "./Banner";
import FeaturedFoods from "./FeaturedFoods";
import FeaturedPartners from "./FeaturedPartners";
import Volunteer from "./Volunteer";

const Home = () => {
    const { user } = useContext(AuthContext)
    const [featuredFoods, setFeaturedFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/available-foods?availability=available')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFeaturedFoods(data);
            })
    }, [])
    const sortFeaturdFood = featuredFoods.sort((a, b) => parseInt(b.foodQuantity - parseInt(a.foodQuantity)))
    const finalFeaturedFood = sortFeaturdFood.slice(0, 6);

    return (
        <div>
            <Banner></Banner>
            {/* <FeaturedFoods></FeaturedFoods> */}
            <div className="my-12">
                <h2 className='text-center text-2xl font-bold mb-6'>Featured Foods</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
                    {
                        finalFeaturedFood.map(food => <FeaturedFoods food={food} key={food._id}></FeaturedFoods>)
                    }
                </div>
            </div>
            <Volunteer></Volunteer>
            <FeaturedPartners></FeaturedPartners>
        </div>
    );
};

export default Home;