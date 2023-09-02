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
import { useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  useLayoutEffect(() => {
    ScrollSmoother.create({
      smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
      smoothTouch: 0.1,
    });
  }, []);
  return (
    <main id='smooth-wrapper' className='bg-background-100 text-text-100'>
      <div id='smooth-content'>
        <Container>
          <Navigation />
          <Hero />
          <About />
          <Experience />
          <Work />
          <Contact />
          <Footer />
        </Container>
      </div>
    </main>
  );
}
