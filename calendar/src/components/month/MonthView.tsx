import dayjs from "dayjs";
import styles from "scss/components/month/monthView.module.scss";
import { numberToArray } from "utils";

type TProps = {
  date: dayjs.ConfigType;
};
const whatDay = ["일", "월", "화", "수", "목", "금", "토"];

export default function MonthView({ date }: TProps) {
  const startOfDay = dayjs(date).startOf("month").day(); // Sunday: 0 Saturday: 6
  const endOfDay = dayjs(date).endOf("month").day(); // Sunday: 0 Saturday: 6
  const month = numberToArray(dayjs(date).daysInMonth());
  const lastMonth = numberToArray(dayjs(date).subtract(1, "M").daysInMonth());
  const nextMonth = numberToArray(6 - endOfDay);

  return (
    <div className={styles.wrapper}>
      {whatDay.map((name) => (
        <div className={styles.whatDay} key={name}>
          {name}
        </div>
      ))}
      {startOfDay
        ? lastMonth.slice(-startOfDay).map((day) => (
            <button className={styles.emptyDay} type="button" key={`last-${day}`}>
              {day}
            </button>
          ))
        : ""}
      {month.map((day) => (
        <button type="button" key={`curr-${day}`}>
          {day}
        </button>
      ))}
      {nextMonth.map((day) => (
        <button className={styles.emptyDay} type="button" key={`next-${day}`}>
          {day}
        </button>
      ))}
    </div>
  );
}
