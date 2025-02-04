import { useEffect, useState } from "react";
import Banner from "./Banner";
import FeaturedFoods from "./FeaturedFoods";
import FeaturedPartners from "./FeaturedPartners";
import Volunteer from "./Volunteer";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const [featuredFoods, setFeaturedFoods] = useState([]);

    useEffect(() => {
        fetch('https://cravio-server.vercel.app/available-foods?availability=available')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setFeaturedFoods(data);
            })
    }, [])
    const sortFeaturdFood = featuredFoods.sort((a, b) => parseInt(b.foodQuantity - parseInt(a.foodQuantity)))
    const finalFeaturedFood = sortFeaturdFood.slice(0, 6);

    return (
        <div>
            <Helmet>
                <title>Cravio | Home</title>
            </Helmet>
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