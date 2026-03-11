import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import { useTasks } from '../context/useTasks';

const initialState = {
  title: '',
  description: '',
  done: false,
};

function TaskForm() {
  const [task, setTask] = useState(initialState);
  const { createTask } = useTasks();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTask(task);
    setTask(initialState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Write a title"
          value={task.title}
          onChange={handleChange}
          className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
        />

        <textarea
          name="description"
          id="description"
          rows={3}
          placeholder="Write a description"
          value={task.description}
          onChange={handleChange}
          className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
        ></textarea>

        <label htmlFor="done" className="inline-flex items-center gap-x-2 mb-4">
          <input
            type="checkbox"
            name="done"
            id="done"
            checked={task.done}
            onChange={() => setTask({ ...task, done: !task.done })}
            className="h-4 w-4 rounded-sm text-blue-600 focus:ring-2 border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-blue-600"
          />
          <span>Done</span>
        </label>

        <button className="bg-indigo-500 px-3 block py-2 w-full transition-all cursor-pointer hover:bg-indigo-700">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
