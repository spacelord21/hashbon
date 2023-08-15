import styles from "./app.module.scss";
import { MessageItem } from "./components/message-item/message-item";
import image from "./assets/bot.png";

function App() {
  return (
    <div className={styles.main}>
      <div className={styles.chat}>
        <MessageItem avatar={image} isSent={false} text="Привет" />
        <MessageItem
          avatar={image}
          isSent={true}
          text="First task is following: 
Lucy has measuring cups of sizes 1 cup, 1/5 cup, 1/3 cup, and 1/4 cup. She is trying to measure out 1/6 of a cup of water and says, ''If I fill up the the 1/2 cup and then pour that into the 1/3 cup until it is full, there will be 1/6 of a cup of water left.'"
        />
      </div>
    </div>
  );
}

export default App;
