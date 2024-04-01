import { Link, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};
export default Home;
