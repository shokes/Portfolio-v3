import Image from 'next/image';
import { Container, Navigation, Hero } from '@/components';

export default function Home() {
  return (
    <main className='bg-background-100 text-text-100'>
      <Container>
        <Navigation />
        <Hero />
      </Container>
    </main>
  );
}
