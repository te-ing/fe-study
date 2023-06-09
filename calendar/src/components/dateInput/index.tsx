import cx from "classnames";
import Month from "components/month";
import { ComponentProps, MouseEventHandler, useState } from "react";
import styles from "scss/components/dateInput/dateInput.module.scss";
import { YMDFormat } from "utils/dayjs-helper";

type TProps = ComponentProps<"button"> & {
  clickDay?: (day: string) => void;
  placeholder?: string;
};

export default function DateInput({ clickDay, placeholder = "연도. 월. 일", ...props }: TProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<string>(placeholder);

  const handleClickDate: MouseEventHandler<HTMLButtonElement> = (e) => {
    props.onClick && props.onClick(e);
    setIsOpen(!isOpen);
  };

  const handleClickDay = (day: string) => {
    const formattedDate = YMDFormat(day);
    clickDay && clickDay(formattedDate);
    setDate(formattedDate);
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <Month clickDay={handleClickDay} className={cx(styles.month, { [styles.hidden]: !isOpen })} />
      <button type="button" onClick={handleClickDate} className={cx(styles.button, props.className)} {...props}>
        {date || placeholder}
      </button>
    </div>
  );
}
