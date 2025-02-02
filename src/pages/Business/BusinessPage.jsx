import React from 'react'
import Footer from '@/components/layout/Footer'
import Hero from '@/pages/Business/components/Hero'
import Features from '@/pages/Business/components/Features'

export default function BusinessPage() {
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