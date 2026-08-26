// src/app/page.tsx

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutPreview from '@/components/AboutPreview';
import ProjectsPreview from '@/components/ProjectsPreview';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        <Hero />

        {/* ABOUT MEとPROJECTSをまたぐ1枚の背景画像。2つのセクションはbg-paperを外して背景を透過させている */}
        <div
          className="relative bg-no-repeat"
          style={{
            backgroundImage: "url('/background2.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <AboutPreview />
          <ProjectsPreview />
        </div>

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
