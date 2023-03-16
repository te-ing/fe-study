import dayjs from "dayjs";
import { MouseEventHandler } from "react";
import styles from "scss/components/month/monthView.module.scss";
import { numberToArray } from "utils";

type TProps = {
  date: dayjs.ConfigType;
  clickDay: (day: string) => void;
  increase: (level: "month" | "year") => void;
  decrease: (level: "month" | "year") => void;
};
const whatDay = ["일", "월", "화", "수", "목", "금", "토"];

export default function MonthView({ date, clickDay, increase, decrease }: TProps) {
  const startOfDay = dayjs(date).startOf("month").day(); // Sunday: 0 Saturday: 6
  const endOfDay = dayjs(date).endOf("month").day(); // Sunday: 0 Saturday: 6
  const month = numberToArray(dayjs(date).daysInMonth());
  const lastMonth = numberToArray(dayjs(date).subtract(1, "M").daysInMonth());
  const nextMonth = numberToArray(6 - endOfDay);

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
      {whatDay.map((name) => (
        <div className={styles.whatDay} key={name}>
          {name}
        </div>
      ))}
      {startOfDay
        ? lastMonth.slice(-startOfDay).map((day) => (
            <button className={styles.emptyDay} type="button" key={`last-${day}`} onClick={handleClickEmptyDay}>
              {day}
            </button>
          ))
        : ""}
      {month.map((day) => (
        <button type="button" key={`curr-${day}`} onClick={handleClickDay}>
          {day}
        </button>
      ))}
      {nextMonth.map((day) => (
        <button className={styles.emptyDay} type="button" key={`next-${day}`} onClick={handleClickEmptyDay}>
          {day}
        </button>
      ))}
    </div>
  );
}
