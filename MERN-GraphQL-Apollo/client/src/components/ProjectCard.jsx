import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client/react";
import { AiOutlineDelete } from "react-icons/ai";
import { DELETE_PROJECT, GET_PROJECTS } from "../graphql/projects";
import { useState } from "react";
import ConfirmationCard from "./ConfirmationCard/ConfirmationCard";

function ProjectCard({ project }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    refetchQueries: [
      {
        query: GET_PROJECTS,
      },
      "GetProjects",
    ],
  });

  const handleDeleteProject = async () => {
    await deleteProject({
      variables: {
        id: project._id,
      },
    });

    setShowConfirmation(false);
  };

  return (
    <>
      <div
        className="mb-2 w-full rounded-lg bg-zinc-800 p-4 shadow-lg shadow-black hover:cursor-pointer hover:bg-zinc-700"
        onClick={() => navigate(`/projects/${project._id}`)}
      >
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setShowConfirmation(true);
          }}
          className="me-6 h-fit"
        >
          <AiOutlineDelete className="h-full w-6 rounded-lg p-1 hover:bg-red-500" />
        </button>
      </div>

      {showConfirmation && (
        <ConfirmationCard
          onCancel={() => setShowConfirmation(false)}
          onConfirm={() => handleDeleteProject()}
          type={"project"}
          name={project.name}
        />
      )}
    </>
  );
}

export default ProjectCard;
