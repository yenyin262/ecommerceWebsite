import { useState } from "react";
import styles from "./PopUp.module.css";
export default function PopUp({}) {
  const [trigger, setTrigger] = useState(true);
  return (
    <>
      {trigger && (
        <div>
          <div className={styles.container}>
            <div className={styles.btnContainer}>
              <button className={styles.btn} onClick={() => setTrigger(false)}>
                X
              </button>
            </div>
            <div>
              This website is built for educational purposes only. Orders will
              not be fulfilled.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
