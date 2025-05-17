import { Helmet } from "react-helmet";
import { MotionSection } from "@/components/ui/motion-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Download } from "lucide-react";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Me | Charles Kudzanai Bere Portfolio</title>
        <meta name="description" content="Learn more about Charles Kudzanai Bere's professional background, experience, and personal journey in web development and design." />
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
              
              <h1 className="text-4xl font-bold mb-6">About Me</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="md:col-span-1">
                  <div className="aspect-square overflow-hidden rounded-lg border">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                      alt="John Doe"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-semibold mb-4">Charles Kudzanai Bere</h2>
                  <p className="text-xl text-muted-foreground mb-4">Frontend Developer & UI Designer</p>
                  
                  <p className="mb-4">
                    I'm a passionate web developer with 5+ years of experience building
                    modern, responsive, and user-friendly websites and applications.
                  </p>
                  
                  <p className="mb-6">
                    My journey in web development began during my computer science studies,
                    where I discovered my passion for creating digital experiences that are
                    both functional and aesthetically pleasing.
                  </p>
                  
                  <Button className="flex items-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Download CV</span>
                  </Button>
                </div>
              </div>
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
                  
                  <div className="space-y-6">
                    <div className="border-l-2 border-accent pl-4">
                      <h3 className="text-lg font-medium">Senior Frontend Developer</h3>
                      <p className="text-accent mb-1">TechCorp Inc. (2020 - Present)</p>
                      <p className="text-muted-foreground">
                        Led the development of responsive web applications using React and
                        Next.js. Collaborated with designers to implement pixel-perfect UI
                        components and improved application performance.
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-accent pl-4">
                      <h3 className="text-lg font-medium">UI Developer</h3>
                      <p className="text-accent mb-1">WebSolutions (2018 - 2020)</p>
                      <p className="text-muted-foreground">
                        Developed interactive UI components for client websites using
                        JavaScript and CSS frameworks. Worked closely with UX designers
                        to create cohesive user experiences.
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-accent pl-4">
                      <h3 className="text-lg font-medium">Web Designer</h3>
                      <p className="text-accent mb-1">DigitalCreative Agency (2016 - 2018)</p>
                      <p className="text-muted-foreground">
                        Created visual designs for websites and digital products.
                        Implemented designs using HTML, CSS, and basic JavaScript.
                      </p>
                    </div>
                  </div>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Education</h2>
                  
                  <div className="space-y-6">
                    <div className="border-l-2 border-accent pl-4">
                      <h3 className="text-lg font-medium">MSc in Computer Science</h3>
                      <p className="text-accent mb-1">NYU (2014 - 2016)</p>
                      <p className="text-muted-foreground">
                        Specialized in Human-Computer Interaction and Web Technologies.
                        Thesis on Responsive UI Frameworks.
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-accent pl-4">
                      <h3 className="text-lg font-medium">BSc in Software Engineering</h3>
                      <p className="text-accent mb-1">Boston University (2010 - 2014)</p>
                      <p className="text-muted-foreground">
                        Core courses in programming, algorithms, data structures, and
                        software development methodologies.
                      </p>
                    </div>
                  </div>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Personal Interests</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    Outside of my professional work, I enjoy:
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                    <li>Hiking and outdoor photography</li>
                    <li>Reading science fiction and technical books</li>
                    <li>Contributing to open-source projects</li>
                    <li>Learning new programming languages and frameworks</li>
                    <li>Attending tech meetups and conferences</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </MotionSection>
      </div>
    </>
  );
}
