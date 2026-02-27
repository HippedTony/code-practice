import { useTasks } from '@/context/TaskContext';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

function TaskCard({ task }) {
  const router = useRouter();
  const { deleteTask } = useTasks();

  const handleDelete = (e) => {
    e.stopPropagation();
    const accept = window.confirm('Are you sure?');
    if (accept) {
      deleteTask(task.id);
      toast.success('Task deleted successfully');
    }
  };

  return (
    <div
      className="bg-gray-700 text-white m-2 px-20 py-5 items-center cursor-pointer hover:bg-slate-600"
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <div className='flex justify-between'>
        <h1>{task.title}</h1>
        <button
          className="cursor-pointer focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      <p className='text-gray-300'>{task.description}</p>
      <span className='text-gray-400 text-xs'>{task.id}</span>
    </div>
  );
}

export default TaskCard;
