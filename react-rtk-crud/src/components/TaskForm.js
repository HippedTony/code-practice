import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router';

function TaskForm() {
  const [task, setTask] = useState({
    title: '',
    description: '',
  });
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params.id, tasks]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        }),
      );
    }

    navigate('/');
  };

  return (
    <form className="bg-zinc-800 max-w-sm p-4" onSubmit={handleSubmit}>
      <label className="block text-sx font-bold mb-2" htmlFor="title">
        Task:
      </label>
      <input
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        type="text"
        name="title"
        placeholder="title"
        value={task.title}
        onChange={handleChange}
      />
      <label className="block text-sx font-bold mb-2" htmlFor="description">
        Description:
      </label>
      <textarea
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        name="description"
        placeholder="description"
        value={task.description}
        onChange={handleChange}
      ></textarea>
      <button className='bg-indigo-600 px-2 py-1'>Save</button>
    </form>
  );
}

export default TaskForm;
