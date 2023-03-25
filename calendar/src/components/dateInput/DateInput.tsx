import cx from "classnames";
import Month from "components/month/Month";
import { useDateValue } from "context/date";
import { ComponentProps, MouseEventHandler, useState } from "react";
import styles from "scss/components/dateInput/dateInput.module.scss";
import { YMDFormat } from "utils/dayjs-helper";

type TProps = ComponentProps<"button"> & {
  clickDay?: (day: string) => void;
  placeholder?: string;
};

export default function DateInput({ clickDay, placeholder = "연도. 월. 일", ...props }: TProps) {
  const [isOpen, setIsOpen] = useState(false);
  const date = useDateValue();

  const handleClickDate: MouseEventHandler<HTMLButtonElement> = (e) => {
    props.onClick && props.onClick(e);
    clickDay && clickDay(YMDFormat(date));
    setIsOpen(!isOpen);
  };
  const toggleMonthView = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <Month toggle={toggleMonthView} className={cx(styles.month, { [styles.hidden]: !isOpen })} />
      <button type="button" onClick={handleClickDate} className={cx(styles.button, props.className)} {...props}>
        {!date ? placeholder : YMDFormat(date)}
      </button>
    </div>
  );
}
