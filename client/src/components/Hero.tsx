import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle, GitPullRequest, Linkedin, Twitter } from "lucide-react";
import { scrollToElement } from "@/utils/smoothScroll";

export default function Hero() {
  const scrollToProjects = () => {
    scrollToElement("projects");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center hero-gradient pt-20"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl font-medium text-accent">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Charles Kudzanai Bere
              </h1>
              <h3 className="text-2xl md:text-3xl font-medium text-muted-foreground mt-2">
                Frontend Developer & UI Designer
              </h3>
            </div>

            <p className="text-muted-foreground text-lg max-w-lg">
              I build accessible, user-friendly websites and applications with modern
              technologies. Focused on creating elegant solutions to complex problems.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="flex items-center space-x-2"
              >
                <span>View Projects</span>
                <ArrowDownCircle className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Me
              </Button>
            </div>

            <div className="flex items-center space-x-4 pt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
              >
                <GitPullRequest className="h-6 w-6" />
                <span className="sr-only">GitPullRequest</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-first lg:order-last flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent/20">
              <img
                src="/images/profile.png"
                alt="Charles Kudzanai Bere"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToElement("about")}
            className="rounded-full"
          >
            <ArrowDownCircle className="h-6 w-6" />
            <span className="sr-only">Scroll Down</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
