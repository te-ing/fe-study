import { useDateActions, useDateValue } from "context/date";
import dayjs from "dayjs";
import styles from "scss/components/month/monthHeader.module.scss";
import { DoubleArrow, SingleArrow } from "scss/svg";
import { YMFormat } from "utils/dayjs-helper";

function MonthHeader() {
  const date = useDateValue();
  const { up, down, set } = useDateActions();

  return (
    <div className={styles.wrapper}>
      <button type="button" onClick={() => up("year")} className={styles.reverse}>
        <DoubleArrow />
      </button>
      <button type="button" onClick={() => up("month")} className={styles.reverse}>
        <SingleArrow />
      </button>
      <button type="button" onClick={() => set(dayjs())}>
        {YMFormat(date)}
      </button>
      <button type="button" onClick={() => down("month")}>
        <SingleArrow />
      </button>
      <button type="button" onClick={() => down("year")}>
        <DoubleArrow />
      </button>
    </div>
  );
}

export default MonthHeader;
