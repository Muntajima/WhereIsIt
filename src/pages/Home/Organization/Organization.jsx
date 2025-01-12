import Marquee from 'react-fast-marquee';
import logo1 from '../../../assets/companies/1738.jpg';
import logo2 from '../../../assets/companies/200.jpg';
import logo3 from '../../../assets/companies/48_human_leaf.jpg';
import logo4 from '../../../assets/companies/7533464.jpg';
import logo5 from '../../../assets/companies/preview.jpg';
import logo6 from '../../../assets/companies/preview1.jpg'

const Organization = () => {
    return (
        <div>
            <h2 className='text-4xl font-semibold text-center mt-24 mb-8'>Some organizations that use the Lost & Found software of WhereIsIt are...</h2>
            <div>
                <Marquee>
                    <img src={logo1} className='w-52 mr-6' />
                    <img src={logo2} className='w-52 mr-6' />
                    <img src={logo3} className='w-52 mr-6' />
                    <img src={logo4} className='w-52 mr-6' />
                    <img src={logo5} className='w-52 mr-6' />
                    <img src={logo6} className='w-52 mr-6' />
                </Marquee>
            </div>
        </div>
    );
};

export default Organization;
