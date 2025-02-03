import React from 'react'
import Footer from '@/components/layout/Footer'
import Hero from '@/pages/Business/components/Hero'
import Features from '@/pages/Business/components/Features'

export default function BusinessPage() {
    return (
        <div className='flex flex-col w-full max-w-[390px] md:max-w-[1120px] '>
            <div className='flex flex-col w-full max-w-[390px] md:max-w-[1120px] px-4 max-md:px-8 bg-white'>

                <Hero />
                <Features />
                
            </div><Footer />
        </div>
    )
}
