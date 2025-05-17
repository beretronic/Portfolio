import { useState, useEffect } from "react";
import { Project } from "@/types";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilter from "@/components/ProjectFilter";

export default function ProjectsGrid() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [currentFilter, setCurrentFilter] = useState("All");
  const [categories, setCategories] = useState<string[]>(["All"]);

  // Mock projects data
  useEffect(() => {
    const projectsData: Project[] = [
      {
        id: 1,
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing online store operations with real-time analytics.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
        category: "Web App",
        tags: ["React", "Node.js", "Chart.js"],
        url: "https://project1.com",
        github: "https://github.com/johndoe/project1"
      },
      {
        id: 2,
        title: "Travel Companion App",
        description: "Mobile application for travelers to discover destinations, plan itineraries, and share experiences.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        category: "Mobile App",
        tags: ["React Native", "Firebase", "Maps API"],
        url: "https://project2.com",
        github: "https://github.com/johndoe/project2"
      },
      {
        id: 3,
        title: "Recipe Finder",
        description: "Web application that helps users find recipes based on ingredients they have at home.",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4",
        category: "Web App",
        tags: ["JavaScript", "API Integration", "CSS Grid"],
        url: "https://project3.com",
        github: "https://github.com/johndoe/project3"
      },
      {
        id: 4,
        title: "Portfolio Website",
        description: "Professional portfolio website showcasing projects and skills with a modern design.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e",
        category: "Website",
        tags: ["React", "TailwindCSS", "Framer Motion"],
        url: "https://project4.com",
        github: "https://github.com/johndoe/project4"
      }
    ];
    
    setProjects(projectsData);
    setFilteredProjects(projectsData);
    
    // Extract unique categories
    const uniqueCategories = ["All", ...Array.from(new Set(projectsData.map(p => p.category)))];
    setCategories(uniqueCategories);
  }, []);
  
  // Handle filter change
  const handleFilterChange = (category: string) => {
    setCurrentFilter(category);
    
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <div className="space-y-10">
      <ProjectFilter 
        categories={categories} 
        onFilterChange={handleFilterChange} 
        currentFilter={currentFilter} 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
