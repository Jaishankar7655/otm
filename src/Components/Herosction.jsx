import { Search , MapPin } from 'lucide-react'
import React from 'react'
import wedding from "../assets/images/heroimage.png"

function HeroSection() {
  return (
    <div className='relative w-full min-h-[600px] lg:h-[650px] flex items-center justify-center overflow-hidden'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center z-0'
        style={{
          backgroundImage: `url(${wedding})`,
          filter: 'brightness(50%) contrast(110%)'
        }}
      />

      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-[1]' />

      <div className='relative z-10 w-full px-4 py-10 max-w-7xl mx-auto'>
        <div className='text-center'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-4 leading-tight'>
            India's Largest <span className='text-red-600'>Wedding</span> Planning Platform
          </h1>

          <p className='text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4'>
            Discover and Hire Top-Rated Vendors: Photographers, Makeup Artists, 
            Mandap Decorators, Caterers, and More - All in One Place!
          </p>

          <div className='w-full max-w-4xl mx-auto bg-white/90 rounded-2xl p-6 md:p-6 shadow-2xl backdrop-blur-sm'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center'>
              <div className='w-full'>
                <div className='relative'>
                  <input
                    className='w-full p-2 pl-10 outline-none border-2 border-gray-200 rounded-lg focus:border-red-300 transition-all duration-300'
                    type="text"
                    placeholder='Search for vendor'
                  />
                  <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
                </div>
              </div>

              <div className='w-full'>
                <div className='relative'>
                  <input
                    className='w-full p-2 pl-10 outline-none border-2 border-gray-200 rounded-lg focus:border-red-300 transition-all duration-300'
                    type="text"
                    placeholder='Search for Location'
                  />
                  <MapPin className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
                </div>
              </div>

              <div className='w-full flex justify-center'>
                <button className='flex items-center bg-[#FF5C5C] hover:bg-[#FF4040] text-white px-6 py-3 rounded-lg gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg'>
                  <span>Find Vendor</span>
                  <Search className='w-5 h-5' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection