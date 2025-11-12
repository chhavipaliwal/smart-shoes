import Features from '@/components/Home/feature';
import KysoleDashboard from '@/components/Home/benfit';
import Hero from '@/components/Home/hero';
import Order from '@/components/Home/order';
import KysoleFooter from '@/components/Home/footer';

export default function Display() {
  return (
    <>
      <Hero />
      <Features />
      <Order />
      <KysoleDashboard />
      <KysoleFooter />
    </>
  );
}
