import TaskCard from "./TaskCard"

function TasksList({ tasks }) {
  return (
    <div className="h-4/5 w-full overflow-y-auto px-2.5">
      {tasks.map(task => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  )
}

export default TasksList