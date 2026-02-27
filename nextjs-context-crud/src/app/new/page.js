'use client';
import { useTasks } from '@/context/TaskContext';
import { useRouter, useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function Page() {
  const { tasks, createTask, updateTask } = useTasks();
  const router = useRouter();
  const params = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound) {
        setValue('title', taskFound.title);
        setValue('description', taskFound.description);
      }
    }
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
      toast.success('Task updated successfully');
    } else {
      createTask(data.title, data.description);
      toast.success('Task created successfully');
    }
    router.push('/');
  });

  return (
    <div className="w-full max-w-xs mx-auto">
      <form
        className="bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={onSubmit}
      >
        <div className="mb-4">
          <h1 className="font-bold mb-4">New Task</h1>
          <label className="block text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white  leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Write a title"
            {...register('title', { required: true })}
          />
          {errors.title && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Write a description"
            {...register('description', { required: true })}
          />
          {errors.description && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-30"
            disabled={errors.title || errors.description}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Page;
