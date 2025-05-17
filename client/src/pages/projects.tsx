import { Helmet } from "react-helmet";
import { MotionSection } from "@/components/ui/motion-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import ProjectsGrid from "@/components/ProjectsGrid";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects | Charles Kudzanai Bere Portfolio</title>
        <meta name="description" content="Explore Charles Kudzanai Bere's portfolio of web development and design projects, showcasing expertise in React, Node.js, and UI/UX design." />
      </Helmet>

      <div className="pt-20">
        <MotionSection className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <Link href="/">
                <Button variant="ghost" size="sm" className="mb-6">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Button>
              </Link>
              
              <h1 className="text-4xl font-bold mb-6">My Projects</h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                A collection of my recent work, showcasing my skills in web development,
                UI/UX design, and problem-solving.
              </p>
              
              <div className="mb-12">
                <ProjectsGrid />
              </div>
              
              <div className="bg-muted/30 rounded-lg p-8 border">
                <h2 className="text-2xl font-semibold mb-4">Want to Work Together?</h2>
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities
                  to be part of your vision.
                </p>
                <Link href="/contact">
                  <Button size="lg">Get in Touch</Button>
                </Link>
              </div>
            </div>
          </div>
        </MotionSection>
      </div>
    </>
  );
}
