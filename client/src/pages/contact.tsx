import { Helmet } from "react-helmet";
import { MotionSection } from "@/components/ui/motion-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, GitPullRequest, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Charles Kudzanai Bere Portfolio</title>
        <meta name="description" content="Get in touch with Charles Kudzanai Bere for project inquiries, collaboration opportunities, or to discuss your web development needs." />
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
              
              <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
              
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
                Feel free to reach out if you have any questions, would like to work together,
                or just want to connect. I'll get back to you as soon as possible.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <div className="bg-muted/10 p-8 rounded-lg border">
                    <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
                    <ContactForm />
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-muted/10 p-6 rounded-lg border">
                    <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-accent mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium mb-1">Location</h3>
                          <p className="text-muted-foreground">2 Newport Road, Mabelreign, Harare, Zimbabwe</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-accent mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium mb-1">Email</h3>
                          <a 
                            href="mailto:charles.bere@gmail.com" 
                            className="text-muted-foreground hover:text-accent transition-colors"
                          >
                            charles.bere@gmail.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-accent mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium mb-1">Phone</h3>
                          <a 
                            href="tel:+263772123456" 
                            className="text-muted-foreground hover:text-accent transition-colors"
                          >
                            +263 772 123 456
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/10 p-6 rounded-lg border">
                    <h2 className="text-xl font-semibold mb-4">Social Media</h2>
                    
                    <div className="space-y-4">
                      <a 
                        href="https://github.com/charlesbere" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-muted-foreground hover:text-accent transition-colors"
                      >
                        <GitPullRequest className="h-5 w-5 mr-3" />
                        <span>GitHub</span>
                      </a>
                      
                      <a 
                        href="https://linkedin.com/in/charleskbere" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Linkedin className="h-5 w-5 mr-3" />
                        <span>LinkedIn</span>
                      </a>
                      
                      <a 
                        href="https://twitter.com/CharlesKBere" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Twitter className="h-5 w-5 mr-3" />
                        <span>Twitter</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-muted/10 p-6 rounded-lg border">
                    <h2 className="text-xl font-semibold mb-4">Availability</h2>
                    <p className="text-muted-foreground">
                      I'm currently available for freelance work and open to discussing
                      new opportunities. My typical response time is within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-16">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121544.58447844527!2d31.022265899999998!3d-17.824993399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e706066265%3A0xa7f1310c4ebdbcb2!2sHarare%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1715943208756!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Harare, Zimbabwe Map"
                ></iframe>
              </div>
            </div>
          </div>
        </MotionSection>
      </div>
    </>
  );
}
