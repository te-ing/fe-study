import DateInput from "components/dateInput/DateInput";
import { DateProvider } from "context/date";
import "scss/index.scss";

function App() {
  // eslint-disable-next-line no-console
  return (
    <DateProvider>
      <DateInput clickDay={(day) => console.log(day)} />
    </DateProvider>
  );
}

export default App;
