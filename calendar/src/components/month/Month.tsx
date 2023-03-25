import styles from "scss/components/month/month.module.scss";
import MonthView from "./MonthView";
import MonthHeader from "./MonthHeader";
import cx from "classnames";

type TProps = {
  className?: string;
  toggle: () => void;
};

function Month({ toggle, className }: TProps) {
  return (
    <div className={cx(styles.wrapper, className)}>
      <MonthHeader />
      <MonthView toggle={toggle} />
    </div>
  );
}

export default Month;
