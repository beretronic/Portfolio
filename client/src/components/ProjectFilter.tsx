import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ProjectFilterProps {
  categories: string[];
  onFilterChange: (category: string) => void;
  currentFilter: string;
}

export default function ProjectFilter({ 
  categories, 
  onFilterChange, 
  currentFilter 
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      {categories.map(category => (
        <Button
          key={category}
          variant={currentFilter === category ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange(category)}
          className="transition-all"
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
