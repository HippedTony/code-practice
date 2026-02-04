import { useMutation } from "@apollo/client/react";
import { DELETE_TASK } from "../../graphql/tasks";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import ConfirmationCard from "../ConfirmationCard/ConfirmationCard";

function TaskCard({ task }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: ["GetProject"],
  });

  const handleDeleteTask = async () => {
    await deleteTask({
      variables: {
        id: task._id,
      },
    });

    setShowConfirmation(false);
  };

  return (
    <>
      <div className="mb-2 w-full rounded-lg bg-zinc-800 p-4 shadow-lg shadow-black">
        <h1 className="max-w-64 pe-4">{task.title}</h1>
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowConfirmation(true);
          }}
        >
          <AiOutlineDelete className="h-full w-6 rounded-lg p-1 hover:bg-red-500" />
        </button>
      </div>

      {showConfirmation && (
        <ConfirmationCard
          onCancel={() => setShowConfirmation(false)}
          onConfirm={() => handleDeleteTask()}
          type={"task"}
          name={task.title}
        />
      )}
    </>
  );
}

export default TaskCard;
