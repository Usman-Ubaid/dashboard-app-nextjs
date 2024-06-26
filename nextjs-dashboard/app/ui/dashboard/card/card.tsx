import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>12.321</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12%</span> more than previous weeks
        </span>
      </div>
    </div>
  );
};

export default card;
