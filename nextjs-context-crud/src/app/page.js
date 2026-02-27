'use client';
import TaskCard from '@/components/TaskCard';
import { useTasks } from '@/context/TaskContext';

function Home() {
  const { tasks } = useTasks();

  return (
    <div className='flex justify-center'>
      <div className="w-7/12">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Home;
