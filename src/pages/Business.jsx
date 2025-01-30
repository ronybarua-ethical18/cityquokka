import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/pages/Business/Hero'
import Features from '@/pages/Business/Features'

export default function Business() {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <div className='flex flex-col self-center w-full max-w-[1120px] max-md:max-w-full bg-white flex-grow'>
        
        <Hero />
        <Features />
        <Footer />
      </div>
    </div>
  )
}