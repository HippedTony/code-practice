import { useTasks } from '../context/useTasks';
import { IoCheckmarkOutline, IoTrash } from 'react-icons/io5';
import type { Task } from '../interfaces/task.interface';

interface Props {
  task: Task;
}

function TaskItem({ task }: Props) {
  const { deleteTask, updateTask } = useTasks();

  return (
    <>
      <div className="bg-gray-900 p-2 my-2 flex justify-between hover:bg-gray-800">
        <div>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
        <div className="flex gap-x-2 items-center">
          <button
            className="cursor-pointer hover:bg-gray-950 h-fit rounded-full p-1"
            onClick={async () => {
              await updateTask(task._id, {
                done: !task.done,
              });
            }}
          >
            {task.done ? (
              <IoCheckmarkOutline className="text-green-500" />
            ) : (
              <IoCheckmarkOutline className="text-gray-500" />
            )}
          </button>
          <button
            className="cursor-pointer hover:bg-gray-950 h-fit rounded-full p-1"
            onClick={async () => {
              if (!window.confirm('Are you sure you want to delete this task?'))
                return;
              await deleteTask(task._id);
            }}
          >
            <IoTrash />
          </button>
        </div>
      </div>
    </>
  );
}

export default TaskItem;
