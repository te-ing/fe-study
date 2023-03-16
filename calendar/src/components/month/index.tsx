import styles from "scss/components/month/month.module.scss";
import dayjs from "dayjs";
import { useState } from "react";
import MonthView from "./MonthView";
import MonthHeader from "./MonthHeader";
import cx from "classnames";

type TProps = {
  clickDay: (day: string) => void;
  className?: string;
};

function Month({ clickDay, className }: TProps) {
  const [month, setMonth] = useState<number>(0);
  const currMonth = dayjs().subtract(-month, "M");
  const increment = (level: "year" | "month") => (level === "month" ? setMonth(month - 1) : setMonth(month - 12));
  const decrement = (level: "year" | "month") => (level === "month" ? setMonth(month + 1) : setMonth(month + 12));
  const reset = () => setMonth(0);

  const handleClickDay = (day: string) => clickDay(day);

  return (
    <div className={cx(styles.wrapper, className)}>
      <MonthHeader
        date={currMonth}
        increase={(level) => increment(level)}
        decrease={(level) => decrement(level)}
        reset={reset}
      />
      <MonthView
        date={currMonth}
        clickDay={handleClickDay}
        increase={(level) => increment(level)}
        decrease={(level) => decrement(level)}
      />
    </div>
  );
}

export default Month;
