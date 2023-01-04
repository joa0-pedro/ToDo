import { TaskData } from "../App";
import { FeedEmpty } from "./FeedEmpty";
import { TaskItem } from "./TaskItem";
import styles from "../CSS/TaskList.module.css";

interface TaskListProps {
  onFinish(task: TaskData): void;
  onDelete(id: string): void;
  tasks: TaskData[];
}
export function TaskList({ onFinish, onDelete, tasks }: TaskListProps) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.created}>
          <p>Tarefas criadas</p>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.finished}>
          <p>Concluídas</p>
          <span>{tasks.filter((task) => task.isFinished).length}</span>
        </div>
      </div>
      {tasks.length ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDeleteTask={onDelete}
            onFinishTask={onFinish}
          />
        ))
      ) : (
        <FeedEmpty />
      )}
    </div>
  );
}
