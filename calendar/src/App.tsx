import Header from "components/header/Header";
import MonthView from "components/month/MonthView";
import styles from "scss/app.module.scss";
import dayjs from "dayjs";
import { useState } from "react";
import "scss/index.scss";

function App() {
  const [month, setMonth] = useState<number>(0);
  const currMonth = dayjs().subtract(-month, "M");
  const increment = (level: "year" | "month") => (level === "month" ? setMonth(month - 1) : setMonth(month - 12));
  const decrement = (level: "year" | "month") => (level === "month" ? setMonth(month + 1) : setMonth(month + 12));
  const reset = () => setMonth(0);

  return (
    <>
      <div className={styles.wrapper}>
        <Header
          date={currMonth}
          increase={(level) => increment(level)}
          decrease={(level) => decrement(level)}
          reset={reset}
        />
        <MonthView date={currMonth} />
      </div>
      <input type="date" />
    </>
  );
}

export default App;
