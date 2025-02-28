
import Footer from '@/components/layout/Footer'
import Hero from '@/pages/Business/components/Hero'
import Features from '@/pages/Business/components/Features'
import Navbar from '@/components/layout/Navbar'

export default function BusinessPage() {
    return (
        <div className='flex flex-col w-full max-w-[390px] md:max-w-[1120px] '> <Navbar />

            <div className='flex flex-col w-full max-w-[390px] md:max-w-[1120px] px-2 max-md:px-4 bg-white'>

                <Hero />
                <Features />
                
            </div><Footer />
        </div>
    )
}
