import styles from "./avatar.module.scss";

interface IAvatarProps {
  avatar: string;
}

export const Avatar = ({ avatar }: IAvatarProps) => {
  return <img src={avatar} alt="Avatar" className={styles.avatar} />;
};
