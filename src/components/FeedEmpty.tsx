import styles from "../CSS/FeedEmpty.module.css";

export function FeedEmpty() {
  return (
    <div className={styles.feed}>
      <div className={styles.content}>
        <img src="/src/assets/Clipboard.png" alt="Clipboard" />
        <div>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </div>
  );
}
