import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";
import { useState } from "react";
import { TaskList } from "./components/TaskList";
import { v4 as uuid } from "uuid";

export type TaskData = {
  id: string;
  content: string;
  isFinished: boolean;
};

export function App() {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  function handleCreate(content: string) {
    setTasks((state) => [
      ...state,
      {
        id: uuid(),
        content,
        finishCode: "1",
        isFinished: false,
      },
    ]);
  }

  function handleDelete(id: string) {
    setTasks((state) => state.filter((task) => task.id != id));
  }
  function handleFinish(taskData: TaskData) {
    setTasks((state) =>
      state.map((task) => (task.id === taskData.id ? taskData : task))
    );
  }

  return (
    <div>
      <Header />
      <CreateTask onCreate={handleCreate} />
      <main>
        <TaskList
          onDelete={handleDelete}
          onFinish={handleFinish}
          tasks={tasks}
        />
      </main>
    </div>
  );
}
