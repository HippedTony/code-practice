import {
  useGetTasksQuery,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "../api/apiSlice";

function TasksList() {
  const { data: tasks, isError, isLoading, error } = useGetTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <ul className="mt-10 flex w-full max-w-sm flex-col gap-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
        >
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {task.name}
          </h3>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {task.description}
          </p>
          <div className="flex justify-between">
            <div>
              <input
                type="checkbox"
                name="completed"
                id={task.id}
                checked={task.completed}
                onChange={(e) => {
                  updateTask({
                    ...task,
                    completed: e.target.checked,
                  });
                }}
                className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                htmlFor={task.id}
              >
                Completed
              </label>
            </div>
            <button
              className="me-2 mb-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 focus:outline-none dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TasksList;
