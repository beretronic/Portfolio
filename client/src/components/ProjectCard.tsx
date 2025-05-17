import { Project } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/ui/motion-section";
import { ExternalLink, GitPullRequest } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <MotionSection delay={index} direction={index % 2 === 0 ? "up" : "down"}>
      <Card className="h-full overflow-hidden border project-card-hover">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        <CardContent className="p-6">
          <div className="mb-2 flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant="accent" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground">{project.description}</p>
        </CardContent>
        
        <CardFooter className="p-6 pt-0 flex justify-between">
          {project.url && (
            <Button 
              variant="outline" 
              size="sm"
              asChild
              className="flex items-center gap-2"
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                View Project
              </a>
            </Button>
          )}
          
          {project.github && (
            <Button 
              variant="outline" 
              size="sm"
              asChild
              className="flex items-center gap-2"
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <GitPullRequest className="h-4 w-4" />
                Source Code
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </MotionSection>
  );
}
