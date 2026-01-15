import { Vote, Heart, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section style={{ margin: '40px 16px 24px 16px' }}>
      <div
        className="animate-float-slow cta-card"
        style={{
          background: 'linear-gradient(135deg, #d8b4e2 0%, #e8c4d4 25%, #f0c8c8 50%, #f5d4b8 75%, #e8d4a0 100%)',
          borderRadius: '24px',
          padding: '48px 32px',
          textAlign: 'center'
        }}
      >
        {/* Heart icon avec animation */}
        <div className="animate-gentle-bounce" style={{ marginBottom: '24px' }}>
          <Heart style={{ width: '32px', height: '32px', color: 'white' }} fill="white" />
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: '32px',
            fontWeight: 700,
            color: 'white',
            marginBottom: '16px',
            background: 'none',
            WebkitTextFillColor: 'white'
          }}
        >

        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '16px',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '32px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6
          }}
        >

        </p>

        {/* Buttons */}
        <div className="cta-buttons" style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '40px' }}>

        </div>

        {/* Stats */}
        <div className="cta-stats" style={{ display: 'flex', justifyContent: 'center', gap: '60px' }}>
          <div
            style={{ textAlign: 'center', cursor: 'pointer', transition: 'transform 0.3s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <div style={{ fontSize: '36px', fontWeight: 700, color: 'white' }}>+100</div>
            <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.85)' }}>Événements</div>
          </div>
          <div
            style={{ textAlign: 'center', cursor: 'pointer', transition: 'transform 0.3s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <div style={{ fontSize: '36px', fontWeight: 700, color: 'white' }}>+15</div>
            <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.85)' }}>Événements organisés</div>
          </div>
          <div
            style={{ textAlign: 'center', cursor: 'pointer', transition: 'transform 0.3s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <div style={{ fontSize: '36px', fontWeight: 700, color: 'white' }}>3</div>
            <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.85)' }}>Années d'engagement</div>
          </div>
        </div>
      </div>
    </section>
  );
}
