import { Briefcase, Star, Users, Award } from "lucide-react";

export function PositionsSection() {
    const positions = [
        {
            icon: Star,
            role: "Vice Présidente du Club de Culture Générale",
            organization: "Club de Culture Générale UGB",
            period: "2026 - Présent",
            description: "Organisation d'activités culturelles et éducatives",
            bgColor: "#f3eef8",
            iconColor: "#9b8ab8"
        },
        {
            icon: Users,
            role: "Vice Présidente des Ambassadeurs de la Paix",
            organization: "Ambassadeurs de la Paix de l'UGB",
            period: "2025 - Présent",
            description: "Membre fondateur ambasadeurs de la paix  de l'UGB, promotion de la culture de la paix et de la non-violence au sein de l'université",
            bgColor: "#fce8ec",
            iconColor: "#d4899a"
        },
        {
            icon: Briefcase,
            role: "Adjointe pôle organisation de l'Association des Jeunes Diplomatiques Africains",
            organization: " Jeunes Diplomatiques Africains",
            period: "2025 - Présent",
            description: "Activités de diplomatie et de relations internationales",
            bgColor: "#f3eef8",
            iconColor: "#9b8ab8"
        },
        {
            icon: Award,
            role: "Chargée de la Gestion des Produits de XELKOOM-AI",
            organization: "XELKOOM-AI",
            period: "2025 - Présent",
            description: "Finaliste du projet LlAMA-IMPACT Organisé par le groupe META",
            bgColor: "#fce8ec",
            iconColor: "#d4899a"
        }
    ];

    return (
        <section style={{ margin: '24px 16px' }}>
            <div
                className="animate-float-slow positions-card"
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
                    Postes & Responsabilités
                </h2>
                <p style={{ fontSize: '14px', color: '#888888', marginBottom: '24px' }}>
                    Les fonctions que j'ai occupées au cours de mon parcours
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {positions.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="position-item"
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
                                            backgroundColor: item.bgColor,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}
                                    >
                                        <Icon style={{ width: '24px', height: '24px', color: item.iconColor }} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                                            <span style={{ fontSize: '16px', fontWeight: 600, color: '#000000' }}>{item.role}</span>
                                            <span
                                                style={{
                                                    fontSize: '12px',
                                                    color: '#9b8ab8',
                                                    backgroundColor: '#f3eef8',
                                                    padding: '4px 12px',
                                                    borderRadius: '20px',
                                                    fontWeight: 500
                                                }}
                                            >
                                                {item.period}
                                            </span>
                                        </div>
                                        <p style={{ fontSize: '14px', color: '#9b8ab8', marginBottom: '6px', fontWeight: 500 }}>{item.organization}</p>
                                        <p style={{ fontSize: '14px', color: '#666666', lineHeight: 1.5 }}>{item.description}</p>
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
