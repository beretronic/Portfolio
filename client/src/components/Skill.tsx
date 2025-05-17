import { Skill as SkillType } from "@/types";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { MotionSection } from "@/components/ui/motion-section";

interface SkillProps {
  skill: SkillType;
  index: number;
}

export default function Skill({ skill, index }: SkillProps) {
  return (
    <MotionSection 
      delay={index} 
      direction="left"
      className="mb-6"
    >
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h3 className="text-base font-medium">{skill.name}</h3>
            <Badge variant="skill" className="ml-2">
              {skill.category}
            </Badge>
          </div>
          <span className="text-sm font-medium">{skill.level}%</span>
        </div>
        <Progress 
          value={skill.level} 
          max={100} 
          size="sm" 
          variant={index % 2 === 0 ? "default" : "accent"}
          className="w-full" 
        />
      </div>
    </MotionSection>
  );
}
