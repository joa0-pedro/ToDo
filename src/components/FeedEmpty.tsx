import styles from "../CSS/Feed.module.css";

export function FeedEmpty() {
  return (
    <div>
      <img src="/src/assets/Clipboard.png" alt="Clipboard" />
      <div className={styles.content}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
