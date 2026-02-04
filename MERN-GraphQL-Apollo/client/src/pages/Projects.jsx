import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";

function Projects() {
  return (
    <div className="flex h-4/5 w-4/5 flex-wrap justify-evenly rounded-lg bg-zinc-900 p-8 shadow-lg shadow-black">
      <h1 className="mb-4 flex h-1/6 min-h-12 w-full items-center justify-center py-2 text-2xl font-bold">
        Project Manager
      </h1>
      <div className="flex h-5/6 max-h-full w-full justify-between gap-x-1">
        <ProjectForm />
        <ProjectList />
      </div>
    </div>
  );
}

export default Projects;
