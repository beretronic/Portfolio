import { Link } from "wouter";
import { scrollToElement } from "@/utils/smoothScroll";
import { GitPullRequest, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const handleNavigation = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToElement(id);
  };
  
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold font-heading">
                <span className="gradient-text">CKB.</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Creating elegant digital experiences with attention to detail, accessibility, 
              and performance.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
                aria-label="GitPullRequest"
              >
                <GitPullRequest className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@johndoe.com"
                className="text-foreground hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => handleNavigation(e, "home")}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleNavigation(e, "about")}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  onClick={(e) => handleNavigation(e, "skills")}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => handleNavigation(e, "projects")}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavigation(e, "contact")}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Contact Info</h3>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>New York, NY 10012</p>
              <p>United States</p>
              <p className="hover:text-accent transition-colors">
                <a href="mailto:contact@johndoe.com">contact@johndoe.com</a>
              </p>
              <p className="hover:text-accent transition-colors">
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 text-center text-muted-foreground text-sm">
          <p>© {currentYear} Charles Kudzanai Bere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
