import MonthView from "components/month/MonthView";
import dayjs from "dayjs";
import { useState } from "react";
import "scss/index.scss";

function App() {
  const [count, setCount] = useState<number>(0);
  const currMonth = dayjs().subtract(-count, "M");
  const monthIncrement = () => {
    setCount(count + 1);
  };

  const monthDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <p>month selector</p>
      <div style={{ display: "flex" }}>
        <button type="button" onClick={monthDecrement}>
          -
        </button>
        <p style={{ fontSize: "24px" }}>{currMonth.format("YYYY년 MM월 DD일")}</p>
        <button type="button" onClick={monthIncrement}>
          +
        </button>
      </div>
      <MonthView date={currMonth} />
    </>
  );
}

export default App;
