import { Sparkles, Users, Target, Heart, Lightbulb, BookOpen } from "lucide-react";

export function QualitiesSection() {
  const qualities = [
    {
      icon: Sparkles,
      title: "Leadership",
      description: "Capacité à inspirer, mobiliser et guider mes pairs vers des objectifs communs",
      bgColor: "#f3eef8",
      iconColor: "#9b8ab8"
    },
    {
      icon: Lightbulb,
      title: "Curiosité",
      description: "Soif d'apprendre et d'explorer les nouvelles technologies et innovations",
      bgColor: "#fce8ec",
      iconColor: "#d4899a"
    },
    {
      icon: Target,
      title: "Rigueur",
      description: "Approche méthodique et analytique héritée de ma formation en ingénierie",
      bgColor: "#fef3e0",
      iconColor: "#d4a84a"
    },
    {
      icon: Heart,
      title: "Engagement",
      description: "Dévouement sincère pour le service aux autres et l'impact positif",
      bgColor: "#fce8ec",
      iconColor: "#d4899a"
    },
    {
      icon: BookOpen,
      title: "Esprit d'initiative",
      description: "Proactivité dans l'apprentissage et le partage des connaissances",
      bgColor: "#f3eef8",
      iconColor: "#9b8ab8"
    },
    {
      icon: Users,
      title: "Esprit d'équipe",
      description: "Valorisation de la collaboration, du tutorat et de l'entraide étudiante",
      bgColor: "#fef3e0",
      iconColor: "#d4a84a"
    }
  ];

  return (
    <section className="animate-float-fast" style={{ margin: '24px 16px' }}>
      <div style={{ marginBottom: '24px' }}>
        <h2
          style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#000000',
            marginBottom: '8px',
            background: 'none',
            WebkitTextFillColor: '#000000'
          }}
        >
          Qualités & Valeurs
        </h2>
        <p style={{ fontSize: '14px', color: '#888888' }}>Les atouts que j'apporte à votre service</p>
      </div>
      <div className="qualities-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        {qualities.map((quality, index) => {
          const Icon = quality.icon;
          const floatClass = index % 2 === 0 ? 'animate-float-medium' : 'animate-float-fast';
          return (
            <div
              key={index}
              className={floatClass}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid #f5f5f5',
                cursor: 'pointer',
                animationDelay: `${index * 200}ms`
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    backgroundColor: quality.bgColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Icon style={{ width: '28px', height: '28px', color: quality.iconColor }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#000000', marginBottom: '8px' }}>{quality.title}</h3>
                  <p style={{ fontSize: '14px', color: '#666666', lineHeight: 1.5 }}>{quality.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
