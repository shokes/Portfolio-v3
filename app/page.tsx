'use client';
import {
  Container,
  Navigation,
  Hero,
  About,
  Experience,
  Work,
  Contact,
  Footer,
} from '@/components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';
import { LenisProvider } from './context/LenisContext';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  return (
    <main className='bg-background-100 text-text-100'>
      <div>
        <LenisProvider>
          <Container>
            <Navigation />
            <Hero />
            <About />
            <Experience />
            <Work />
            <Contact />
            <Footer />
          </Container>
        </LenisProvider>
      </div>
    </main>
  );
}
