import { useMutation } from "@apollo/client/react";
import { CREATE_TASK } from "../../graphql/tasks";
import { useState } from "react";

function TaskForm({ projectId }) {
  const [title, setTitle] = useState("");
  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: ["GetProject"],
  });

  const handleChange = ({ target: { value } }) => {
    setTitle(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask({
      variables: {
        title: title,
        projectId: projectId,
      },
    });

    e.target.reset();
    e.target.title.focus();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-4/5 w-2/5 overflow-y-auto px-2.5 py-1"
    >
      <p>Add task</p>
      <textarea
        name="title"
        rows={3}
        placeholder="Your task..."
        onChange={handleChange}
        className="mb-3 block w-full rounded-lg bg-zinc-800 p-4 text-white shadow-lg"
      ></textarea>
      <button
        disabled={!title}
        className="mb-3 rounded-md bg-blue-500 px-4 py-1 text-lg disabled:bg-zinc-400"
      >
        Add
      </button>
    </form>
  );
}

export default TaskForm;
