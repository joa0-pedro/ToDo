import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

const task = [
  { id: 1, content: "Tarefa 1" },
  { id: 2, content: "Tarefa 2" },
];

export function App() {
  return (
    <div>
      <Header />
      <CreateTask />
      <main>
        {task.map((task) => {
          return (
            <Tasks
              key={task.id}
              content={task.content}
              onDeleteTask={deleteTask}
            />
          );
        })}
      </main>
    </div>
  );
}
