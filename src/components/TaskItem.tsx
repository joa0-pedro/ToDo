import { TaskData } from "../App";
import styles from "../CSS/TaskItem.module.css";
import * as Icon from "phosphor-react";

interface TaskProps {
  task: TaskData;
  onDeleteTask: (id: string) => void;
  onFinishTask: (task: TaskData) => void;
}

export function TaskItem({ task, onDeleteTask, onFinishTask }: TaskProps) {
  function handleDelete() {
    onDeleteTask(task.id);
  }

  function handleFinish() {
    task.isFinished = !task.isFinished;
    onFinishTask(task);
  }
  return (
    <div className={styles.tasks}>
      <div className={styles.box}>
        <button onClick={handleFinish} className={styles.marker}>
          {task.isFinished ? (
            <img src="/public/checkcheck.svg" alt="check" />
          ) : (
            <Icon.Circle size={24} weight="bold" />
          )}
        </button>
        <div
          className={
            task.isFinished ? styles.descriptionFinished : styles.description
          }
        >
          <p>{task.content}</p>
        </div>
        <button onClick={handleDelete} className={styles.delete}>
          <Icon.Trash size={24} weight="bold" />
        </button>
      </div>
    </div>
  );
}
