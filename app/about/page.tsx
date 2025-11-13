import KysoleAbout from '@/components/About/banner';
import KysoleAnatomyJourney from '@/components/About/journey';
import KysoleTestimonial from '@/components/About/testimonials';
import Footer from '@/components/sections/footer';

export default function About() {
  return (
    <div>
      <KysoleAbout />
      <KysoleTestimonial />
      <KysoleAnatomyJourney />
      <Footer />
    </div>
  );
}
