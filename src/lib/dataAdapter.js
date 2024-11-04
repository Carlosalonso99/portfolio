import projects from "../data/projects.json";
import skills from "../data/skills.json";
import description from "../data/description.json"

export const getProjects = () => projects;
export const getSkills = () => skills;
export const getDescription = () => description;

export const getSkillTypes = () => {
  const types = new Set(skills.skills.map(skill => skill.type));
  return Array.from(types);
};
export const getSkillsByTypeAndLevel = (type, level) => {
  return skills.skills.filter(skill => skill.type === type && skill.level === level);
};