import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client/react";
import { GET_PROJECT } from "../graphql/projects";
import TasksList from "../components/tasks/TasksList";
import TaskForm from "../components/tasks/TaskForm";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function ProjectDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(GET_PROJECT, {
    variables: {
      id: params.id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div className="flex h-4/5 w-4/5 flex-wrap rounded-lg bg-zinc-900 p-8 shadow-lg shadow-black">
      <Link to="/projects">
        <AiOutlineArrowLeft className="h-full w-5" />
      </Link>

      <div className="flex h-1/4 min-h-24 w-full justify-center bg-zinc-900">
        <div>
          <h1 className="mb-4 py-2 text-2xl font-bold">
            {data.project.name}
          </h1>
          <p>{data.project.description}</p>
        </div>
      </div>

      <div className="flex h-3/4 max-h-full w-full justify-between gap-x-1">
        <TaskForm projectId={params.id} />
        <TasksList tasks={data.project.tasks} />
      </div>
    </div>
  );
}

export default ProjectDetails;
