import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: "Accueil", href: "#hero" },
        { label: "À propos", href: "#about" },
        { label: "Formation", href: "#academic" },
        { label: "Postes", href: "#positions" },
        { label: "Qualités", href: "#qualities" },
        { label: "Engagement", href: "#engagement" },
        { label: "Galerie", href: "#gallery" },
        { label: "Contact", href: "#contact" }
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    padding: '12px 24px',
                    transition: 'all 0.3s ease',
                    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                    boxShadow: isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none'
                }}
            >
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* Logo / Nom */}
                    <a
                        href="#hero"
                        onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}
                        style={{
                            fontSize: '20px',
                            fontWeight: 600,
                            color: isScrolled ? '#9b8ab8' : '#000',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease'
                        }}
                    >
                        Diariatou Paye
                    </a>

                    {/* Desktop Navigation */}
                    <div className="nav-links-desktop" style={{ display: 'flex', gap: '8px' }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                                style={{
                                    padding: '8px 16px',
                                    fontSize: '14px',
                                    color: isScrolled ? '#666' : '#333',
                                    textDecoration: 'none',
                                    borderRadius: '20px',
                                    transition: 'all 0.3s ease',
                                    backgroundColor: 'transparent'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#f3eef8';
                                    e.currentTarget.style.color = '#9b8ab8';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = isScrolled ? '#666' : '#333';
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="nav-mobile-button"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{
                            display: 'none',
                            padding: '8px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            color: isScrolled ? '#9b8ab8' : '#333'
                        }}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div
                        className="nav-mobile-menu"
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            backgroundColor: 'rgba(255, 255, 255, 0.98)',
                            backdropFilter: 'blur(10px)',
                            padding: '16px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px'
                        }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                                style={{
                                    padding: '12px 16px',
                                    fontSize: '16px',
                                    color: '#333',
                                    textDecoration: 'none',
                                    borderRadius: '12px',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#f3eef8';
                                    e.currentTarget.style.color = '#9b8ab8';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = '#333';
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </nav>

            {/* Spacer pour compenser la navbar fixe */}
            <div style={{ height: '60px' }} />

            <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop {
            display: none !important;
          }
          .nav-mobile-button {
            display: block !important;
          }
        }
      `}</style>
        </>
    );
}
