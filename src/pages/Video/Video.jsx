import { Link } from 'react-router-dom';

const Video = () => {
    return (
        <div className='w-full h-[700px] bg-[#d11818] flex flex-col items-center mt-12'>
            <iframe width="853" height="480" src="https://www.youtube.com/embed/81iz8c-KDVY" title="Lost something? iLost is the solution!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h2 className='text-2xl text-white mt-12'>Register your valuables with WhereIsIt. So you can start searching from the moment you lose something.</h2>
            <Link to='/addItems'><button className='btn px-12 mt-4'>Register Item Now</button></Link>
        </div>
    );
};

export default Video;