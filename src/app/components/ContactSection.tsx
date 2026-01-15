import { MessageCircle, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export function ContactSection() {
    const whatsappGroupLink = "https://chat.whatsapp.com/KECs2x28niiIoOB8Dqk8bd";

    return (
        <section id="contact" style={{ margin: '24px 16px' }}>
            <div
                className="animate-float-slow"
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
                        marginBottom: '8px',
                        background: 'none',
                        WebkitTextFillColor: '#000000'
                    }}
                >
                    Me Contacter
                </h2>
                <p style={{ fontSize: '14px', color: '#888888', marginBottom: '24px' }}>
                    Rejoignez-moi pour construire ensemble l'avenir de notre UFR
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    {/* WhatsApp Group - Principal */}
                    <a
                        href={whatsappGroupLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            padding: '24px',
                            backgroundColor: '#25D366',
                            borderRadius: '16px',
                            textDecoration: 'none',
                            color: 'white',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(37, 211, 102, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div
                            style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}
                        >
                            <MessageCircle style={{ width: '28px', height: '28px' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                <span style={{ fontSize: '18px', fontWeight: 600 }}>Groupe WhatsApp</span>
                                <ExternalLink style={{ width: '16px', height: '16px' }} />
                            </div>
                            <p style={{ fontSize: '14px', opacity: 0.9 }}>
                                Rejoignez le groupe de la liste IMPACT
                            </p>
                        </div>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:paye.diariatou1@ugb.edu.sn"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            padding: '24px',
                            backgroundColor: '#f3eef8',
                            borderRadius: '16px',
                            textDecoration: 'none',
                            color: '#333',
                            border: '1px solid #e8e0f0',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(155, 138, 184, 0.2)';
                            e.currentTarget.style.backgroundColor = '#ebe3f3';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.backgroundColor = '#f3eef8';
                        }}
                    >
                        <div
                            style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '50%',
                                backgroundColor: '#9b8ab8',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}
                        >
                            <Mail style={{ width: '28px', height: '28px', color: 'white' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <span style={{ fontSize: '16px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Email</span>
                            <p style={{ fontSize: '14px', color: '#666' }}>
                                paye.diariatou1@ugb.edu.sn
                            </p>
                        </div>
                    </a>

                    {/* Téléphone */}
                    <a
                        href="tel:+221771284467"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            padding: '24px',
                            backgroundColor: '#fce8ec',
                            borderRadius: '16px',
                            textDecoration: 'none',
                            color: '#333',
                            border: '1px solid #f5d5dc',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(212, 137, 154, 0.2)';
                            e.currentTarget.style.backgroundColor = '#f9dce2';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.backgroundColor = '#fce8ec';
                        }}
                    >
                        <div
                            style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '50%',
                                backgroundColor: '#d4899a',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}
                        >
                            <Phone style={{ width: '28px', height: '28px', color: 'white' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <span style={{ fontSize: '16px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Téléphone</span>
                            <p style={{ fontSize: '14px', color: '#666' }}>
                                +221 77 128 44 67
                            </p>
                        </div>
                    </a>

                    {/* Localisation */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            padding: '24px',
                            backgroundColor: '#fef3e0',
                            borderRadius: '16px',
                            border: '1px solid #f5e6c8'
                        }}
                    >
                        <div
                            style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '50%',
                                backgroundColor: '#d4a84a',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}
                        >
                            <MapPin style={{ width: '28px', height: '28px', color: 'white' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <span style={{ fontSize: '16px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Localisation</span>
                            <p style={{ fontSize: '14px', color: '#666' }}>
                                UFR SAT, UGB Saint-Louis
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action WhatsApp */}
                <div style={{ marginTop: '32px', textAlign: 'center' }}>
                    <a
                        href={whatsappGroupLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '16px 32px',
                            backgroundColor: '#25D366',
                            color: 'white',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontSize: '16px',
                            fontWeight: 600,
                            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(37, 211, 102, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
                        }}
                    >
                        <MessageCircle style={{ width: '24px', height: '24px' }} />
                        <span>Rejoindre le groupe de campagne</span>
                    </a>
                    <p style={{ marginTop: '12px', fontSize: '14px', color: '#888' }}>
                        Restez informés des dernières actualités de la campagne
                    </p>
                </div>
            </div>
        </section>
    );
}
