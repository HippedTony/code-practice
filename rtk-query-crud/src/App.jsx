import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";

function App() {
  return (
    <div className="mx-auto mt-10 flex h-full w-4/6 flex-col items-center justify-center">
      <TaskForm />
      <TasksList />
    </div>
  );
}

export default App;
