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

export default function Home() {
  return (
    <main className='bg-background-100 text-text-100'>
      <Container>
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
        <Footer />
      </Container>
    </main>
  );
}
