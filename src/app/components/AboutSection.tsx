export function AboutSection() {
  return (
    <section style={{ margin: '24px 16px' }}>
      <div
        className="animate-float-slow about-card"
        style={{
          background: 'white',
          borderRadius: '24px',
          padding: '32px 40px',
          cursor: 'default'
        }}
      >
        <h2
          style={{
            fontSize: '32px',
            fontWeight: 600,
            marginTop: '0',
            marginBottom: '24px',
            color: '#000000',
            background: 'none',
            WebkitBackgroundClip: 'unset',
            WebkitTextFillColor: '#000000'
          }}
        >
          À propos de la candidate
        </h2>
        <div style={{ color: '#555555', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{ fontSize: '16px', lineHeight: 1.7, margin: 0 }}>
            Étudiante en Master Ingénierie Électronique et Télécommunications à l'Université Gaston Berger de Saint-Louis, je suis passionnée par les technologies de communication, l'innovation numérique et leur impact sur le développement des sociétés. Mon parcours académique m'a permis d'acquérir de solides bases dans ces domaines, tout en développant une approche analytique et orientée solutions.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.7, margin: 0 }}>
            Au-delà de l’aspect technique, je m’intéresse particulièrement au leadership, à la communication et à l’engagement communautaire. Convaincue que la technologie n’a de valeur que lorsqu’elle est mise au service de l’humain, je m’investis dans des initiatives qui visent à renforcer les compétences, l’autonomie et la confiance des jeunes.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.7, margin: 0 }}>
            Curieuse, rigoureuse et dotée d’un esprit d’initiative, je cherche constamment à apprendre, à partager mes connaissances et à relever de nouveaux défis. Mon objectif est de construire un profil d’ingénieure engagée, capable de conjuguer expertise technique, sens des responsabilités et impact positif.
          </p>
        </div>
      </div>
    </section>
  );
}
