import { useQuery } from "@apollo/client/react";
import { GET_PROJECTS } from "../graphql/projects";
import ProjectCard from "./ProjectCard";

function ProjectList() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  let content;

  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p className="text-red-500">Error loading projects</p>;
  } else if (data.projects.length === 0) {
    content = <h1>You don't have any projects yet...</h1>;
  } else {
    content = data.projects.map((project) => (
      <ProjectCard key={project._id} project={project} />
    ));
  }

  return <div className="h-4/5 w-full overflow-y-auto px-2.5">{content}</div>;
}

export default ProjectList;
