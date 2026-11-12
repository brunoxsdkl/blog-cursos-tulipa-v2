import { HeroSection } from '@/components/HeroSection'
import { CountdownBanner } from '@/components/CountdownBanner'
import { CourseGrid } from '@/components/CourseGrid'
import { CategoryShowcase } from '@/components/CategoryShowcase'
import { TestimonialSection } from '@/components/TestimonialSection'
import { CTASection } from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CountdownBanner />
      <CategoryShowcase />
      <CourseGrid />
      <TestimonialSection />
      <CTASection />
    </>
  )
}

