import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto PT-Sans '>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;