import React, { useState } from 'react'

function Carousel({ images }) {
    const [activeImg, setActiveImg] = useState(0)
    const last = images.length - 1

    const prevImg = () => {
        setActiveImg((prev) => (prev === 0 ? last : prev - 1))
    }

    const nextImg = () => {
        setActiveImg((prev) => (prev === last ? 0 : prev + 1))
    }

    return (
        <div className='fixed bg-gray-500 top-0 left-0 h-screen w-screen flex flex-col items-center justify-center overflow-hidden'>
            {/* Image Container with Fixed Size */}
            <div className='w-[500px] h-[300px] bg-white flex items-center justify-center rounded-lg shadow-lg'>
                <img src={images[activeImg]} alt="carousel" className='w-full h-full object-cover rounded-lg' />
            </div>

            {/* Buttons Below Image */}
            <div className='flex gap-4 mt-4'>
                <button className='inline-flex h-14 items-center justify-center rounded-full bg-neutral-950 px-6 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95'
                    onClick={prevImg}
                >
                    {'<'}
                </button>
                <button className='inline-flex h-14 items-center justify-center rounded-full bg-neutral-950 px-6 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95'
                    onClick={nextImg}
                >
                    {'>'}
                </button>
            </div>
        </div>
    )
}

export default Carousel
