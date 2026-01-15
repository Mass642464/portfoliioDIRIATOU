import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Users, Presentation, Lightbulb, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export function EngagementSection() {
  const activities = [
    {
      icon: Lightbulb,
      title: "Diplomat of SENEGAL: Usa simulation Ambassador",
      description: "African Diplomatic League Dakar 2025",
      image: "/images/engagement/img17.jpeg",
      date: "2025",
      bgColor: "#f3eef8",
      iconColor: "#9b8ab8"
    },
    {
      icon: Users,
      title: "Pitch de xelkiom-AI",
      description: "Finaliste du projet Llama Impact Project",
      image: "/images/engagement/im6.jpeg",
      date: "2025",
      bgColor: "#fce8ec",
      iconColor: "#d4899a"
    },
    {

      icon: Presentation,
      title: "Premier prix du concours plaidoirie",
      description: "Concours de plaidoirie inter-ufr organisé par l'OFNAC",
      image: "/images/engagement/im2.jpeg",
      date: " 2023",
      bgColor: "#f3eef8",
      iconColor: "#9b8ab8"
    },
    {
      icon: Users,
      title: "Activités Étudiants",
      description: "Participation active aux événements",
      image: "/images/engagement/im7.jpeg",
      date: "2025",
      bgColor: "#f3eef8",
      iconColor: "#9b8ab8"
    },
    {
      icon: Presentation,
      title: "Paneliste du Forum Universitaire sur : Jeunesses et Nouveaux défis digitals, transition énergétique et opportunités du Secteur Extractif",
      description: "Forum Universitaire organisé par Women in Mining SENEGAL ",
      image: "/images/engagement/im1.jpeg",
      date: "2024-2025",
      bgColor: "#fce8ec",
      iconColor: "#d4899a"
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? activities.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === activities.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section className="animate-float-medium" style={{ margin: '24px 16px' }}>
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
          Engagement & Activités
        </h2>
        <p style={{ fontSize: '14px', color: '#888888' }}>Mon implication concrète dans la vie de l'UFR</p>
      </div>
      <div className="engagement-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          const floatClass = index % 2 === 0 ? 'animate-float-slow' : 'animate-float-medium';
          return (
            <div
              key={index}
              className={floatClass}
              style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid #f5f5f5',
                cursor: 'pointer',
                animationDelay: `${index * 300}ms`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(155, 138, 184, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Image avec badge date */}
              <div
                onClick={() => openModal(index)}
                style={{ position: 'relative', height: '200px', overflow: 'hidden' }}
              >
                <ImageWithFallback
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    padding: '6px 14px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '20px',
                    fontSize: '12px',
                    color: '#333333',
                    fontWeight: 500
                  }}
                >
                  {activity.date}
                </div>
              </div>
              {/* Contenu en bas */}
              <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: activity.bgColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Icon style={{ width: '22px', height: '22px', color: activity.iconColor }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#000000', marginBottom: '4px' }}>{activity.title}</h3>
                    <p style={{ fontSize: '14px', color: '#666666' }}>{activity.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal pour afficher l'image en grand */}
      {selectedIndex !== null && (
        <div
          onClick={closeModal}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          {/* Bouton fermer */}
          <button
            onClick={closeModal}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
          >
            <X style={{ width: '28px', height: '28px', color: 'white' }} />
          </button>

          {/* Bouton précédent */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
          >
            <ChevronLeft style={{ width: '32px', height: '32px', color: 'white' }} />
          </button>

          {/* Bouton suivant */}
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
          >
            <ChevronRight style={{ width: '32px', height: '32px', color: 'white' }} />
          </button>

          {/* Contenu du modal */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '85vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <img
              src={activities[selectedIndex].image}
              alt={activities[selectedIndex].title}
              style={{
                maxWidth: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: '12px'
              }}
            />
            <div style={{ textAlign: 'center', marginTop: '16px' }}>
              <h3 style={{
                color: 'white',
                fontSize: '18px',
                fontWeight: 600,
                marginBottom: '8px'
              }}>
                {activities[selectedIndex].title}
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: '14px',
                marginBottom: '8px'
              }}>
                {activities[selectedIndex].description}
              </p>
              <span style={{
                display: 'inline-block',
                padding: '4px 12px',
                backgroundColor: 'rgba(155, 138, 184, 0.3)',
                borderRadius: '20px',
                color: 'white',
                fontSize: '12px'
              }}>
                {activities[selectedIndex].date}
              </span>
              <p style={{
                color: 'rgba(255,255,255,0.6)',
                marginTop: '12px',
                fontSize: '14px'
              }}>
                {selectedIndex + 1} / {activities.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
