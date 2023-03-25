/* eslint-disable @typescript-eslint/no-unused-vars */
import dayjs from "dayjs";
import { createContext, useContext, useMemo, useState } from "react";

const DateValueContext = createContext<dayjs.Dayjs>(dayjs());
const DateActionsContext = createContext({
  up: (type: "day" | "month" | "year") => {},
  down: (type: "day" | "month" | "year") => {},
  set: (value: dayjs.Dayjs) => {},
});

type TProps = {
  children: React.ReactNode;
};

export function DateProvider({ children }: TProps) {
  const [date, setDate] = useState(dayjs());

  const actions = useMemo(
    () => ({
      up: (type: "day" | "month" | "year") => {
        if (type === "day") {
          setDate((prev) => prev.subtract(1, "D"));
        }
        if (type === "month") {
          setDate((prev) => prev.subtract(1, "M"));
        }
        if (type === "year") {
          setDate((prev) => prev.subtract(1, "year"));
        }
      },
      down: (type: "day" | "month" | "year") => {
        if (type === "day") {
          setDate((prev) => prev.subtract(-1, "D"));
        }
        if (type === "month") {
          setDate((prev) => prev.subtract(-1, "M"));
        }
        if (type === "year") {
          setDate((prev) => prev.subtract(-1, "year"));
        }
      },
      set: (value: dayjs.Dayjs) => {
        setDate(value);
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <DateActionsContext.Provider value={actions}>
      <DateValueContext.Provider value={date}>{children}</DateValueContext.Provider>
    </DateActionsContext.Provider>
  );
}

export const useDateValue = () => {
  const value = useContext(DateValueContext);
  if (value === undefined) {
    throw new Error("useDateValue should be used within ModalProvider");
  }
  return value;
};

export const useDateActions = () => {
  const value = useContext(DateActionsContext);
  if (value === undefined) {
    throw new Error("useDateActions should be used within ModalProvider");
  }
  return value;
};
