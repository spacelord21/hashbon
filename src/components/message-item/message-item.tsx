import { Avatar } from "../avatar/avatar";
import styles from "./message-item.module.scss";

interface IMessageItemProps {
  avatar: string;
  text: string;
  isSent: boolean;
}

export const MessageItem = ({ avatar, text, isSent }: IMessageItemProps) => {
  const messageClass = isSent ? styles.sent : styles.received;
  const containerClass = isSent
    ? styles.sentContainer
    : styles.receivedContainer;
  return (
    <div className={`${styles.container} ${containerClass}`}>
      <Avatar avatar={avatar} />
      <div className={`${styles.message} ${messageClass}`}>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
