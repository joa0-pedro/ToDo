import styles from "../CSS/Feed.module.css";
import * as Icon from "phosphor-react";

interface TaskProps {
  content: string;
  onDeleteTask: (task: string) => void;
}

export function Tasks({ content, onDeleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(content);
  }
  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <div className={styles.created}>
          <p>Tarefas criadas</p>
          <span>5</span>
        </div>
        <div className={styles.finished}>
          <p>Concluídas</p>
          <span>0</span>
        </div>
      </div>
      <div className={styles.feed}>
        <div className={styles.box}>
          <div className={styles.marker}>
            <Icon.Circle size={24} weight="bold" />
            {/* <Icon.Check size={16} /> */}
          </div>
          <div className={styles.description}>
            <p>{content}</p>
          </div>
          <button onClick={handleDeleteTask} className={styles.delete}>
            <Icon.Trash size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

// if (task.id != null) {
// return <Task key={task.id} content={task.content} />;
// } else {
// return <FeedEmpty />;
// }

// {if (task.id == null) {
// 	<FeedEmpty />
// }
// else {
// 	{task.map(task) => {
// 		return <Task key={task.id} content={task.content}
// 	}}
// }}
