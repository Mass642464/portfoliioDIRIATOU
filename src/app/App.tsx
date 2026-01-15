import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { AcademicSection } from "./components/AcademicSection";
import { PositionsSection } from "./components/PositionsSection";
import { QualitiesSection } from "./components/QualitiesSection";
import { EngagementSection } from "./components/EngagementSection";
import { MediaGallery } from "./components/MediaGallery";
import { CTASection } from "./components/CTASection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div id="hero"><HeroSection /></div>
        <div id="about"><AboutSection /></div>
        <div id="academic"><AcademicSection /></div>
        <div id="positions"><PositionsSection /></div>
        <div id="qualities"><QualitiesSection /></div>
        <div id="engagement"><EngagementSection /></div>
        <div id="gallery"><MediaGallery /></div>
        <CTASection />
        <ContactSection />

        {/* Footer */}
        <footer style={{ marginTop: '32px', textAlign: 'center', padding: '24px 16px' }}>
          <p style={{ fontSize: '14px', color: '#888888', marginBottom: '8px' }}>
            Dariyatou Paye • Candidate aux élections de l'Amicale UFR SAT 2026
          </p>
          <p style={{ fontSize: '14px', color: '#888888' }}>
            Ensemble, construisons l'avenir de notre UFR SAT ✨
          </p>
        </footer>
      </div>
    </div>
  );
}
