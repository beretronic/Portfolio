import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/utils/smoothScroll";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/", id: "home" },
    { name: "About", path: "/about", id: "about" },
    { name: "Skills", path: "/skills", id: "skills" },
    { name: "Projects", path: "/projects", id: "projects" },
    { name: "Contact", path: "/contact", id: "contact" },
  ];

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation with smooth scrolling on homepage
  const handleNavigation = (e: React.MouseEvent, id: string, path: string) => {
    if (location === "/") {
      e.preventDefault();
      scrollToElement(id);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-bold font-heading relative z-10">
              <span className="gradient-text">CKB.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <a
                  className={`text-sm font-medium hover:text-accent transition-colors ${
                    location === link.path ? "text-accent" : "text-foreground"
                  }`}
                  onClick={(e) => handleNavigation(e, link.id, link.path)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <Button variant="default" size="sm">
              Download CV
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-background border-b border-border py-4 md:hidden">
              <nav className="flex flex-col space-y-4 container-custom">
                {navLinks.map((link) => (
                  <Link key={link.path} href={link.path}>
                    <a
                      className={`text-sm font-medium hover:text-accent transition-colors ${
                        location === link.path ? "text-accent" : "text-foreground"
                      }`}
                      onClick={(e) => {
                        handleNavigation(e, link.id, link.path);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {link.name}
                    </a>
                  </Link>
                ))}
                <Button variant="default" size="sm" className="self-start">
                  Download CV
                </Button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
