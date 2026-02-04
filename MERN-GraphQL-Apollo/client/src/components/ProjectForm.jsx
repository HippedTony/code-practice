import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { CREATE_PROJECT, GET_PROJECTS } from "../graphql/projects";

function ProjectForm() {
  const [project, setProject] = useState({
    name: "",
    description: "",
  });
  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
    refetchQueries: [
      {
        query: GET_PROJECTS,
      },
      "GetProjects",
    ],
  });

  const handleChange = ({ target: { name, value } }) => {
    setProject({
      ...project,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject({
      variables: {
        name: project.name,
        description: project.description,
      },
    });


    setProject({
      name: "",
      description: "",
    });
    e.target.reset();
    e.target.name.focus();
  };

  return (
    <form
      className="h-4/5 w-2/5 overflow-y-auto px-2.5 py-1"
      onSubmit={handleSubmit}
    >
      {error && <p>{error.message}</p>}

      <input
        type="text"
        name="name"
        placeholder="Write a title"
        onChange={handleChange}
        className="mb-3 block w-full rounded-lg bg-zinc-800 p-4 text-white shadow-lg"
      />
      <textarea
        name="description"
        rows={3}
        placeholder="Write a description"
        onChange={handleChange}
        className="mb-3 block w-full rounded-lg bg-zinc-800 p-4 text-white shadow-lg"
      ></textarea>
      <button
        disabled={!project.name || !project.description || loading}
        className="mb-3 rounded-md bg-blue-500 px-4 py-1 text-lg disabled:bg-zinc-400"
      >
        Save
      </button>
    </form>
  );
}

export default ProjectForm;
