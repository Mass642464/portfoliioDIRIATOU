import { GraduationCap, BookOpen, Award } from "lucide-react";

export function AcademicSection() {
  const education = [
    {
      icon: Award,
      year: "2025-2026",
      title: "Master 1 Ingénierie Electronique et Telecommunication",
      institution: "Université Gaston Berger de Saint Louis ",
      description: "Section physique Appliquée"
    },
    {
      icon: BookOpen,
      year: "2024-2025",
      title: "Master 1 Appliquées Developpement de Systèmes d'information ",
      institution: "Université Gaston Berger de Saint Louis",
      description: "Section Genie Informatique "
    },
    {
      icon: GraduationCap,
      year: "2022-2024",
      title: "Licence Reseaux et Télécomunications",
      institution: "Université Gaston Berger de Saint Louis ",
      description: "Parcours renforcé • Mention Bien"
    }
  ];

  return (
    <section style={{ margin: '24px 16px' }}>
      <div
        className="animate-float-medium academic-card"
        style={{
          background: 'white',
          borderRadius: '24px',
          padding: '32px'
        }}
      >
        <h2
          style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#000000',
            marginBottom: '24px',
            background: 'none',
            WebkitTextFillColor: '#000000'
          }}
        >
          Formation académique
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {education.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="education-item"
                style={{
                  background: '#fafafa',
                  borderRadius: '16px',
                  padding: '20px 24px',
                  border: '1px solid #f0f0f0',
                  transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(8px)';
                  e.currentTarget.style.backgroundColor = '#f5f0fa';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(155, 138, 184, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.backgroundColor = '#fafafa';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: '#f3eef8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Icon style={{ width: '24px', height: '24px', color: '#9b8ab8' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="education-title-row" style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '16px', fontWeight: 600, color: '#000000' }}>{item.title}</span>
                      <span style={{ fontSize: '14px', color: '#888888' }}>• {item.year}</span>
                    </div>
                    <p style={{ fontSize: '14px', color: '#9b8ab8', marginBottom: '4px' }}>{item.institution}</p>
                    <p style={{ fontSize: '14px', color: '#666666' }}>{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
