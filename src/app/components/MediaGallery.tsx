import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export function MediaGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const media = [
    {
      type: "image",
      url: "/images/gallery/im1.jpeg",
      caption: "Moments de vie étudiante"
    },
    {
      type: "image",
      url: "/images/gallery/im2.jpeg",
      caption: "Activités universitaires"
    },
    {
      type: "image",
      url: "/images/gallery/IM4.jpeg",
      caption: "Engagement communautaire"
    },
    {
      type: "image",
      url: "/images/gallery/im5.jpeg",
      caption: "Moments de convivialité"
    },
    {
      type: "image",
      url: "/images/gallery/im6.jpeg",
      caption: "Événements étudiants"
    },
    {
      type: "image",
      url: "/images/gallery/im7.jpeg",
      caption: "Souvenirs mémorables"
    },
    {
      type: "image",
      url: "/images/gallery/im8.jpeg",
      caption: "Moments partagés"
    },
    {
      type: "image",
      url: "/images/gallery/im9.jpeg",
      caption: "Moments partagés"
    },
    {
      type: "image",
      url: "/images/gallery/im10.jpeg",
      caption: "Moments partagés"
    },
    {
      type: "image",
      url: "/images/gallery/im11.jpeg",
      caption: "Moments partagés"
    },
    {
      type: "video",
      url: "/images/gallery/video1.mp4",
      thumbnail: "/images/gallery/im1.jpeg",
      caption: "Vidéo des activités"
    },
    {
      type: "video",
      url: "/images/gallery/video3.mp4",
      thumbnail: "/images/gallery/im2.jpeg",
      caption: "Vidéo des activités"
    },
    {
      type: "video",
      url: "/images/gallery/video2.mp4",
      thumbnail: "/images/gallery/im5.jpeg",
      caption: "Événements de l'amicale"
    }
  ];

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
      setSelectedIndex(selectedIndex === 0 ? media.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === media.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section className="animate-float-slow" style={{ margin: '24px 16px' }}>
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
          Galerie Médias
        </h2>
        <p style={{ fontSize: '14px', color: '#888888' }}>Souvenirs de nos moments forts</p>
      </div>
      <div className="media-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {media.map((item, index) => {
          const floatClasses = ['animate-float-slow', 'animate-float-medium', 'animate-float-fast'];
          return (
            <div
              key={index}
              className={floatClasses[index % 3]}
              onClick={() => openModal(index)}
              style={{
                position: 'relative',
                aspectRatio: '1',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                animationDelay: `${index * 150}ms`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(155, 138, 184, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {item.type === "video" ? (
                <>
                  <ImageWithFallback
                    src={item.thumbnail || item.url}
                    alt={item.caption}
                    className="w-full h-full object-cover"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <div
                      className="play-button"
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
                      }}
                    >
                      <Play style={{ width: '28px', height: '28px', color: '#d4899a', marginLeft: '4px' }} fill="#d4899a" />
                    </div>
                  </div>
                </>
              ) : (
                <ImageWithFallback
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
              )}
              {/* Caption overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '12px',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 500
                }}
              >
                {item.caption}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal pour afficher l'image/vidéo en grand */}
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
            {media[selectedIndex].type === "video" ? (
              <video
                src={media[selectedIndex].url}
                controls
                autoPlay
                style={{
                  maxWidth: '100%',
                  maxHeight: '80vh',
                  borderRadius: '12px'
                }}
              />
            ) : (
              <img
                src={media[selectedIndex].url}
                alt={media[selectedIndex].caption}
                style={{
                  maxWidth: '100%',
                  maxHeight: '80vh',
                  objectFit: 'contain',
                  borderRadius: '12px'
                }}
              />
            )}
            <p style={{
              color: 'white',
              marginTop: '16px',
              fontSize: '16px',
              fontWeight: 500,
              textAlign: 'center'
            }}>
              {media[selectedIndex].caption}
            </p>
            <p style={{
              color: 'rgba(255,255,255,0.6)',
              marginTop: '8px',
              fontSize: '14px'
            }}>
              {selectedIndex + 1} / {media.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
