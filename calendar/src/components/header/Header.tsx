import MonthView from "components/month/MonthView";
import dayjs from "dayjs";
import styles from "scss/components/header/header.module.scss";
import { DoubleArrow, SingleArrow } from "scss/svg";

type TProps = {
  date: dayjs.ConfigType;
  increase: (level: "month" | "year") => void;
  decrease: (level: "month" | "year") => void;
  reset: () => void;
};

function Header({ date, increase, decrease, reset }: TProps) {
  return (
    <div className={styles.wrapper}>
      <button type="button" onClick={() => increase("year")} className={styles.reverse}>
        <DoubleArrow />
      </button>
      <button type="button" onClick={() => increase("month")} className={styles.reverse}>
        <SingleArrow />
      </button>
      <button type="button" onClick={reset}>
        {dayjs(date).format("YYYY년 MM월 DD일")}
      </button>
      <button type="button" onClick={() => decrease("month")}>
        <SingleArrow />
      </button>
      <button type="button" onClick={() => decrease("year")}>
        <DoubleArrow />
      </button>
    </div>
  );
}

export default Header;
