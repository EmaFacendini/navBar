import React from 'react'



function Hero() {
    return (
        <div className='w-screen h-[calc(100vh-5rem)]'>
            <div className="bg-cover bg-[url('/public/hero.png')] bg-center bg-no-repeat h-full w-full" >
                <div className="container mx-auto flex flex-col my-auto align-middle h-full" >
                    <div className='my-auto  mx-auto lg:mx-0 w-10/12 lg:w-2/5'>
                        <h1 className="text-4xl mb-4 "><span className='text-orange-500'>Let’s talk</span> about your next trip!</h1>
                        <p className="text-2xl mb-8">Share your favorite travel destination and we will feature it in our next blog!</p>
                        <div className='flex items-center'>
                            <button className='rounded-lg px-10 py-3 text-white bg-orange-300 hover:bg-orange-600'>Share your story</button>
                           
                        </div>

                    </div>
                </div >
            </div >
        </div>
    );
}

export default Hero;