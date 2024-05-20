import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    // const images = [
    //     "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    //     "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    //     "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",

    // ];
    const buttonStyle = {
        width: "30px",
        background: 'none',
        border: '0px'
    };
    const properties = {
        prevArrow: <button className='text-6xl mr-9 text-white opacity-50 hover:opacity-80' style={{ ...buttonStyle }}><GrPrevious /></button>,
        nextArrow: <button className='text-6xl mr-9 text-white opacity-50 hover:opacity-80' style={{ ...buttonStyle }}><GrNext /></button>
    }

    return (
        <Slide {...properties} duration={2000}>
            <div className="each-slide-effect w-full h-full">
                <div className='bg-center bg-cover h-[300px] lg:h-[500px]' style={{ 'backgroundImage': `url(${image1})` }} >
                    {/* <span>Slide 1</span> */}

                    <div className='w-full h-full bg-black bg-opacity-50 text-center'>
                        <h2 className='text-xl lg:text-6xl font-bold text-white flex justify-center items-center h-full opacity-70'>Donate Food <br />Spark Hope Today</h2>
                    </div>
                </div>
            </div>
            <div className="each-slide-effect w-full h-full">
                <div className='bg-center bg-cover h-[300px] lg:h-[500px]' style={{ 'backgroundImage': `url(${image2})` }}>
                    {/* <span>Slide 1</span> */}
                    <div className='w-full h-full bg-black bg-opacity-50 text-center'>
                        <h2 className='text-xl lg:text-6xl font-bold text-white flex justify-center items-center h-full opacity-70'>Join the fight <br />Your food donations save lives!</h2>
                    </div>
                </div>
            </div>
            <div className="each-slide-effect w-full h-full">
                <div className='bg-center bg-cover h-[300px] lg:h-[500px]' style={{ 'backgroundImage': `url(${image3})` }}>
                    {/* <span>Slide 1</span> */}
                    <div className='w-full h-full bg-black bg-opacity-50 text-center'>
                        <h2 className='text-xl lg:text-6xl font-bold text-white flex justify-center items-center h-full opacity-70'>Support communities <br /> Donate or receive essential food aid</h2>
                    </div>
                </div>
            </div>
            <div className="each-slide-effect w-full h-full">
                <div className='bg-center bg-cover h-[300px] lg:h-[500px]' style={{ 'backgroundImage': `url(${image4})` }}>
                    {/* <span>Slide 1</span> */}
                    <div className='w-full h-full bg-black bg-opacity-50 text-center'>
                        <h2 className='text-xl lg:text-6xl font-bold text-white flex justify-center items-center h-full opacity-70'>End hunger <br />Share food or find help today</h2>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default Banner;