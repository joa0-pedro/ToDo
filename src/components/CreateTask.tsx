import styles from "../CSS/CreateTask.module.css";
import * as Icon from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface CreateTaskProps {
  onCreate(content: string): void;
}

export function CreateTask({ onCreate }: CreateTaskProps) {
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event?.preventDefault();
    onCreate(newTaskText);
    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleNewTaskValid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
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
    </article>
  );
}
