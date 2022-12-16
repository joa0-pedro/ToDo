import styles from "../CSS/CreateTask.module.css";
import * as Icon from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Tasks } from "./Tasks";

export function CreateTask() {
  const [tasks, setTasks] = useState(["Nova Tarefa"]);

  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event?.preventDefault();

    setTasks([...tasks, newTaskText]);
    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleNewTaskValid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function deleteTask(TaskToDelete: string) {
    const WithoutDeletedOne = tasks.filter((task) => {
      return task !== TaskToDelete;
    });
    setTasks(WithoutDeletedOne);
  }

  return (
    <article>
      <form onSubmit={handleCreateNewTask} className={styles.task}>
        <textarea
          name="task"
          className={styles.textArea}
          value={newTaskText}
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskValid}
          required
        />
        <button type="submit" className={styles.button}>
          Criar <Icon.PlusCircle size={40} weight="bold" />
        </button>
      </form>
      <div>
        {tasks.map((task) => {
          return <Tasks key={task} content={task} onDeleteTask={deleteTask} />;
        })}
      </div>
    </article>
  );
}
