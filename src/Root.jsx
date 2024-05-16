
import { Outlet } from 'react-router-dom';
import Footer from './pages/Footer';
import Navbar from './pages/navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;