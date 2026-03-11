import TaskItem from './TaskItem';
import { useTasks } from '../context/useTasks';

function TaskList() {
  const { tasks } = useTasks();

  return (
    <div>
      <h1 className="text-3xl font-bold text-center block my-2">Task app</h1>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
