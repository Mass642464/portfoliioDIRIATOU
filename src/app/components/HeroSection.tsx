import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <div
      className="relative overflow-hidden rounded-[32px] mb-6 animate-float-slow hero-section"
      style={{
        background: 'linear-gradient(135deg, #f1cee5ff 0%, #f1eae4ff 30%, #f8f4f0 60%, #ebe5e1ff 100%)',
        margin: '0 16px'
      }}
    >
      <div style={{ padding: '40px 48px' }} className="hero-content">
        <div className="flex flex-row items-center hero-layout" style={{ gap: '48px' }}>
          {/* Photo avec bordure blanche épaisse et ombre - animation flottante */}
          <div style={{ flexShrink: 0, marginLeft: '16px' }} className="hero-photo-container">
            <div
              className="interactive-image animate-float-slow hero-photo"
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1px solid white',
                cursor: 'pointer'
              }}
            >
              <ImageWithFallback
                src="/images/dariyatou.jpg"
                alt="Dariyatou Paye - Candidate"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contenu texte */}
          <div style={{ flex: 1, paddingRight: '24px' }} className="hero-text">
            {/* Badge élections - animation pulse */}
            <span
              className="animate-pulse-shadow"
              style={{
                display: 'inline-block',
                backgroundColor: '#f7e3d0ff',
                color: '#484645ff',
                padding: '8px 20px',
                borderRadius: '50px',
                fontSize: '14px',
                marginBottom: '16px'
              }}
            >
              Élections Amicale UFR SAT 2026
            </span>

            {/* Nom */}
            <h1
              className="hero-name"
              style={{
                fontSize: '48px',
                fontWeight: 400,
                color: '#000000',
                marginBottom: '12px',
                marginTop: '0',
                background: 'none',
                WebkitBackgroundClip: 'unset',
                WebkitTextFillColor: '#000000'
              }}
            >
              Diariatou Paye
            </h1>

            {/* Citation */}
            <p
              style={{
                fontSize: '20px',
                fontStyle: 'italic',
                color: '#666666',
                marginBottom: '20px',
                marginTop: '0'
              }}
            >
              "Ensemble, construisons une amicale plus forte et inclusive,
              IMPACT le souffle du changement"
            </p>

            {/* Badges info */}
            <div style={{ display: 'flex', gap: '16px' }} className="hero-badges">
              <span
                className="interactive-badge"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: '#e6dff2',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#5e545eff',
                  border: '1px solid #d5c8e8',
                  padding: '10px 20px',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(175, 156, 206, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                • Master 1 Ingénierie Electronique et Telecommunication
              </span>
              <span
                className="interactive-badge"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: '#fce4ec',
                  color: '#a0606e',
                  border: '1px solid #f5c6d6',
                  padding: '10px 20px',
                  borderRadius: '50px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(236, 182, 208, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                • Master Appliquées Developpement de Systèmes d'information
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
