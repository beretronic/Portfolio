import { useState, useEffect } from "react";
import { Skill as SkillType } from "@/types";
import Skill from "@/components/Skill";
import { Button } from "@/components/ui/button";

// Skill categories
const CATEGORIES = ["All", "Frontend", "Backend", "Design", "DevOps"];

export default function SkillsList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [skills, setSkills] = useState<SkillType[]>([]);
  const [filteredSkills, setFilteredSkills] = useState<SkillType[]>([]);

  // Mock skills data
  useEffect(() => {
    const skillsData: SkillType[] = [
      { id: 1, name: "HTML & CSS", level: 95, category: "Frontend" },
      { id: 2, name: "JavaScript", level: 90, category: "Frontend" },
      { id: 3, name: "React", level: 88, category: "Frontend" },
      { id: 4, name: "TypeScript", level: 85, category: "Frontend" },
      { id: 5, name: "Node.js", level: 80, category: "Backend" },
      { id: 6, name: "Express", level: 75, category: "Backend" },
      { id: 7, name: "UI/UX Design", level: 85, category: "Design" },
      { id: 8, name: "Figma", level: 90, category: "Design" },
      { id: 9, name: "Docker", level: 70, category: "DevOps" },
      { id: 10, name: "Git/GitHub", level: 88, category: "DevOps" },
      { id: 11, name: "TailwindCSS", level: 92, category: "Frontend" },
      { id: 12, name: "Next.js", level: 82, category: "Frontend" },
    ];
    
    setSkills(skillsData);
    setFilteredSkills(skillsData);
  }, []);
  
  // Filter skills by category
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(
        skills.filter(skill => skill.category === selectedCategory)
      );
    }
  }, [selectedCategory, skills]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className="transition-all"
          >
            {category}
          </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
        {filteredSkills.map((skill, index) => (
          <Skill key={skill.id} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
}
