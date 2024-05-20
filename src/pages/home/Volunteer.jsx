import volunteer from '../../assets/volunteer.jpg'

const Volunteer = () => {
    return (
        <>
            <h2 className='text-center text-2xl font-bold my-6 font-poppins'>Volunteer Opportunities</h2>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-16 my-12 max-w-6xl mx-auto font-poppins'>
                <img className='lg:w-1/2 px-2 lg:p-0' src={volunteer} alt="" />
                <div className='lg:w-1/2 px-9 lg:px-0'>
                    <h2 className=' text-2xl font-bold my-6'>Why Volunteeer With Us?</h2>
                    <ul className='list-disc space-y-3'>
                        <li><span className='font-medium'>Make a positive impact :</span>Help us support local initiatives and improve lives.</li>
                        <li><span className='font-medium'>Gain Valuable Experience:</span>Develop new skills and enhance your resume.</li>
                        <li><span className='font-medium'>Meet New People:</span> Connect with like-minded individuals and build lasting friendships.</li>
                        <li><span className='font-medium'>Flexible Schedules:</span>Find opportunities that fit your availability.</li>
                    </ul>
                    <button className='py-2 px-9 rounded btn btn-warning my-6'>Join</button>
                </div>
            </div>
        </>
    );
};

export default Volunteer;