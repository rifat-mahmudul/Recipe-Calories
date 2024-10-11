import './Banner.css'

const Banner = () => {
    return (
        <div>
        
            <div className="banner max-w-[90%] xl:max-w-6xl h-[80vh] mx-auto rounded-xl">
                <div className='flex flex-col justify-center items-center h-full sm:w-[75%] mx-auto text-center'>
                    <h1 className='lg:text-5xl sm:text-3xl text-2xl font-extrabold text-white'>Discover an exceptional cooking class tailored for you!</h1>
                    <p className='text-white font-xl mt-4 mb-4'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>

                    <div className='flex gap-3'>
                        <button className='bg-[#0be58a] hover:bg-inherit hover:border border-white hover:text-white sm:py-3 py-1 px-5 font-bold rounded-3xl'>Explore Now</button>
                        <button className='hover:bg-[#0be58a] hover:text-black hover:border-0 border border-white text-white sm:py-3 py-1 px-5 font-bold rounded-3xl'>Our Feedback</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner;
