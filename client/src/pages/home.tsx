import { Helmet } from "react-helmet";
import Hero from "@/components/Hero";
import { MotionSection } from "@/components/ui/motion-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import SkillsList from "@/components/SkillsList";
import ProjectsGrid from "@/components/ProjectsGrid";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Charles Kudzanai Bere | Professional Portfolio</title>
        <meta name="description" content="Professional portfolio showcasing my skills, projects, and experience in web development and software engineering." />
      </Helmet>

      <Hero />

      {/* About Section */}
      <MotionSection id="about" className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg mb-6">
              I'm a passionate web developer and UI designer with 5+ years of experience creating 
              user-friendly and visually appealing digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="text-lg">
                With a background in computer science and a passion for design, I bring a unique blend 
                of technical expertise and creative problem-solving to every project.
              </p>
              <p>
                I specialize in building responsive, accessible web applications with modern frameworks
                like React, Next.js, and Vue.js. My approach centers around creating seamless user
                experiences while maintaining clean, maintainable code.
              </p>
              <p>
                When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting
                with new design tools and techniques.
              </p>
              
              <div className="pt-4">
                <Link href="/about">
                  <Button className="flex items-center space-x-2">
                    <span>Learn More About Me</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-accent/10 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-accent/10 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="bg-accent/10 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="bg-accent/10 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Skills Section */}
      <MotionSection id="skills" className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Skills</h2>
            <p className="text-muted-foreground text-lg">
              I've worked with a variety of technologies and tools to create exceptional digital experiences.
            </p>
          </div>
          
          <SkillsList />
          
          <div className="text-center mt-10">
            <Link href="/skills">
              <Button variant="outline" className="flex items-center space-x-2 mx-auto">
                <span>View All Skills</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </MotionSection>

      {/* Projects Section */}
      <MotionSection id="projects" className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg">
              Here are some of my recent projects that showcase my skills and expertise.
            </p>
          </div>
          
          <ProjectsGrid />
          
          <div className="text-center mt-10">
            <Link href="/projects">
              <Button variant="outline" className="flex items-center space-x-2 mx-auto">
                <span>View All Projects</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </MotionSection>

      {/* Contact Section */}
      <MotionSection id="contact" className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground text-lg">
              Have a project in mind or want to know more? Feel free to reach out.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="lg:pr-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-6">
                Fill out the form or get in touch directly using the contact information below.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 text-accent mt-1">📍</div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">New York, NY 10012, US</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 text-accent mt-1">📧</div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">
                      <a href="mailto:contact@johndoe.com" className="hover:text-accent transition-colors">
                        contact@johndoe.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 text-accent mt-1">📱</div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground">
                      <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                        +1 (234) 567-890
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-6">
              <div className="bg-background p-6 rounded-lg shadow-sm border">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </MotionSection>
    </>
  );
}
