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
import { LenisProvider } from './context/LenisContext';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main className='bg-background-100 text-text-100'>
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
    </main>
  );
}
