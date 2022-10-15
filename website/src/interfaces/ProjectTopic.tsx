import ProjectItem from "./ProjectItem";

interface ProjectTopicProps {
  image: string;
  title: string;
  substring?: string;
  projects: Array<ProjectItem>;
}

export default ProjectTopicProps;
