import Image from 'next/image'
import HeroSection from '@/components/heroSection'
import Events from '@/components/events'
import TeamMembers from '@/components/teamMembers'
import GallerySlider from '@/components/galleySlider'
import Map from '@/components/map'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="m-0 flex flex-col gap-24 bg-[#FFD700]">
      <HeroSection />
      <Events />
      <TeamMembers />
      <GallerySlider />
      <div className='h-[50vh]'>filler</div>
      <Map />
      <Footer />
    </main>
  )
}
