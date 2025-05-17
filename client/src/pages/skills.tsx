import { Helmet } from "react-helmet";
import { MotionSection } from "@/components/ui/motion-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import SkillsList from "@/components/SkillsList";

export default function Skills() {
  return (
    <>
      <Helmet>
        <title>Skills | John Doe Portfolio</title>
        <meta name="description" content="Explore John Doe's technical skills and proficiencies in web development, UI/UX design, and related technologies." />
      </Helmet>

      <div className="pt-20">
        <MotionSection className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <Link href="/">
                <Button variant="ghost" size="sm" className="mb-6">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Button>
              </Link>
              
              <h1 className="text-4xl font-bold mb-6">My Skills</h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Here's a comprehensive overview of my technical skills and proficiencies
                that I've developed over my professional career.
              </p>
              
              <div className="mb-12">
                <SkillsList />
              </div>
              
              <div className="space-y-10">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Professional Certifications</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-muted/30 rounded-lg p-6 border">
                      <h3 className="text-lg font-medium mb-2">AWS Certified Developer</h3>
                      <p className="text-muted-foreground mb-1">Amazon Web Services</p>
                      <p className="text-sm text-muted-foreground">Issued: January 2022</p>
                    </div>
                    
                    <div className="bg-muted/30 rounded-lg p-6 border">
                      <h3 className="text-lg font-medium mb-2">Professional Frontend Developer</h3>
                      <p className="text-muted-foreground mb-1">Frontend Masters</p>
                      <p className="text-sm text-muted-foreground">Issued: March 2021</p>
                    </div>
                    
                    <div className="bg-muted/30 rounded-lg p-6 border">
                      <h3 className="text-lg font-medium mb-2">UI/UX Design Professional</h3>
                      <p className="text-muted-foreground mb-1">Interaction Design Foundation</p>
                      <p className="text-sm text-muted-foreground">Issued: September 2020</p>
                    </div>
                    
                    <div className="bg-muted/30 rounded-lg p-6 border">
                      <h3 className="text-lg font-medium mb-2">Certified Scrum Master</h3>
                      <p className="text-muted-foreground mb-1">Scrum Alliance</p>
                      <p className="text-sm text-muted-foreground">Issued: July 2019</p>
                    </div>
                  </div>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Soft Skills</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-muted/10 p-4 rounded-lg border">
                      <h3 className="font-medium">Communication</h3>
                    </div>
                    <div className="bg-muted/10 p-4 rounded-lg border">
                      <h3 className="font-medium">Problem Solving</h3>
                    </div>
                    <div className="bg-muted/10 p-4 rounded-lg border">
                      <h3 className="font-medium">Team Collaboration</h3>
                    </div>
                    <div className="bg-muted/10 p-4 rounded-lg border">
                      <h3 className="font-medium">Time Management</h3>
                    </div>
                    <div className="bg-muted/10 p-4 rounded-lg border">
                      <h3 className="font-medium">Adaptability</h3>
                    </div>
                    <div className="bg-muted/10 p-4 rounded-lg border">
                      <h3 className="font-medium">Critical Thinking</h3>
                    </div>
                    <div className="bg-muted/10 p-4 rounded-lg border">
                      <h3 className="font-medium">Creativity</h3>
                    </div>
                    <div className="bg-muted/10 p-4 rounded-lg border">
                      <h3 className="font-medium">Client Relations</h3>
                    </div>
                    <div className="bg-muted/10 p-4 rounded-lg border">
                      <h3 className="font-medium">Attention to Detail</h3>
                    </div>
                  </div>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Tools & Software</h2>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <div className="bg-muted/10 p-3 rounded-lg border text-center">
                      <h3 className="font-medium">VS Code</h3>
                    </div>
                    <div className="bg-muted/10 p-3 rounded-lg border text-center">
                      <h3 className="font-medium">Git</h3>
                    </div>
                    <div className="bg-muted/10 p-3 rounded-lg border text-center">
                      <h3 className="font-medium">Figma</h3>
                    </div>
                    <div className="bg-muted/10 p-3 rounded-lg border text-center">
                      <h3 className="font-medium">Adobe XD</h3>
                    </div>
                    <div className="bg-muted/10 p-3 rounded-lg border text-center">
                      <h3 className="font-medium">Photoshop</h3>
                    </div>
                    <div className="bg-muted/10 p-3 rounded-lg border text-center">
                      <h3 className="font-medium">Docker</h3>
                    </div>
                    <div className="bg-muted/10 p-3 rounded-lg border text-center">
                      <h3 className="font-medium">Jira</h3>
                    </div>
                    <div className="bg-muted/10 p-3 rounded-lg border text-center">
                      <h3 className="font-medium">Slack</h3>
                    </div>
                  </div>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Languages</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">English</span>
                      <span>Native</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">Spanish</span>
                      <span>Fluent</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">French</span>
                      <span>Intermediate</span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </MotionSection>
      </div>
    </>
  );
}
