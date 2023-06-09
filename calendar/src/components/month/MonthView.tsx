import { MouseEventHandler } from "react";
import styles from "scss/components/month/monthView.module.scss";
import dayjs from "dayjs";
import { currMonthArray, lastMonthArray, nextMonthArray, startOfDay } from "utils/dayjs-helper";
import { WHAT_DAY } from "constants/day";

type TProps = {
  date: dayjs.ConfigType;
  clickDay: (day: string) => void;
  increase: (level: "month" | "year") => void;
  decrease: (level: "month" | "year") => void;
};

export default function MonthView({ date, clickDay, increase, decrease }: TProps) {
  const handleClickDay: MouseEventHandler<HTMLButtonElement> = (target) => {
    const day = target.currentTarget.innerText;
    clickDay(`${dayjs(date).format("YYYY-MM")}-${day.length < 2 ? `0${day}` : day}`);
  };

  const handleClickEmptyDay: MouseEventHandler<HTMLButtonElement> = (target) => {
    const day = Number(target.currentTarget.innerText);
    day < 15 ? decrease("month") : increase("month");
  };

  return (
    <div className={styles.wrapper}>
      {WHAT_DAY.map((day) => (
        <div className={styles.whatDay} key={day}>
          {day}
        </div>
      ))}
      {startOfDay
        ? lastMonthArray(date)
            .slice(-startOfDay(date))
            .map((day) => (
              <button className={styles.emptyDay} type="button" key={`last-${day}`} onClick={handleClickEmptyDay}>
                {day}
              </button>
            ))
        : ""}
      {currMonthArray(date).map((day) => (
        <button type="button" key={`curr-${day}`} onClick={handleClickDay}>
          {day}
        </button>
      ))}
      {nextMonthArray(date).map((day) => (
        <button className={styles.emptyDay} type="button" key={`next-${day}`} onClick={handleClickEmptyDay}>
          {day}
        </button>
      ))}
    </div>
  );
}
