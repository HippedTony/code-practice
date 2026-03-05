import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import { NavLink } from 'react-router';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1>Tasks {tasks.length}</h1>
        <NavLink
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
          to={'/create-task'}
        >
          Create Task
        </NavLink>
      </header>

      <div className="grid grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between">
              <h3>{task.title}</h3>
              <div className="flex gap-x-2">
                <NavLink
                  className="bg-zinc-600 px-2 py-1 text-xs rounded-md"
                  to={`/edit-task/${task.id}`}
                >
                  Edit
                </NavLink>
                <button
                  className="bg-red-500 px-2 py-1 text-xs rounded-md"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
